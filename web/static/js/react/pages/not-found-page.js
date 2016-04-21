var NavBar = require("../nav-bar");

var NotFoundPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn } onLogout={ this.props.onLogout }/>
        <h1>404- Page Not Found</h1>
      </div>
    );
  }
});

module.exports = NotFoundPage;
