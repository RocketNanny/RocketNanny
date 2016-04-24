var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var HomePage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onSignup: React.PropTypes.func.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn } onLogout={ this.props.onLogout }/>
        <SignupForm onSignup={ this.props.onSignup }/>
      </div>
    );
  }
});

module.exports = HomePage;
