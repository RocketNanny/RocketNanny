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
      <div>
        <h1>Signup Form</h1>
        <form>
          <fieldset class="form-group">
            <label for="formGroupInput">First Name  </label>
            <input type="text" class="form-control" id="formGroupInput" placeholder="First Name"/>
          </fieldset>
          <fieldset class="form-group">
            <label for="formGroupInput2">Last Name  </label>
            <input type="text" class="form-control" id="formGroupInput2" placeholder="Last Name"/>
          </fieldset>
          <fieldset class="form-group">
            <label for="InputEmail">Email address  </label>
            <input type="email" class="form-control" id="InputEmail" placeholder="Enter email"/>
          </fieldset>
          <fieldset class="form-group">
            <label for="InputPassword">Password  </label>
            <input type="password" class="form-control" id="InputPassword" placeholder="Password"/>
          </fieldset>
          <fieldset class="form-group">
            <label for="InputPassword2">Confirm Password  </label>
            <input type="password" class="form-control" id="InputPassword2" placeholder="ConfirmPassword"/>
          </fieldset>
          <button type="submit" class="btn btn-primary" onClick={ this.signup }>Submit</button>
        </form>
      </div>
    );
  }
});

module.exports = SignupForm;
