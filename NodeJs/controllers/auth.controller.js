const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Role = db.role;
const Admin = db.admin;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");

exports.signup = (req, res) => {
  // Save User to Database
  User.create({
    nama_dpn: req.body.nama_dpn,
    nama_blkg: req.body.nama_blkg,
    email: req.body.email,
    password: req.body.password,
  })
    .then((user) => {
      if (req.body.roles) {
        Role.findAll({
          where: {
            name: {
              [Op.or]: req.body.roles,
            },
          },
        }).then((roles) => {
          user.setRoles(roles).then(() => {
            res.send({ message: "Akun Berhasil Teregistrasi!" });
          });
        });
      } else {
        // user role = 1
        user.setRoles([1]).then(() => {
          res.send({ message: "Akun Berhasil Teregistrasi!" });
        });
      }
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
exports.signin = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "Email tidak ditemukan!" });
      }

      if (req.body.password != user.password) {
        return res.status(401).send({
          accessToken: null,
          message: "Password Salah!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];
      user.getRoles().then((roles) => {
        for (let i = 0; i < roles.length; i++) {
          authorities.push("ROLE_" + roles[i].name.toUpperCase());
        }
        res.status(200).send({
          id: user.id,
          nama_dpn: user.nama_dpn,
          nama_blkg: user.nama_blkg,
          email: user.email,
          roles: authorities,
          accessToken: token,
        });
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};

exports.adminsignin = (req, res) => {
  Admin.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((admin) => {
      if (!admin) {
        return res.status(404).send({ message: "Email tidak ditemukan!" });
      }

      if (req.body.password != admin.password) {
        return res.status(401).send({
          accessToken: null,
          message: "Password Salah!",
        });
      }

      var token = jwt.sign({ id: admin.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      res.status(200).send({
        id: admin.id,
        username: admin.username,
        email: admin.email,
        password: admin.password,
        accessToken: token,
      });
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};
