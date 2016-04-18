var HomePage = require("./pages/home-page");
var DashboardPage = require("./pages/dashboard-page");
var LoginPage = require("./pages/login-page");
var SignupPage = require("./pages/signup-page");
var NotFoundPage = require("./pages/not-found-page");

var Router = React.createClass({
  render() {
    switch (this.props.location[0])  {
    case '':
      return(<HomePage/>);
    case "app":
      return(<DashboardPage/>);
    case "login":
      return(<LoginPage/>);
    case "signup":
      return(<SignupPage/>);
    default:
      return(<NotFoundPage/>);
    }
  }
});

module.exports = Router;
