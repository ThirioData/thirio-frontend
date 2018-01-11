import React, { Component } from 'react'
import AuthService from '../AuthService/AuthService'
import { Container, Button, Checkbox, Form } from 'semantic-ui-react'
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: "",
      password: ""
    }
    this.Auth = new AuthService("https://dodoapi.herokuapp.com")
  }
  componentWillMount() {
    if(this.Auth.loggenIn())
      this.props.history.replace("/")
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 4
  }
  handleChange = event  => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    this.Auth.login(this.state.username, this.state.password)
      .then(res => {
        this.props.history.replace("/")
        // return
      })
      .catch(err => {
        alert(err)
      })
  }

  render() {
    return (
      <Container className="Login">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>username</label>
            <input type="text" placeholder="Enter your username" autoFocus id="username" value={this.state.username} onChange={this.handleChange}/>
          </Form.Field>
          <Form.Field>
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" id="password" value={this.state.password} onChange={this.handleChange}/>
          </Form.Field>
          <Button type='submit' disabled={!this.validateForm()}>Login</Button>
        </Form>
      </Container>
    )
  }
}
