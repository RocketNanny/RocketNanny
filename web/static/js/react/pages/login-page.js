var NavBar = require("../nav-bar");
var LoginForm = require("../forms/login-form");

var LoginPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onLogin: React.PropTypes.func.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  handleLogin(loginResponse) {
    this.props.onLogin(loginResponse);
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn } onLogout={ this.props.onLogout }/>
        <LoginForm onLogin={ this.handleLogin }/>
      </div>
    );
  }
});

module.exports = LoginPage;
