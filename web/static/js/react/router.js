import {Socket} from "phoenix"

var HomePage = require("./pages/home-page");
var DashboardPage = require("./pages/dashboard-page");
var LoginPage = require("./pages/login-page");
var SignupPage = require("./pages/signup-page");
var NotFoundPage = require("./pages/not-found-page");

var Router = React.createClass({
  getInitialState() {
    return {
      token: null,
      account_id: null,
      user_id: null
    };
  },

  componentDidMount() {
    this.updateStateFromSession();
  },

  componentDidUpdate(prevProps, prevState) {
    if(this.isLoggedIn()) {
      var socket = new Socket(window.SOCKET_URL + "/account_socket", {params: {token: this.state.token}})

      socket.connect()

      var channel = socket.channel("account:" + this.state.account_id, {token: this.state.token})
      channel.join()
        .receive("ok", resp => { console.log("Joined successfully", resp) })
        .receive("error", resp => { console.log("Unable to join", resp) })
    }
  },

  clearSession() {
    sessionStorage.clear();

    this.setState({
      token: null,
      account_id: null,
      user_id: null
    });
  },

  handleSignup() {
  },

  isLoggedIn() {
    return !(_.isNil(this.state.token) && _.isNil(this.state.account_id) && _.isNil(this.state.user_id));
  },

  setSession(loginResponse) {
    sessionStorage.setItem("token", loginResponse.token);
    sessionStorage.setItem("user_id", loginResponse.user_id);
    sessionStorage.setItem("account_id", loginResponse.account_id);
    this.updateStateFromSession();
  },

  updateStateFromSession() {
    this.setState({
      token: sessionStorage.getItem("token"),
      account_id: sessionStorage.getItem("account_id"),
      user_id: sessionStorage.getItem("user_id")
    });
  },

  render() {
    switch (this.props.location[0])  {
    case '':
      return(<HomePage isLoggedIn={ this.isLoggedIn() } onLogout={ this.clearSession }/>);
    case "app":
      return(<DashboardPage isLoggedIn={ this.isLoggedIn() } onLogout={ this.clearSession }/>);
    case "login":
      return(<LoginPage isLoggedIn={ this.isLoggedIn() } onLogout={ this.clearSession } onLogin={ this.setSession }/>);
    case "signup":
      return(<SignupPage isLoggedIn={ this.isLoggedIn() } onLogout={ this.clearSession } onSignup={ this.handleSignup }/>);
    default:
      return(<NotFoundPage isLoggedIn={ this.isLoggedIn() } onLogout={ this.clearSession }/>);
    }
  }
});

module.exports = Router;
