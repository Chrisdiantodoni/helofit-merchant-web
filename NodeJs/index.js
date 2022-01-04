var mysql = require("mysql");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
const e = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// var corsOptions = {
//   origin: "http://localhost:8000",
//   methods: ["GET", "POST"],
//   credentials: true,
// };
app.use(cors());

const db = require("./models");
const Role = db.role;

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and Resync Db");
//   initial();
// });

require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "microdigi",
});

conn.connect((err) => {
  if (err) console.log("Masalah dengan MySQL" + err);
  else console.log("Terkoneksi dengan Database");
  // conn.query(
  //   "CREATE TABLE user (email VARCHAR(30) NOT NULL PRIMARY KEY, nama_dpn VARCHAR(30) NOT NULL, nama_blkg VARCHAR(30) NOT NULL, password VARCHAR(30) NOT NULL)",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel user berhasil dibuat");
  //   }
  // );
});

app.get("/", (req, res) => {
  res.json({ message: "Database." });
});
// app.post("/daftar", (req, res) => {
//   var email = req.body.email;
//   var nama_dpn = req.body.nama_dpn;
//   var nama_blkg = req.body.nama_blkg;
//   var password = req.body.password;
//   conn.query(
//     "INSERT INTO user (email, nama_dpn, nama_blkg, password) VALUES (?,?,?,?)",
//     [email, nama_dpn, nama_blkg, password],
//     (err, result) => {
//       console.log(err);
//     }
//   );
// });

// app.post("/login", (req, res) => {
//   var email = req.body.email;
//   var password = req.body.password;
//   conn.query(
//     "SELECT * FROM user WHERE email = ? AND password = ?",
//     [email, password],
//     (err, result) => {
//       if (err) {
//         res.send({ err: err });
//       }
//       if (result.length > 0) {
//         res.send(result);
//       } else {
//         res.send({
//           message: "Login gagal. Mohon periksa Email/Password Anda kembali",
//         });
//       }
//     }
//   );
// });

app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
