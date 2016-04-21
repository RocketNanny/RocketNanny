var LoginForm = React.createClass({
  propTypes: {
    onLogin: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      email: null,
      password: null,
      errors: []
    };
  },

  login() {
    var self = this;

    $.ajax({
      method: "POST",
      url: window.API_URL + "/login",
      data: {email: this.state.email, password: this.state.password}
    }).done(function(response) {
      if(response["status"] == "success") {
        self.props.onLogin(response);
      }
    }).error(function() {
    });
  },

  render() {
    return(
      <div onClick={ this.login }>
        Login Form Here
        <div>{this.state.email} {this.state.password}</div>
      </div>
    );
  }
});

module.exports = LoginForm;
