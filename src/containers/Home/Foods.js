import React from 'react'
import { Container, Header } from 'semantic-ui-react'

export default props =>
  <Container>
    <Header>{props.food.food_name}</Header>
    <p><strong>Food Cuisine:</strong> {props.food.food_cuisine}</p>
    <p><strong>Food Type:</strong> {props.food.food_type}</p>
    <p><strong>Food Cateogry:</strong> {props.food.food_category}</p>
    <p><strong>Food Calorie:</strong> <strong>{props.food.food_calorie}</strong></p>
    <p><strong>Food Description:</strong> {props.food.food_description}</p>
    <p><strong>Spice1:</strong> {props.food.spice1}</p>
    <p><strong>Spice2:</strong>{props.food.spice2}</p>
    <p><strong>Spice3:</strong> {props.food.spice3}</p>
    <p><strong>Spice4:</strong> {props.food.spice4}</p>
    <hr />
  </Container>
