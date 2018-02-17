import React, { Component } from 'react'
import AuthService from '../containers/AuthService/AuthService'

export default function withAuth(AuthComponent) {
  const Auth = new AuthService("http://159.89.172.19")
  return class AuthWrapped extends Component {
    // this calss is returned
    constructor() {
      super()
      this.state = {
        user: null
      }
    }
    componentWillMount() {
      if(!Auth.loggenIn()) {
        this.props.history.replace("/login")
      } else {
        // the user is logged in
        try {
          const profile = Auth.getProfile()
          this.setState({
            user: profile
          })
        } catch(err) {
          Auth.logout()
          this.props.history.replace("/login")
        }
      }
    }
    render() {
      if(this.state.user) {
        return (
          <AuthComponent history={this.props.history} user={this.state.user} />
        )
      } else {
        return
      }
    }
  }
}
