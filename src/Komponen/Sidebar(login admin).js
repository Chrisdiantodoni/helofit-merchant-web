import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { RiComputerLine } from "react-icons/ri";
import { BsListTask, BsWallet2 } from "react-icons/bs";
import { NavLink } from "react-router-dom";
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
              <span className='pe-4'>
                <RiComputerLine className='fs-3 mb-1' /> Dashboard
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/laporan'
              className='text-light ps-3 btn btn-primary border-bottom'>
              <span className='pe-5 me-3'>
                <BsListTask className='fs-3 mb-1' /> Laporan
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/datauser'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-5'>
                <BsWallet2 className='fs-4 mb-1' />
                &nbsp;Data User
              </span>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href='/admin/maintenance'
              className='text-light btn btn-primary border-bottom'>
              <span className='pe-5'>&nbsp;Maintenance</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default withRouter(Sidebaradmin);
