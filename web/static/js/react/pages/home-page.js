var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var HomePage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  renderSignupForm() {
    if(!this.props.isLoggedIn) {
      return(<SignupForm/>);
    }
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <div className="container">
          <main role="main">
            { this.renderSignupForm() }
          </main>
        </div>
      </div>
    );
  }
});

module.exports = HomePage;
