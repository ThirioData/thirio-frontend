import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './containers/Home/Home'
import NotFound from './containers/NotFound/NotFound'
import Login from './containers/Login/Login'
import Signup from './containers/Signup/Signup'
import Food from './containers/Foods/Food'
import Order from './containers/Otp/Order'

export default () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/foods" exact component={Food} />
      <Route path="/order" exact component={Order} />
      <Route component={NotFound} />
    </Switch>
  )
}
