var mysql = require("mysql");
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
