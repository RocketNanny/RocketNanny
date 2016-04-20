var NotFoundPage = React.createClass({
  render() {
    return(
      <div>
      <ul>
        <li><a href="#"><img src="/images/favicon.png" alt="RocketNanny" height="32"/></a></li>
        <li><a href="#login">Login</a></li>
        <li><a href="#signup">Signup</a></li>
        <li><a><i className="fa fa-bars fa-2x" aria-hidden="true"></i></a></li>
      </ul>



      <h1>404 - Page Not Found</h1></div>
    );
  }
});

module.exports = NotFoundPage;
