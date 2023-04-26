import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { BsGraphUp } from "react-icons/bs";
import { BiWallet } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { TbSoccerField } from "react-icons/tb";
import { BiStore } from "react-icons/bi";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { BsListTask, BsWallet2 } from "react-icons/bs";
import { withRouter } from "react-router";

export class Sidebaruser extends Component {
  render() {
    return (
      <div>
        <Nav className="d-block sidebar" style={{ background: "#c4f601" }}>
          <Nav.Item>
            <Nav.Link
              href="/welcome/user"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6">
                  <BsGraphUp className="fs-4 me-2" /> Dashboard
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/laporan"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-4">
                  <TbReportAnalytics className="fs-3 me-2" /> Laporan
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/fasilitas"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6 me-4">
                  <TbSoccerField className="fs-3 mb-1 me-2" />
                  &nbsp;Fasilitas
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/Dompet"
              className="text-dark fw-bold ps-3  border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6 me-4">
                  <BiWallet className="fs-3 mb-1 me-2" /> Dompet
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/ProfilMerchant"
              className="text-dark fw-bold ps-3  border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-7 me-3">
                  <BiStore className="fs-3 mb-1 me-2" /> Merchant
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/tasks"
              className="text-dark fw-bold ps-3  border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-5 me-2">
                  <MdOutlineTaskAlt className="fs-3 mb-1 me-2" /> Task
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/welcome/Promo"
              className="text-dark fw-bold ps-3  border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-4 me-3">
                  <IoTicketOutline className="fs-3 mb-1 me-2" /> Promo
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default withRouter(Sidebaruser);
