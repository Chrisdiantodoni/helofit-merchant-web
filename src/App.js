import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//Sebelum Login

import EditFasilitas from "./Komposisi(User)/EditFasilitas";
import Fasilitas from "./Komposisi(User)/Fasilitas";
import Beranda from "./Komposisi/Beranda";
import LaporanUser from "./Komposisi(User)/Laporan";
import Daftar from "./Komposisi/Daftar";
import Login from "./Komposisi/Login";
import LoginAdmin from "./Komposisi/LoginAdmin";
import Kontak from "./Komposisi/Kontak";
import Tentang from "./Komposisi/Tentang";
import Keuangan from "./Komposisi/Keuangan";
import Manajemen from "./Komposisi/Manajemen";
import FAQ from "./Komposisi/FAQ";
import Lupapassword from "./Komposisi/Lupapassword";
import AuthService from "./services/auth.service";
import WelcomeUser from "./Komposisi(User)/WelcomeUser";
import WelcomeAdmin from "./Komposisi(admin)/WelcomeAdmin";
import Laporan from "./Komposisi(admin)/Laporan";
import DataUser from "./Komposisi(admin)/DataUser";
import Maintenance from "./Komposisi(admin)/Maintenance";
import Feedback from "./Komposisi(admin)/Feedback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fitur from "./Komposisi/Fitur";
import Dompet from "./Komposisi(User)/Dompet";
import DompetMerchant from "./Komposisi(User)/DompetMerchant";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.Keluar = this.Keluar.bind(this);

    this.state = {
      currentUser: true,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
      });
    }
  }
  Keluar() {
    AuthService.Keluar();
  }
  render() {
    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <Beranda />,
      },
      {
        path: "/tentang",
        render: () => <Tentang />,
      },
      {
        path: "/daftar",
        render: () => <Daftar />,
      },
      {
        path: "/Fitur",
        render: () => <Fitur />,
      },
      {
        path: "/kontak",
        render: () => <Kontak />,
      },
      {
        path: "/faq",
        render: () => <FAQ />,
      },
      {
        path: "/manajemen",
        render: () => <Manajemen />,
      },
      {
        path: "/keuangan",
        render: () => <Keuangan />,
      },
      {
        path: "/login",
        render: () => <Login />,
      },
      {
        path: "/lupapass",
        render: () => <Lupapassword />,
      },
      {
        path: "/loginadmin",
        render: () => <LoginAdmin />,
      },
      {
        path: "/welcome/user",
        render: () => <WelcomeUser />,
      },
      {
        path: "/welcome/laporan",
        render: () => <LaporanUser />,
      },

      {
        path: "/welcome/fasilitas",
        render: () => <Fasilitas />,
      },
      {
        path: "/welcome/EditFasilitas",
        render: () => <EditFasilitas />,
      },
      {
        path: "/welcome/TarikSaldo",
        render: () => <DompetMerchant />,
      },
      {
        path: "/welcome/Dompet",
        render: () => <Dompet />,
      },

      {
        path: "/admin/dashboard",
        render: () => <WelcomeAdmin />,
      },
      {
        path: "/admin/laporan",
        render: () => <Laporan />,
      },
      {
        path: "/admin/datauser",
        render: () => <DataUser />,
      },
      {
        path: "/admin/maintenance",
        render: () => <Maintenance />,
      },
      {
        path: "/admin/feedback",
        render: () => <Feedback />,
      },
    ];
    return (
      <Router>
        <Switch>
          {routes.map((item, index) => (
            <Route path={item.path} exact={item.exact} render={item.render} />
          ))}
        </Switch>
      </Router>
    );
  }
}
export default App;
