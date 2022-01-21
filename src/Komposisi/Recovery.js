// import React, { Component } from "react";
// import Form from "react-validation/build/form";
// import Input from "react-validation/build/input";
// import CheckButton from "react-validation/build/button";
// import { withRouter, Redirect } from "react-router-dom";
// import * as Axios from "axios";
// const required = (value) => {
//   if (!value) {
//     return (
//       <div className='alert alert-danger' role='alert'>
//         Field perlu diisi!
//       </div>
//     );
//   }
// };
// const vfield = (value) => {
//   if (value.length < 3 || value.length > 30) {
//     return (
//       <div className='alert alert-danger' role='alert'>
//         Field harus berisi antara 3 dan 30 karakter.
//       </div>
//     );
//   }
// };
// export class Recovery extends Component {
//   constructor() {
//     super();
//     this.handleRecovery = this.handleRecovery.bind(this);

//     this.state = {
//       email: localStorage.getItem("email"),
//       successful: false,
//       password: null,
//       message: "",
//     };
//   }

//   handleRecovery(e) {
//     e.preventDefault();
//     this.setState({
//       message: "",
//       successful: false,
//     });

//     this.form.validateAll();

//     if (this.checkBtn.context._errors.length === 0) {
//       Axios.put("http://localhost:8000/recovery/" + this.state.email, {
//         password: this.state.password,
//       }).then(
//         (res) => {
//           this.setState({
//             message: "Password anda berhasil diubah!",
//             successful: true,
//           });
//           setTimeout(() => {
//             this.props.history.push("/login");
//           }, 1500);
//         },
//         (error) => {
//           const resMessage =
//             (error.response &&
//               error.response.data &&
//               error.response.data.message) ||
//             error.message ||
//             error.toString();

//           this.setState({
//             successful: false,
//             message: resMessage,
//           });
//         }
//       );
//     }
//   }
//   setValueState(event) {
//     this.setState({
//       [event.target.name]: event.target.value,
//     });
//   }

//   render() {
//     const email = localStorage.getItem("email");
//     return (
//       <div>
//         <div className='container mx-auto mt-4'>
//           <span className='d-none'>{email}</span>
//           <div className='container border border-1 w-50 rounded-3 mx-auto mb-1'>
//             <Form
//               className='ms-5 mt-2 mx-auto text-start me-5 mb-4'
//               onSubmit={this.handleRecovery}
//               ref={(c) => {
//                 this.form = c;
//               }}>
//               <div>
//                 <div class='form-group mb-3'>
//                   <label>
//                     Password Baru Anda<span className='text-danger'>*</span>
//                   </label>
//                   <Input
//                     name='password'
//                     type='password'
//                     value={this.state.password}
//                     className='text-dark rounded-3 form-control rounded-pill'
//                     onChange={this.setValueState.bind(this)}
//                     validations={[required, vfield]}
//                     placeholder='Masukkan Password Baru Anda'></Input>
//                 </div>
//                 <div className='text-center'>
//                   <button
//                     type='submit'
//                     className='btn btn-primary rounded-pill w-100'>
//                     Ubah Password
//                   </button>
//                 </div>
//               </div>
//               {this.state.message && (
//                 <div className='form-group'>
//                   <div
//                     className={
//                       this.state.successful
//                         ? "alert alert-success"
//                         : "alert alert-danger"
//                     }
//                     role='alert'>
//                     {this.state.message}
//                   </div>
//                 </div>
//               )}
//               <CheckButton
//                 style={{ display: "none" }}
//                 ref={(c) => {
//                   this.checkBtn = c;
//                 }}
//               />
//             </Form>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default withRouter(Recovery);
