var NavBar = require("../nav-bar");
var SignupForm = require("../forms/signup-form");

var HomePage = React.createClass({
  render() {
    return(
      <div>
        <NavBar isLoggedIn={false}/>
        <SignupForm/>
      </div>
    );
  }
});

module.exports = HomePage;
