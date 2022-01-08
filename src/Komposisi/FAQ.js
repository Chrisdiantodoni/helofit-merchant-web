import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
export class FAQ extends Component {
  render() {
    return (
      <div className='container text-start'>
        <h1 className='pt-5 text-dark'>Frequently Asked Questions (FAQ)</h1>
        <p className='text-muted'>
          Berikut adalah pertanyaan yang sering ditanyakan.
        </p>
        <Accordion>
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <span className='fw-bold'>
                Adakah biaya yang dikenakan pada saat pendaftaran?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className='fw-bold'>
                Jawaban: Untuk pendaftaran sebgai pengguna semuanya GRATIS
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header>
              <span className='fw-bold'>
                Apa saja fitur yang bisa digunakan?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className='fw-bold'>
                Jawaban: Manajemen Kegiatan (to-do list) dan Catatan Keuangan
                Harian
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header>
              <span className='fw-bold'>
                Bagaimana cara menggunakan fitur-fitur di Taskita?
              </span>
            </Accordion.Header>
            <Accordion.Body>
              <span className='fw-bold'>
                Jawaban: Buka halaman utama, daftar/login dan selamat memakai
                fitur yang tersedia :)
              </span>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header>
              <span className='fw-bold'>Untuk apa Taskita dibuat?</span>
            </Accordion.Header>
            <Accordion.Body>
              <span className='fw-bold'>
                Jawaban: Memudahkan setiap orang dalam mengatur kegiatan dan
                keuangan sebagai syarat ketuntasan tugas mata kuliah aplikasi
                web team terkait.
              </span>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <p className='text-muted'>
          Belum mendapatkan jawaban yang diinginkan? Hubungi kami
          <a href='/kontak' className='ps-1 text-decoration-none'>
            disini
          </a>
        </p>
      </div>
    );
  }
}

export default FAQ;
