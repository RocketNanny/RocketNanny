var NavBar = require("../nav-bar");

var DashboardPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn } onLogout={ this.props.onLogout }/>
        Dashboard placeholder
      </div>
    );
  }
});

module.exports = DashboardPage;
