import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { RiComputerLine, RiFeedbackLine } from "react-icons/ri";
import { AiOutlineFile, AiOutlineUser, AiOutlineSetting } from "react-icons/ai";
import { withRouter } from "react-router";
export class Sidebaradmin extends Component {
  render() {
    return (
      <div>
        <Nav className='d-block bg-primary sidebar'>
          <Nav.Item>
            <Nav.Link
              href='/admin/dashboard'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-5'>
                <RiComputerLine className='fs-3 mb-1' /> Dashboard
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/laporan'
              className='text-light ps-3 btn btn-primary border-bottom'>
              <span className='pe-5 me-4'>
                <AiOutlineFile className='fs-3 mb-1' />
                &nbsp;Laporan
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/datauser'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-5 me-2'>
                <AiOutlineUser className='fs-3 mb-1' />
                &nbsp;Data User
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/maintenance'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-4 me-2'>
                <AiOutlineSetting className='fs-3 mb-1' />
                &nbsp;Maintenance
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/feedback'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-4 me-4'>
                &ensp; &ensp;
                <RiFeedbackLine className='fs-3 mb-1' />
                &nbsp;Pesan masuk
              </span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default withRouter(Sidebaradmin);
