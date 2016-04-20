var NavBar = require("../nav-bar");

var DashboardPage = React.createClass({
  render() {
    return(
      <div>
        <NavBar isLoggedIn={false}/>
        Dashboard placeholder
        </div>
    );
  }
});

module.exports = DashboardPage;
