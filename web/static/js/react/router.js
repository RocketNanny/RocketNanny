var HomePage = require("./pages/home-page");
var DashboardPage = require("./pages/dashboard-page");
var LoginPage = require("./pages/login-page");
var SignupPage = require("./pages/signup-page");
var NotFoundPage = require("./pages/not-found-page");

var Router = React.createClass({
  getInitialState() {
    return {
      location: React.PropTypes.string.isRequired,
      account_id: null,
      user_id: null
    };
  },

  isLoggedIn() {
    return !!this.state.account_id && !!this.state.user_id;
  },

  render() {
    var isLoggedIn = this.isLoggedIn();
    switch (this.props.location[0])  {
    case '':
      return(<HomePage isLoggedIn={ isLoggedIn }/>);
    case "app":
      if(isLoggedIn) {
        return(<DashboardPage isLoggedIn={ isLoggedIn }/>);
      } else {
        window.location = "/#/login";
      }
    case "login":
      if(isLoggedIn) {
        window.location = "/#/app";
      } else {
        return(<LoginPage isLoggedIn={ isLoggedIn }/>);
      }
    case "signup":
      if(isLoggedIn) {
        window.location = "/#/app";
      } else {
        return(<SignupPage isLoggedIn={ isLoggedIn }/>);
      }
    default:
      return(<NotFoundPage isLoggedIn={ isLoggedIn }/>);
    }
  }
});

module.exports = Router;
