var mysql = require("mysql");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
const e = require("cors");

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

app.post("/daftar", (req, res) => {
  var email = req.body.email;
  var nama_dpn = req.body.nama_dpn;
  var nama_blkg = req.body.nama_blkg;
  var password = req.body.password;
  conn.query(
    "INSERT INTO user (email, nama_dpn, nama_blkg, password) VALUES (?,?,?,?)",
    [email, nama_dpn, nama_blkg, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.post("/login", (req, res) => {
  var email = req.body.email;
  var password = req.body.password;
  conn.query(
    "SELECT * FROM user WHERE email = ? AND password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Email/Password Anda Masih Salah" });
      }
    }
  );
});
app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
