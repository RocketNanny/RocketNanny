var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var SignupPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onSignup: React.PropTypes.func.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn } onSignup={ this.props.onSignup } onLogout={ this.props.onLogout }/>
        <SignupForm/>
      </div>
    );
  }
});

module.exports = SignupPage;
