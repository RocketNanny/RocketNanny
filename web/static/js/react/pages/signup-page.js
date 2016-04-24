var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var SignupPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <div className="container">
          <main role="main">
            <SignupForm/>
          </main>
        </div>
      </div>
    );
  }
});

module.exports = SignupPage;
