import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { RiComputerLine, RiFeedbackLine } from "react-icons/ri";
import { AiOutlineMessage, AiOutlinePicture } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlineUserGroup } from "react-icons/hi";
import { BiWallet } from "react-icons/bi";
import { TbReportAnalytics } from "react-icons/tb";
import { TbSoccerField } from "react-icons/tb";
import { BiStore } from "react-icons/bi";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoTicketOutline } from "react-icons/io5";
import { BsListTask, BsWallet2 } from "react-icons/bs";
import { withRouter } from "react-router";
export class Sidebaradmin extends Component {
  render() {
    return (
      <div>
        <Nav className="d-block sidebar" style={{ background: "#c4f601" }}>
          <Nav.Item>
            <Nav.Link
              href="/admin/dashboard"
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
              href="/admin/laporan"
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
              href="/admin/Messages"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pl-5">
                  <AiOutlineMessage className="fs-3 mb-1 me-2" />
                  Pesan Masuk
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/admin/UserData"
              className="text-dark fw-bold ps-3  border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6 me-5">
                  <AiOutlineUser className="fs-3 mb-1 me-2" /> User
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/admin/Merchant"
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
          {/* <Nav.Item>
            <Nav.Link
              href="/admin/tasks"
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
              href="/admin/Promo"
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
          <Nav.Item>
            <Nav.Link
              href="/admin/Reserve"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6 me-4">
                  <TbSoccerField className="fs-3 mb-1 me-2" />
                  &nbsp;Reservasi
                </span>
              </div>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              href="/admin/meetup"
              className="text-dark fw-bold border-bottom border-dark"
              style={{ background: "#C4f601" }}
            >
              <div className="mt-2 mb-2">
                <span className="pe-6 me-4">
                  <HiOutlineUserGroup className="fs-3 mb-1 me-2" />
                  &nbsp;Meetup
                </span>
              </div>
            </Nav.Link>
          </Nav.Item> */}
        </Nav>
      </div>
    );
  }
}

export default withRouter(Sidebaradmin);
