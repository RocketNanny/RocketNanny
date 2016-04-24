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
        <div className="container">
          <main role="main">
            <LoginForm/>
          </main>
        </div>
      </div>
    );
  }
});

module.exports = LoginPage;
