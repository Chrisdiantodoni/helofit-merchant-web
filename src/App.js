import "./App.css";
import "./css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
//Sebelum Login
import Beranda from "./Komposisi/Beranda";
import Layanan from "./Komposisi/Layanan";
import Daftar from "./Komposisi/Daftar";
import Login from "./Komposisi/Login";
import Kontak from "./Komposisi/Kontak";
import Tentang from "./Komposisi/Tentang";
import Keuangan from "./Komposisi/Keuangan";
import Manajemen from "./Komposisi/Manajemen";
import FAQ from "./Komposisi/FAQ";
//Setelah Login(User)
import WelcomeUser from "./Komposisi(User)/WelcomeUser";
import Tasks from "./Komposisi(User)/Tasks";
import Finance from "./Komposisi(User)/Finance";
import AuthService from "./services/auth.service";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Redirect,
  withRouter,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.Keluar = this.Keluar.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: true,
    };
  }
  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showModeratorBoard: user.roles.includes("ROLE_MODERATOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
      });
    }
  }
  Keluar() {
    AuthService.Keluar();
  }
  render() {
    const currentUser = this.state;

    const routes = [
      {
        path: "/",
        exact: true,
        render: () => <Beranda />,
      },
      {
        path: "/layanan",
        render: () => <Layanan />,
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
        path: "/welcome/user",
        render: () => <WelcomeUser />,
      },
      {
        path: "/welcome/tasks",
        render: () => <Tasks />,
      },
      {
        path: "/welcome/finance",
        render: () => <Finance />,
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
