var NavBar = require("../nav-bar");

var NotFoundPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <h1>404- Page Not Found</h1>
      </div>
    );
  }
});

module.exports = NotFoundPage;
