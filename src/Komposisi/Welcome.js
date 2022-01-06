import React, { Component } from "react";
import AuthService from "../services/auth.service";
import { withRouter } from "react-router-dom";
class Welcome extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: AuthService.getCurrentUser(),
    };
  }

  render() {
    const { currentUser } = this.state;

    return (
      <div className='container'>
        <h3 className='mt-2'>
          <strong>{currentUser.nama_dpn}</strong> Profile
        </h3>
        <p>
          <strong>Token :</strong> {currentUser.accessToken.substring(0, 20)}{" "}
          ...{" "}
          {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
        </p>
        <p>
          <strong>Id:</strong> {currentUser.id}
        </p>
        <p>
          <strong>Email :</strong> {currentUser.email}
        </p>
      </div>
    );
  }
}

export default withRouter(Welcome);
