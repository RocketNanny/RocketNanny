var NavBar = require("../nav-bar");

var DashboardPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        Dashboard placeholder
      </div>
    );
  }
});

module.exports = DashboardPage;
