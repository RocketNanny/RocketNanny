var NavBar = require("../nav-bar");

var DashboardPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <div className="container">
          <main role="main">
            Dashboard placeholder
          </main>
        </div>
      </div>
    );
  }
});

module.exports = DashboardPage;
