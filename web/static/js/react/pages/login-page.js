var NavBar = require("../nav-bar");

var LoginPage = React.createClass({
  render() {
    return(
      <div>
        <NavBar isLoggedIn={false}/>
        Login placeholder
      </div>
    );
  }
});

module.exports = LoginPage;
