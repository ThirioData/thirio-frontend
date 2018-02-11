import React, { Component } from 'react'
import { Form, Container, Button } from 'semantic-ui-react'
import axios from 'axios'

class Food extends Component {
  state = {
    food_name: "",
    food_calorie: "",
    food_type: "",
    food_cuisine: "",
    food_image: "",
    food_category: "",
    food_description: "",
    spice1: "",
    spice2: "",
    spice3: "",
    spice4: ""
  }
  onInputChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }
  validateForm() {
    return this.state.food_name.length &&
           this.state.food_calorie.length &&
           this.state.food_type.length &&
           this.state.food_cuisine.length &&
           this.state.food_image.length &&
           this.state.food_category.length &&
           this.state.food_description.length &&
           this.state.spice1.length &&
           this.state.spice2.length &&
           this.state.spice3.length &&
           this.state.spice4.length
  }
  onFormSubmit = event => {
    event.preventDefault()
    const auth = `JWT ${localStorage.getItem('id_token')}`
    return axios({
      method: 'POST',
      url: `https://dodoapi.herokuapp.com/food/${this.state.food_name}`,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': auth
      },
      data: this.state
    })
    .then(res => {
      return Promise.resolve(res)
    })
    .then(data => {
      console.log(data)
    })
    .catch(error => {
      console.log(error.response)
    })
  }
  render() {
    return (
      <Container className="Login">
        <Form onSubmit={this.onFormSubmit}>
          <Form.Field>
            <label>Food Name</label>
            <input type="text" placeholder="Enter food name" id="food_name" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Calorie</label>
            <input placeholder="Enter food calorie in number" type="number" id="food_calorie" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Type</label>
            <input placeholder="Enter food type" type="text" id="food_type"onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Cousine</label>
            <input type="text" placeholder="Enter Food Cousine" id="food_cuisine"onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Image</label>
            <input type="text" placeholder="Enter Food Image URL" id="food_image"onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Category</label>
            <input type="text" placeholder="Enter Food Category" id="food_category"onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Food Description</label>
            <textarea rows="5" cols="5" id="food_description" onChange={this.onInputChange}></textarea>
          </Form.Field>
          <Form.Field>
            <label>Spice 1</label>
            <input type="text" placeholder="Enter Spice 1" id="spice1" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Spice 2</label>
            <input type="text" placeholder="Enter Spice 2" id="spice2" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Spice 3</label>
            <input type="text" placeholder="Enter Spice 3" id="spice3" onChange={this.onInputChange}/>
          </Form.Field>
          <Form.Field>
            <label>Spice 4</label>
            <input type="text" placeholder="Enter Spice 4" id="spice4" onChange={this.onInputChange}/>
          </Form.Field>
          <Button type='submit' disabled={!this.validateForm()}>Submit</Button>
        </Form>
      </Container>
    )
  }
}


export default Food
