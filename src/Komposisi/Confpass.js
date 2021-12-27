import React, { Component } from "react";

export default function conf(pass, con) {
  if (pass !== "undefined" && con !== "undefined") {
    if (pass != con) {
      <div className='alert alert-danger' role='alert'>
        Password Harus Sama
      </div>;
    } else {
    }
  }
}
