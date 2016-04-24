var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var HomePage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <SignupForm/>
      </div>
    );
  }
});

module.exports = HomePage;
