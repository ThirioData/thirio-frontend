import React, { Component } from 'react'
import AuthService from '../AuthService/AuthService'
import { Container, Button, Form } from 'semantic-ui-react'
import "./Login.css"

export default class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: "",
      password: ""
    }
    this.Auth = new AuthService("http://159.89.172.19/")
  }
  componentWillMount() {
    if(this.Auth.loggenIn())
      this.props.history.replace("/")
  }
  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 4
  }
  handleChange = event  => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleSubmit = event => {
    event.preventDefault()
    console.log(this.state);
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
            <input type="text" placeholder="Enter your username" autoFocus id="email" value={this.state.username} onChange={this.handleChange}/>
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
