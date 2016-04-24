var NavBar = require("../nav-bar");
var LoginForm = require("../forms/login-form");

var LoginPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <LoginForm/>
      </div>
    );
  }
});

module.exports = LoginPage;
