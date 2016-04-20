var NavBar = require("../nav-bar");

var NotFoundPage = React.createClass({
  render() {
    return(
      <div>
      <NavBar isLoggedIn={false}/>
      <h1>404- Page Not Found</h1>
      </div>
    );
  }
});

module.exports = NotFoundPage;
