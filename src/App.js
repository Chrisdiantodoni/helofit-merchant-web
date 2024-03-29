import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useContext } from "react";
//Sebelum Login
import ProfilMerchant from "./Komposisi(User)/ProfilMerchant";
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
import Reserve from "./Komposisi(admin)/Reserve";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Fitur from "./Komposisi/Fitur";
import Promo from "./Komposisi(User)/Promo";
import AdminPromo from "./Komposisi(admin)/Promo";
import Dompet from "./Komposisi(User)/Dompet";
import DompetMerchant from "./Komposisi(User)/DompetMerchant";
import EditMerchant from "./Komposisi(User)/EditMerchant";
import Tasks from "./Komposisi(User)/Tasks";
import TasksAdmin from "./Komposisi(admin)/Tasks";
import AddTask from "./Komposisi(User)/AddTask";
import EditFasilitasMerchant from "./Komposisi(User)/EditFasilitasMerchant";
import DetailTask from "./Komposisi(User)/DetailTask";
import AddPromo from "./Komposisi(User)/AddPromo";
import DetailProgressPromo from "./Komposisi(User)/DetailProgressPromo";
import { QueryClientProvider, QueryClient } from "react-query";
import EditTask from "./Komposisi(User)/EditTask";
import Messages from "./Komposisi(admin)/Messages";
import UserData from "./Komposisi(admin)/UserData";
import Merchant from "./Komposisi(admin)/Merchant";
import Meetup from "./Komposisi(admin)/Meetup";
import Syarat from "./Komposisi/Syarat";
import ContextProvider, { Context } from "./context";
import EditPromo from "./Komposisi(User)/EditPromo";
import EditEachFacility from "./Komposisi(User)/EditEachFacility";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.Keluar = this.Keluar.bind(this);

    this.state = {
      currentUser: true,
    };
  }
  // componentDidMount() {
  //   const user = AuthService.getCurrentUser();

  //   if (user) {
  //     this.setState({
  //       currentUser: user,
  //     });
  //   }
  // }
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
        path: "/Syarat",
        render: () => <Syarat />,
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
        path: "/welcome/ProfilMerchant",
        render: () => <ProfilMerchant />,
      },
      {
        path: "/welcome/EditEachFacility",
        render: () => <EditEachFacility />,
      },
      {
        path: "/welcome/EditMerchant",
        render: () => <EditMerchant />,
      },
      {
        path: "/welcome/EditFasilitasMerchant",
        render: () => <EditFasilitasMerchant />,
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
        path: "/welcome/Tasks",
        render: () => <Tasks />,
      },
      {
        path: "/welcome/AddTask",
        render: () => <AddTask />,
      },
      {
        path: "/welcome/EditTask",
        render: () => <EditTask />,
      },
      {
        path: "/welcome/DetailTask",
        render: () => <DetailTask />,
      },
      {
        path: "/welcome/Promo",
        render: () => <Promo />,
      },
      {
        path: "/welcome/DetailPromo",
        render: () => <DetailProgressPromo />,
      },
      {
        path: "/welcome/AddPromo",
        render: () => <AddPromo />,
      },
      {
        path: "/welcome/EditPromo",
        render: () => <EditPromo />,
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
        path: "/admin/Messages",
        render: () => <Messages />,
      },
      {
        path: "/admin/UserData",
        render: () => <UserData />,
      },
      {
        path: "/admin/Merchant",
        render: () => <Merchant />,
      },
      {
        path: "/admin/Promo",
        render: () => <AdminPromo />,
      },
      {
        path: "/admin/Tasks",
        render: () => <TasksAdmin />,
      },
      {
        path: "/admin/Reserve",
        render: () => <Reserve />,
      },
      {
        path: "/admin/Meetup",
        render: () => <Meetup />,
      },
    ];
    // Create a client
    const queryClient = new QueryClient();
    return (
      <QueryClientProvider client={queryClient}>
        <ContextProvider>
          <Router>
            <Switch>
              {routes.map((item, index) => (
                <Route
                  path={item.path}
                  exact={item.exact}
                  render={item.render}
                />
              ))}
            </Switch>
          </Router>
        </ContextProvider>
      </QueryClientProvider>
    );
  }
}
export default App;
