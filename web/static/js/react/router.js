var HomePage = require("./pages/home-page");
var DashboardPage = require("./pages/dashboard-page");
var LoginPage = require("./pages/login-page");
var SignupPage = require("./pages/signup-page");
var NotFoundPage = require("./pages/not-found-page");

var Router = React.createClass({
  PropTypes: {
    location: React.PropTypes.string.isRequired,
    account_id: React.PropTypes.string,
    user_id: React.PropTypes.string
  },

  isLoggedIn() {
    return !!this.props.account_id && !!this.props.user_id;
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
