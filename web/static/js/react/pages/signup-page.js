var SignupForm = require("../forms/signup-form");

var SignupPage = React.createClass({
  render() {
    return(
      <div>
      <ul>
        <li><a href="#"><img src="/images/favicon.png" alt="RocketNanny" height="32"/></a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a></li>
    </ul>
        Signup placeholder
        <SignupForm/>
      </div>
    );
  }
});

module.exports = SignupPage;
