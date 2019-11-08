import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { Route, BrowserRouter as Router } from "react-router-dom";
import { Redirect } from "react-router-dom";
import PageLogIn from "./components/Customer/PageLogIn_SignIn_ForgotPassword/Page_LogIn";
import HomePage from "./components/Customer/HomePage/HomePage";
import PageSignIn from "./components/Customer/PageLogIn_SignIn_ForgotPassword/Page_SignIn";
import PageForgotPassword from "./components/Customer/PageLogIn_SignIn_ForgotPassword/Page_ForgotPassword";
import PageRePassword from "./components/Customer/PageLogIn_SignIn_ForgotPassword/Page_RePassword";
import DetailFilm from "./components/Customer/DetailFilm/DetailFilm";
import Home from "./containers/Customer/Home/Home";
import Profile from "./containers/Customer/Profile/Profile";
import About from "./containers/Customer/About/About";
import Schedule from "./containers/Customer/Schedule/Schedule";
import BookTicket from "./containers/Customer/BookTicket/BookTicket";
import CategoryFilm from "./components/Customer/CategoryFilm/CategoryFilm";
import ResultSearch from "./components/Customer/ResultSearch/ResultSearch";
import HomeAdmin from "./containers/Admin/HomeAdmin/HomeAdmin";
import BookTicketSuccess from "./containers/Customer/BookTicketSuccess/BookTicketSuccess";
import { connect } from "react-redux";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: this.props.isLoggedIn
    };
  }

  componentWillReceiveProps = nextProps => {
    if (nextProps.isLoggedIn !== this.state.isLoggedIn) {
      this.setState({ isLoggedIn: nextProps.isLoggedIn });
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={PageLogIn} />
          <Route path="/signin" component={PageSignIn} />
          <Route path="/forgotpassword" component={PageForgotPassword} />
          <Route path="/repassword" component={PageRePassword} />
          <Route path="/home" component={Home} />
          <Route
            path="/profile"
            render={() =>
              this.state.isLoggedIn === true ? (
                <Profile />
              ) : (
                  <Redirect to="/login" />
                )
            }
          />
          <Route path="/about" component={About} />
          <Route path="/schedule" component={Schedule} />
          <Route path="/book-ticket"
            render={() =>
              this.state.isLoggedIn === true ? (
                <BookTicket />
              ) : (
                  <Redirect to="/login" />
                )
            }
          />
          <Route path="/detailfilm" component={DetailFilm} />
          <Route path="/categoryfilm" component={CategoryFilm} />
          <Route path="/resultfilm" component={ResultSearch} />
          <Route path="/book-ticket-success" component={BookTicketSuccess} />
          <Route path="/admin" component={HomeAdmin} />
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggedIn: state.login.isLoggedIn
  };
}
export default connect(mapStateToProps)(App);
