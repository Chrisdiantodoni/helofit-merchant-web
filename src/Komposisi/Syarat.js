import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import Navbarbefore from "../Komponen/Navbar(before login)";
import Footer from "./Footer";

const Syarat = () => {
  const data = [
    {
      item: "Menggunakan Layanan dengan cara yang melanggar hukum, atau untuk tujuan yang melanggar hukum atau penipuan, atau dengan cara apa pun yang tidak konsisten dengan Ketentuan Penggunaan;",
    },
    {
      item: "Melanggar hak kekayaan intelektual Punya atau pihak ketiga sehubungan dengan penggunaan Layanan;",
    },
    {
      item: "Mengirimkan material apapun yang bersifat memfitnah, menghina, atau secara lain kontroversial sehubungan dengan penggunaan Anda atas Layanan;",
    },
    {
      item: "Menggunakan Layanan dengan cara yang dapat merusak, melumpuhkan, membebani, membuat cacat, atau melemahkan sistem atau keamanan Punya atau mengintervensi pengguna lainnya;",
    },
    {
      item: "Melakukan akses atau mendaftar melalui user login dengan menggunakan bot atau metode otomatis lainnya;",
    },
    {
      item: "Mengumpulkan atau mengambil informasi mana pun dari fasilitas atau sistem punya, atau berusaha untuk menguraikan (decipher) transmisi untuk atau dari server yang menggunakan Layanan;",
    },
    {
      item: "Mereproduksi, menduplikasi, mengkopi, mendekonstruksi, menjual, memperdagangkan, atau menjual kembali Layanan yang dimaksud;",
    },
    {
      item: "Menyalin, mengubah, membuat turunan dari, melakukan reverse engineer (rekayasa terbalik), mendekompilasi, atau secara lain berupaya untuk mengambil kode sumber (source code) Layanan, Konten (sebagaimana didefinisikan di bawah), atau bagian mana pun daripadanya atau mengizinkan pihak lain untuk melakukannya.",
    },
  ];

  return (
    <div style={{ background: "#000000" }}>
      <Navbarbefore />
      <div className="container text-start">
        <h1 className="pt-5 text-light">Syarat dan Ketentuan</h1>
        <p className="fw-700" style={{ color: "#7c7c7c", fontWeight: "700" }}>
          Berikut adalah *contoh syarat dan ketentuan yang harus dipatuhi semua
          pengguna
        </p>
        <h5 className="fw-700" style={{ color: "#ffffff", fontWeight: "700" }}>
          Anda Dilarang Untuk :
        </h5>
        {data?.map((item, index) => (
          <h5 className="pt-3" style={{ color: "#FFFFFF" }}>
            {index + 1}. {item.item}
          </h5>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Syarat;
