import {Component} from 'react'

import Cookies from 'js-cookie'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({
      username: event.target.value,
    })
  }

  onChangePassword = event => {
    this.setState({
      password: event.target.value,
    })
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({
      errorMsg,
      showSubmitError: true,
    })
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    console.log('user details are,', userDetails)
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    } else {
      this.onFailure(data.error_msg)
    }
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    return (
      <div>
        <h1>This is LoginForm</h1>
        <p>Please Login</p>
        <form onSubmit={this.onSubmitForm}>
          <label htmlFor="username">USERNAME</label>
          <input
            id="username"
            onChange={this.onChangeUsername}
            placeholder="Enter Your Name"
          />
          <label htmlFor="password">PASSWORD</label>
          <input
            id="password"
            onChange={this.onChangePassword}
            placeholder="Enter Your Password"
          />
          <button type="submit">Login</button>
          {showSubmitError && <p>{errorMsg}</p>}
        </form>
      </div>
    )
  }
}

export default LoginForm
