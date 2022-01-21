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
const Role = db.role;

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user",
//   });

//   Role.create({
//     id: 2,
//     name: "admin",
//   });
// }
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
  database: "taskita",
});

conn.connect((err) => {
  if (err) console.log("Masalah dengan MySQL" + err);
  else console.log("Terkoneksi dengan Database");
  // conn.query(
  //   "CREATE TABLE users (email VARCHAR(30) NOT NULL PRIMARY KEY, nama_dpn VARCHAR(30) NOT NULL, nama_blkg VARCHAR(30) NOT NULL, password VARCHAR(30) NOT NULL, pin INT(6) NOT NULL)",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel users berhasil dibuat");
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
  //   "CREATE TABLE tasks (id INT UNSIGNED AUTO_INCREMENT,userID INT, deadline DATE NOT NULL, status VARCHAR(15) NOT NULL, keterangan VARCHAR(100) NOT NULL, PRIMARY KEY(id,userID), FOREIGN KEY (userID) REFERENCES users(id))",
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
  // conn.query(
  //   "CREATE TABLE admins (id INT UNSIGNED AUTO_INCREMENT,username VARCHAR(30) NOT NULL, email VARCHAR(30) NOT NULL, password VARCHAR(30) NOT NULL ,PRIMARY KEY(id))",
  //   (err, result) => {
  //     if (err) console.error("Error saat membuat tabel " + err);
  //     else console.log("Tabel admins berhasil dibuat");
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
app.put("/finances/:id", (req, res) => {
  var tipe = req.body.tipe;
  var kategori = req.body.kategori;
  var nominal = req.body.nominal;
  var keterangan = req.body.keterangan;
  var id = req.params.id;
  conn.query(
    "UPDATE finances SET tipe = '" +
      tipe +
      "', kategori = '" +
      kategori +
      "', nominal = '" +
      nominal +
      "', keterangan = '" +
      keterangan +
      "' WHERE ID = " +
      id,
    (err, result) => {
      res.json(result);
    }
  );
});
app.put("/recovery/:email", (req, res) => {
  var password = req.body.password;
  var email = req.params.email;
  conn.query(
    "UPDATE users SET password = '" +
      password +
      "' WHERE email = '" +
      email +
      "'",
    (err, result) => {
      res.json(result);
    }
  );
});
app.delete("/finances/:id", (req, res) => {
  var id = req.params.id;
  var query = "DELETE FROM finances WHERE id = " + id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});
app.delete("/tasks/:id", (req, res) => {
  var id = req.params.id;
  var query = "DELETE FROM tasks WHERE id = " + id;
  conn.query(query, (err, result) => {
    if (err) res.json(err);
    else res.json(result);
  });
});
app.put("/tasks/:id", (req, res) => {
  var status = req.body.status;
  var deadline = req.body.deadline;
  var keterangan = req.body.keterangan;
  var id = req.params.id;
  conn.query(
    "UPDATE tasks SET deadline = '" +
      deadline +
      "', status = '" +
      status +
      "', keterangan = '" +
      keterangan +
      "' WHERE ID = " +
      id,
    (err, result) => {
      res.json(result);
    }
  );
});
app.get("/finances/:userid", (req, res) => {
  var userID = req.params.userid;
  var query = "SELECT * FROM finances WHERE userID = " + userID;
  conn.query(query, (err, rows) => {
    res.json(rows);
  });
});
app.get("/pemasukan/:userid", (req, res) => {
  var userID = req.params.userid;
  var query =
    "SELECT SUM(nominal) AS pemasukan FROM finances WHERE tipe = 'Pemasukan' AND userID = " +
    userID;
  conn.query(query, (err, rows) => {
    const pemasukan = rows[0];
    if (err) res.status(400).json(err);
    else res.json(pemasukan);
  });
});
app.get("/pengeluaran/:userid", (req, res) => {
  var userID = req.params.userid;
  var query =
    "SELECT SUM(nominal) AS pengeluaran FROM finances WHERE tipe = 'Pengeluaran' AND userID = " +
    userID;
  conn.query(query, (err, rows) => {
    const pengeluaran = rows[0];
    if (err) res.status(400).json(err);
    else res.json(pengeluaran);
  });
});
app.get("/sisa/:userid", (req, res) => {
  var userID = req.params.userid;
  var query =
    "SELECT coalesce((SELECT SUM(nominal) AS pemasukan FROM finances WHERE tipe = 'Pemasukan' AND userID = " +
    userID +
    "),0)" +
    "- coalesce((SELECT SUM(nominal) AS pengeluaran FROM finances WHERE tipe = 'Pengeluaran' AND userID = " +
    userID +
    "),0) AS sisa";
  conn.query(query, (err, rows) => {
    const sisa = rows[0];
    if (err) res.status(400).json(err);
    else res.json(sisa);
  });
});
app.get("/editfinances/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM finances WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});
app.get("/deletefinances/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM finances WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});
app.get("/tasks/:userid", (req, res) => {
  var userID = req.params.userid;
  var query =
    "SELECT *,  DATE_FORMAT(deadline, '%d-%m-%Y') AS deadline FROM tasks WHERE userID = '" +
    userID +
    "' ORDER BY STR_TO_DATE(deadline, '%d-%m-%Y'), deadline ASC ";
  conn.query(query, (err, result) => {
    res.json(result);
  });
});
app.get("/datauser", (req, res) => {
  var query =
    "SELECT CONCAT(nama_dpn,' ',nama_blkg) AS NamaLengkap, password, email FROM users";
  conn.query(query, (err, result) => {
    res.json(result);
  });
});
app.get("/feedbacks", (req, res) => {
  var query = "SELECT nama, email, pesan FROM feedbacks";
  conn.query(query, (err, result) => {
    res.json(result);
  });
});
app.get("/totaldatauser", (req, res) => {
  var query = "SELECT COUNT(*) AS totaldata FROM users";
  conn.query(query, (err, rows) => {
    const totaldata = rows[0];
    if (err) res.status(400).json(err);
    else res.json(totaldata);
  });
});
app.get("/kegiatan/:userid", (req, res) => {
  var userID = req.params.userid;
  var query = "SELECT COUNT(*) AS kegiatan FROM tasks WHERE userID = " + userID;
  conn.query(query, (err, rows) => {
    const kegiatan = rows[0];
    if (err) res.status(400).json(err);
    else res.json(kegiatan);
  });
});
app.put("/user/:id", (req, res) => {
  var nama_dpn = req.body.nama_dpn;
  var nama_blkg = req.body.nama_blkg;
  var email = req.body.email;
  var id = req.params.id;
  conn.query(
    "UPDATE users SET nama_dpn = '" +
      nama_dpn +
      "', nama_blkg = '" +
      nama_blkg +
      "', email = '" +
      email +
      "' WHERE ID = " +
      id,
    (err, result) => {
      res.json(result);
    }
  );
});
app.get("/user/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM users WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});

app.get("/edittasks/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM tasks WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});
app.get("/deletetasks/:id", (req, res) => {
  var id = req.params.id;
  var query = "SELECT * FROM tasks WHERE id = " + id;
  conn.query(query, (err, rows) => {
    res.json(rows[0]);
  });
});

app.listen(8000, () => {
  console.log("Server berjalan di port 8000");
});
