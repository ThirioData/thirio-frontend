import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import AuthService from './containers/AuthService/AuthService'
import './App.css';

import { Container, Menu, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import Routes from './Routes'
import RouteNavItem from './containers/RouteNavItem'

const Auth = new AuthService("http://159.89.172.19")
class App extends Component {
  loggOut = event => {
    Auth.logout()
    this.props.history.replace("/login")
  }
  render() {
    let logout = null
    if(!Auth.loggenIn()) {
      logout = <RouteNavItem href="/login">Login</RouteNavItem>
    } else {
      logout = <Menu.Item name="logout" onClick={this.loggOut}/>
    }
    return (
      <Container className="App">
        <Menu className="navigation">
          <Menu.Item name="Thirio" className="navigationTitle" position="left">
            <Link to="/">
            <Header as="h1">Thirio</Header>
          </Link>
          </Menu.Item>
          <RouteNavItem href="/foods">foods</RouteNavItem>
          <RouteNavItem href="/signup">Signup</RouteNavItem>
          <RouteNavItem href="/order">Order</RouteNavItem>
            {logout}
          </Menu>
        <Routes />
      </Container>
    );
  }
}

export default withRouter(App);
