import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleUNChange = e => {
    this.setState({
      username: e.target.value
    })
  }

  handlePWChange = e => {
    this.setState({
      password: e.target.value
    })
  }

  render() {
    return (
      <form 
        onSubmit={e => {
          e.preventDefault()
          if (this.state.username !== "" && this.state.password !== "") {
            this.props.handleLogin(this.state)
          }
        }
      }>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={e => this.handleUNChange(e)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={e => this.handlePWChange(e)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
