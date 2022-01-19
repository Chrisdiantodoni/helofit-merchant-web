var mysql = require("mysql");
var bodyParser = require("body-parser");
var express = require("express");
var app = express();
var cors = require("cors");
const e = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

const db = require("./models");
// const { json } = require("sequelize/dist");
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
  // conn.query(
  //   "CREATE TABLE feedbacks (No INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY, nama VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, pesan VARCHAR(200) NOT NULL)",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel feedbacks berhasil dibuat");
  //   }
  // );
  // conn.query(
  //   "CREATE TABLE tasks (id INT UNSIGNED AUTO_INCREMENT,userID INT, deadline DATE NOT NULL, status BOOLEAN, keterangan VARCHAR(100) NOT NULL, PRIMARY KEY(id,userID), FOREIGN KEY (userID) REFERENCES users(id))",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel tasks berhasil dibuat");
  //   }
  // );
  // conn.query(
  //   "CREATE TABLE finances (id INT UNSIGNED AUTO_INCREMENT,userID INT, tipe VARCHAR(20) NOT NULL, kategori VARCHAR(20) NOT NULL, nominal INT NOT NULL, keterangan VARCHAR(100) NOT NULL, PRIMARY KEY(id,userID), FOREIGN KEY (userID) REFERENCES users(id))",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel finances berhasil dibuat");
  //   }
  // );
});

app.post("/feedback", (req, res) => {
  var nama = req.body.nama;
  var email = req.body.email;
  var pesan = req.body.pesan;
  conn.query(
    "INSERT INTO feedbacks (nama, email, pesan) VALUES (?,?,?)",
    [nama, email, pesan],
    (err, result) => {
      res.send({ message: "Feedback Anda Telah Diterima :)" });
    }
  );
});
app.post("/tasks", (req, res) => {
  var userID = req.body.userID;
  var deadline = req.body.deadline;
  var status = req.body.status;
  var keterangan = req.body.keterangan;
  conn.query(
    "INSERT INTO tasks (userID, deadline, status, keterangan) VALUES (?,?,?,?)",
    [userID, deadline, status, keterangan],
    (err, result) => {
      res.send({ message: "List Berhasil Dibuat!" });
    }
  );
});
app.post("/finances", (req, res) => {
  var userID = req.body.userID;
  var tipe = req.body.tipe;
  var kategori = req.body.kategori;
  var nominal = req.body.nominal;
  var keterangan = req.body.keterangan;
  conn.query(
    "INSERT INTO finances (userID, tipe, kategori, nominal , keterangan) VALUES (?,?,?,?,?)",
    [userID, tipe, kategori, nominal, keterangan],
    (err, result) => {
      res.send({ message: "Catatan Berhasil Dibuat!" });
    }
  );
});
app.put("/tasks/:id", (req, res) => {
  var status = req.body.status;
  var id = req.params.id;
  conn.query(
    "UPDATE tasks SET status = " + status + " WHERE ID = " + id,
    (err, result) => {
      res.json(result);
    }
  );
});
app.get("/finances", (req, res) => {
  var query = "SELECT * FROM finances";
  conn.query(query, (err, rows) => {
    res.json(rows);
  });
});
app.get("/pemasukan", (req, res) => {
  var query =
    "SELECT SUM(nominal) AS pemasukan FROM finances WHERE tipe = 'Pemasukan'";
  conn.query(query, (err, rows) => {
    const pemasukan = rows[0];
    if (err) res.status(400).json(err);
    else res.json(pemasukan);
  });
});
app.get("/pengeluaran", (req, res) => {
  var query =
    "SELECT SUM(nominal) AS pengeluaran FROM finances WHERE tipe = 'Pengeluaran'";
  conn.query(query, (err, rows) => {
    const pengeluaran = rows[0];
    if (err) res.status(400).json(err);
    else res.json(pengeluaran);
  });
});
app.get("/sisa", (req, res) => {
  var query =
    "SELECT (SELECT SUM(nominal) AS sisa FROM finances WHERE tipe = 'Pemasukan') - (SELECT SUM(nominal) AS sisa FROM `finances` WHERE tipe = 'Pengeluaran') AS sisa";
  conn.query(query, (err, rows) => {
    const sisa = rows[0];
    if (err) res.status(400).json(err);
    else res.json(sisa);
  });
});
app.get("/tasks", (req, res) => {
  var query =
    "SELECT *, DATE_FORMAT(deadline, '%d-%m-%Y') AS deadline FROM tasks ORDER BY STR_TO_DATE(deadline, '%d-%m-%Y'), deadline ASC";
  conn.query(query, (err, result) => {
    res.json(result);
  });
});

app.get("/tasks/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM tasks WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});

app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
