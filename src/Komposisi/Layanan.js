import "../css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Carousel } from "react-bootstrap";
import React, { Component } from "react";
import Footer from "./Footer";
import logo from "../Assets/ilustrasi.png";
export class Layanan extends Component {
  render() {
    return (
      <Container className='text-center mx-auto'>
        <Carousel className='mt-5 bg-secondary' variant='dark'>
          <Carousel.Item interval={1500}>
            <img className='d-block w-100' alt='First slide' src={logo} />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className='d-block w-100' alt='Second slide' src={logo} />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Text</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img className='d-block w-100' alt='Third slide' src={logo} />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Text</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div className='row row-cols-1 row-cols-md-3 g-4 mt-3'>
          <div className='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-primary' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Desain Grafis</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-info' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Editing Video</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-warning' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Pembuatan Aplikasi</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-dark' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Voice Over</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-success' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Pembuatan Website</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
          <div class='col'>
            <div className='card h-100'>
              <img className='card-img-top bg-danger' height='130px' />
              <div className='card-body text-start'>
                <h4 className='card-text'>Digital Marketing</h4>
              </div>
              <div class='card-footer bg-light'>
                <a className='btn btn-primary w-100'>Selengkapnya</a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Container>
    );
  }
}

export default Layanan;
