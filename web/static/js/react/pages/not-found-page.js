var NavBar = require("../nav-bar");

var NotFoundPage = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired
  },

  render() {
    return(
      <div>
        <NavBar isLoggedIn={ this.props.isLoggedIn }/>
        <div className="container">
          <main role="main">
            <h1>404- Page Not Found</h1>
          </main>
        </div>
      </div>
    );
  }
});

module.exports = NotFoundPage;
