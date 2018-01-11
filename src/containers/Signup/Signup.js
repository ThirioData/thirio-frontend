import React, { Component } from 'react'
import uuid from "uuid"
import { Container, Button, Form, Dropdown, Radio } from 'semantic-ui-react'
import "./Signup.css"
import { Places, Gender } from "./Places"

export default class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      email: "",
      username: "",
      password: "",
      firstname: "",
      lastname: "",
      age: "",
      sex: "",
      location: "",
      non_veg: "",
      user_guid: uuid.v4()
    }
  }
  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.firstname.length > 0 &&
      this.state.lastname.length > 0 &&
      this.state.sex.length > 0 &&
      this.state.location.length > 0 &&
      this.state.non_veg.length > 0
    )
  }
  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  handleChangeSelectionPlace = event => {
    if(event.target.lastChild) {
      this.setState({
        location: event.target.lastChild.innerHTML
      })
    }
  }
  handleChangeSelectionSex = event => {
    if(event.target.lastChild) {
      this.setState({
        sex: event.target.lastChild.innerHTML
      })
    }
  }
  handleByName = (event, {value}) => {
    this.setState({
      non_veg: value === "veg" ? "veg" : "non_veg"
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
  }

  render() {
    return (
      <Container className="Signup">
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>FirstName</label>
            <input type="text" id="firstname" placeholder="Enter your firstname" onChange={this.handleChange} value={this.state.firstname}/>
          </Form.Field>
          <Form.Field>
            <label>Lastname</label>
            <input type="text" id="lastname" placeholder="Enter your lastname" onChange={this.handleChange} value={this.state.lastname}/>
          </Form.Field>
          <Form.Field>
            <label>Gender</label>
            <Dropdown placeholder="Choose your gender" id="sex" fluid search selection options={ Gender } onChange={this.handleChangeSelectionSex}/>
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input type="email" id="email" placeholder="Enter your email" onChange={this.handleChange} value={this.state.email}/>
          </Form.Field>
          <Form.Field>
            <label>Username</label>
            <input type="text" id="username" placeholder="Enter your username" onChange={this.handleChange} value={this.state.username}/>
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input type="password" id="password" placeholder="Enter your password" onChange={this.handleChange} value={this.state.password}/>
          </Form.Field>
          <Form.Field>
            <label>Choose your place</label>
            <Dropdown id="location" placeholder="Select your city" fluid search selection options={Places} onChange={this.handleChangeSelectionPlace}/>
          </Form.Field>
          <Form.Field>
            <label>Choose your preferences</label>
            <Radio label="Veg" name="veg" value="veg" onChange={this.handleByName} checked={this.state.non_veg === "veg"}/>
            <Radio label="Non-Veg" name="non_veg" value="non_veg" onChange={this.handleByName} checked={this.state.non_veg === "non_veg"}/>
          </Form.Field>
          <Button type="submit" disabled={!this.validateForm()}>Signup</Button>
        </Form>
      </Container>
    )
  }
}
