import './App.css';
import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import InputLabel from "@material-ui/core/InputLabel";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PasswordForm/>
      </header>
    </div>
  );
}

export default App;

class PasswordForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {password: '', confirmPassword: ''};

    this.handlePasswordTextChange = this.handlePasswordTextChange.bind(this);
    this.handleConfirmPasswordTextChange = this.handleConfirmPasswordTextChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <PasswordField label='Password' onTextChange={this.handlePasswordTextChange} value={this.state.password}/>
        <br/>
        <PasswordField label='Confirm password' onTextChange={this.handleConfirmPasswordTextChange} value={this.state.confirmPassword}/>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  handlePasswordTextChange(event) {
    this.setState({password: event.target.value})
  }

  handleConfirmPasswordTextChange(event) {
    this.setState({confirmPassword: event.target.value})
  }

  handleSubmit(event) {
    if (this.state.password !== this.state.confirmPassword) {
      alert("Password do not match!");
    } else {
      alert("Password set!")
    }

    this.clearForm();
    
    event.preventDefault();
  }

  clearForm() {
    this.props.password = '';
    this.props.confirmPassword = '';

    this.setState({ password: '', confirmPassword: '' });
  }
}

class PasswordField extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showPassword: false };

    this.handleClickShowPassword = this.handleClickShowPassword.bind(this);
  }

  handleClickShowPassword() {
    this.setState({showPassword: !this.state.showPassword });
  }

  handleMouseDownPassword(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <InputLabel style={{color: 'white'}}>
          {this.props.label}
        </InputLabel>
        <Input style={{color: 'white'}} type={this.state.showPassword ? 'text' : 'password'} value={this.props.value} onChange={this.props.onTextChange} endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={this.handleClickShowPassword}
              onMouseDown={this.handleMouseDownPassword}
            >
              {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }/>
      </div>
    );
  }
}