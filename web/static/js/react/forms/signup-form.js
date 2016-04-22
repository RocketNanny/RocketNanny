var SignupForm = React.createClass({
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
      <button type="submit" class="btn btn-primary">Submit</button>

</form>
  </div>
    );
  }
});

module.exports = SignupForm;
