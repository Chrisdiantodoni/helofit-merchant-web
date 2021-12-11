var mysql = require("mysql");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");

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
  //   conn.query(
  //     "CREATE TABLE user (id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(30) NOT NULL)",
  //     (err, result) => {
  //       if (err) console.error("Error saat membuat tabel " + err);
  //       else console.log("Tabel user berhasil dibuat");
  //     }
  //   );
});

app.post("/daftar", (req, res) => {
  var username = req.body.username;
  var email = req.body.email;
  var password = req.body.password;
  conn.query(
    "INSERT INTO user (username, email, password) VALUES (?,?,?)",
    [username, email, password],
    (err, result) => {
      console.log(err);
    }
  );
});

app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
