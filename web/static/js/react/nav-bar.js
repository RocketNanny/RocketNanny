var NavBar = React.createClass({
  propTypes: {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onLogout: React.PropTypes.func.isRequired
  },

  openMenu() {
    console.log("opening menu");
  },

  renderDashboardLink() {
    if(this.props.isLoggedIn) {
      return(
        <li>
          <a href="/#/app">Dashboard</a>
        </li>
      );
    }
  },

  renderLoginLink() {
    if(!this.props.isLoggedIn) {
      return(
        <li>
          <a href="/#/login">Login</a>
        </li>
      );
    }
  },

  renderLogoutLink() {
    if(this.props.isLoggedIn) {
      return(
        <li>
          <a href="javascript:;" onClick={ this.props.onLogout }>Logout</a>
        </li>
      );
    }
  },

  renderSignupLink() {
    if(!this.props.isLoggedIn) {
      return(
        <li>
          <a href="/#/signup">Signup</a>
        </li>
      );
    }
  },

  render() {
    return(
      <ul>
        <li>
          <a href="/#/">
            <img src="/images/favicon.png" alt="RocketNanny" height="32"/>
          </a>
        </li>
        { this.renderLoginLink() }
        { this.renderSignupLink() }
        { this.renderDashboardLink() }
        { this.renderLogoutLink() }
        <li>
          <a onClick={ this.openMenu }>
            <i className="fa fa-bars fa-2x" aria-hidden="true"/>
          </a>
        </li>
      </ul>
    );
  }
});

module.exports = NavBar;
