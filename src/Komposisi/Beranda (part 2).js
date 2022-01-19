import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import React, { Component } from "react";
import Footer from "../Komposisi/Footer.js";
import "./Beranda_2.css";
export default class Beranda_2 extends Component {
  render() {
    return (
      <Container className='text-center mx-auto'>
        <div className='row row-cols-1 row-cols-md-4 g-4'>
          <div className='col'>
            <div className='card h-100'>
              <div className='card-body text-start'>
                <h5 className='card-title fw-bold text-dark'>
                Mudah Digunakan
                </h5>
                <p className='card-text text-muted'>
                Gak ada kata ribet dalam kamus
                Taskita, karena aplikasi ini mudah digunakan sesuai kebutuhanmu
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <div className='card-body text-start'>
                <h5 className='card-title fw-bold text-dark'>
                  Layanan gratis
                </h5>
                <p className='card-text text-muted'>
                Untuk menggunakan fitur yang ada , kamu tidak perlu khawatir
                karena semua fitur Taskita gratis
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <div className='card-body text-start'>
                <h5 className='card-title fw-bold text-dark'>
                 Tampilan Menarik
                </h5>
                <p className='card-text text-muted'>
                Bukan cuma simpel, Taskita juga bikin kamu gak bosen dan enak
                dilihat ketika menggunakannya.
                </p>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='card h-100'>
              <div className='card-body text-start'>
                <h5 className='card-title fw-bold text-dark'>
                 Kecepatan
                </h5>
                <p className='card-text text-muted'>
                Untuk kecepatan Taskita gak usah diragukan lagi deh, pokoknya anti
                lelet dan anti nunggu.
                </p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className='Layanan'>
          <p className='text-muted'>
            Layanan Kami <br />
            <h3 className='fw-bold text-dark'>Fitur Yang Bisa Kamu Gunakan</h3>
          </p>
          <br />
          <div className='row row-cols-1 row-cols-md-3 g-4 '>
            <div className='col-md-6'>
              <div className='card h-100'>
                <img className='card-img-top bg-primary' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Daftar Manajemen Kegiatan</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div>
            <div class='col-md-6'>
              <div className='card h-100'>
                <img className='card-img-top bg-info' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Catatan Keuangan Harian</h4>
                </div>
                <div class='card-footer bg-light'>
                  <a className='btn btn-primary w-100'>Selengkapnya</a>
                </div>
              </div>
            </div> 
          </div>
          <br />
          <div className='card mb-3 bg-dark p-4 pt-4 mt-4'>
            <div className='row g-0 pt-2'>
              <div className='col-md-8'>
                <div className='card-body text-start'>
                  <h3 className='card-text text-light fw-bold'>
                  Sudah banyak orang terbantu dengan adanya aplikasi web taskita.
                  Kamu kapan?
                  </h3>
                  <a className='btn btn-primary'>Mulai Sekarang</a>
                </div>
              </div>
              <div className='col-md-4 bg-secondary me-auto'>
                <img className='img-fluid rounded-start bg-primary' />
              </div>
            </div>
          </div>
          <br />
        </div>
        <div className='Testimoni ms-5 me-4'>
          <p className='text-muted mb-4'>
            Testimoni Layanan <br />
            <h3 className='fw-bold text-dark'>Yang dikatakan Mereka</h3>
          </p>
          <div className='row row-cols-1 row-cols-md-3 g-3'>
            <div className='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-secondary' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Yodi Suryana, Karyawan Swasta</h4>
                  <p className='text-muted d-inline'>
                  Taskita Gokil sih, jadi gampang kalo mau buat to do list kerjaan. 
                  Belum lagi tampilannya yang menarik. Mantap Buat Taskita
                  </p>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-dark' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Chintia Hartono , Mahasiswa</h4>
                  <p className='text-muted d-inline'>
                  Selama kuliah, Taskita membantu banget karena ga khawatir buat lupa ngerjain semua tugas kuliah dan kegiatan kuliah.
                    easy to use banget jadi gampang mau buat to do list apapun
                  </p>
                </div>
              </div>
            </div>
            <div class='col'>
              <div className='card h-100'>
                <img className='card-img-top bg-danger' height='130px' />
                <div className='card-body text-start'>
                  <h4 className='card-text'>Claudia Tan , Siswa SMA</h4>
                  <p className='text-muted d-inline'>
                    Taskita Mantep, aku jadi gampang buat semua to do list buat kegiatan sekolah sama pr ku, ga nyesal berlangganan
                    dengan taskita. udah gitu cepet dan tampilannya menarik
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    );
  }
}
