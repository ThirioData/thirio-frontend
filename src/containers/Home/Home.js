import React, { Component } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Food from './Foods'
import axios from 'axios'
import "./Home.css"

export default class Home extends Component {
  state= {
    foods: []
  }
  componentWillMount() {
  axios.get('https://dodoapi.herokuapp.com/foods')
    .then(res => {
      this.setState({
        foods: res.data.foods
      })
      console.log(res.data.foods)
    })
    .catch(err => {
      console.log(err)
    })
  }
  render() {
    return (
      <Container className="Home">
        <div className="lander">
          <Header>Welcome to thirio</Header>
          {
            this.state.foods.map(food => {
              return <Food food={food} />
            })
          }
        </div>
      </Container>
    )
  }
}
