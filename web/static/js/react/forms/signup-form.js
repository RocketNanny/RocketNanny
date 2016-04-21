var SignupForm = React.createClass({
  propTypes: {
    onSignup: React.PropTypes.func.isRequired
  },

  getInitialState() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      confirmPassword: null,
      errors: []
    };
  },

  signup() {
    var self = this;

    $.ajax({
      method: "POST",
      url: window.API_URL + "/signup",
      data: {user: {first_name: this.state.firstName, last_name: this.state.lastName, email: this.state.email, password: this.state.password}}
    }).done(function(response) {
      if(response["status"] == "success") {
        self.props.onSignup(response);
      }
    }).error(function() {
    });
  },
  render() {
    return(
      <div onClick={ this.signup }>
        Form placeholder
        <div>{this.state.firstName} {this.state.lastName} {this.state.email} {this.state.password}</div>
      </div>
    );
  }
});

module.exports = SignupForm;