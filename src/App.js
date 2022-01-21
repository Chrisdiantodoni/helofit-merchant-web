import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//Sebelum Login
import Beranda from "./Komposisi/Beranda";
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
//Setelah Login(User)
import WelcomeUser from "./Komposisi(User)/WelcomeUser";
import Tasks from "./Komposisi(User)/Tasks";
import EditTasks from "./Komposisi(User)/EditTasks";
import DeleteTasks from "./Komposisi(User)/DeleteTasks";
import Finance from "./Komposisi(User)/Finance";
import EditFinance from "./Komposisi(User)/EditFinance";
import DeleteFinance from "./Komposisi(User)/DeleteFinance";
import Profil from "./Komposisi(User)/Profil";
import EditProfil from "./Komposisi(User)/EditProfil";
//Setelah Login(Admin)
import WelcomeAdmin from "./Komposisi(admin)/WelcomeAdmin";
import Laporan from "./Komposisi(admin)/Laporan";
import DataUser from "./Komposisi(admin)/DataUser";
import Maintenance from "./Komposisi(admin)/Maintenance";
import Feedback from "./Komposisi(admin)/Feedback";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
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
        path: "/welcome/tasks",
        render: () => <Tasks />,
      },
      {
        path: "/welcome/profil",
        render: () => <Profil />,
      },
      {
        path: "/editprofil/:id",
        render: () => <EditProfil />,
      },
      {
        path: "/edittasks/:id",
        render: () => <EditTasks />,
      },
      {
        path: "/deletetasks/:id",
        render: () => <DeleteTasks />,
      },
      {
        path: "/welcome/finance",
        render: () => <Finance />,
      },
      {
        path: "/editfinance/:id",
        render: () => <EditFinance />,
      },
      {
        path: "/deletefinance/:id",
        render: () => <DeleteFinance />,
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
