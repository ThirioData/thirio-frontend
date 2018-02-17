import React, { Component } from 'react'
import axios from 'axios'

export default class Order extends Component {
    state = {
        otpSended : false
    }
    onSelectChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    onFormSubmit = event => {
        event.preventDefault()
        const auth = `JWT ${localStorage.getItem('id_token')}`
        return axios({
          method: 'POST',
          url: `http://159.89.172.19/otpgenerate`,
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
          this.setState({
            otpSended: true
          })
        })
        .catch(error => {
          console.log(error)
          this.setState({
              otpSended: true
          })
        })
        console.log(this.state)
    }
    optSubmit = event => {
        event.preventDefault()
        const auth = `JWT ${localStorage.getItem('id_token')}`
        return axios({
          method: "POST",
          url: `http://159.89.172.19/otpverify`,
          headers: {
            'Content-Type': 'application/json',
            'Authorization': auth
          },
          data: {
            "mobileno": this.state.mobileno,
            "token": this.state.token
          }
        })
        console.log("Submit")
    }
    render() {
        if(!this.state.otpSended) {
            return (
                <div>
                    <h1>Order Food here</h1>
                    <form onSubmit={this.onFormSubmit}>
                    <select onChange={this.onSelectChange} id="company">
                        <option value="c1">Company One</option>
                        <option value="c2">Company Two</option>
                        <option value="c3">Company Three</option>
                        <option value="c4">Company Four</option>
                    </select><br /><br />
                    <input type="text" onChange={this.onSelectChange} name="name" placeholder="your full name" id="name" /><br /><br />
                    <input type="username" onChange={this.onSelectChange} name="username" placeholder="your username" id="username" /><br /><br />
                    <input type="text" onChange={this.onSelectChange} name="mobileno" placeholder="your mobile no" id="mobileno" /><br /><br />
                    <input type="submit" onChange={this.onSelectChange} value="submit" />
                    </form>
                </div>
            )
        } else {
            return (
                <div>
                    <h1>Enter OTP</h1>
                    <form onSubmit={this.optSubmit}>
                        <input type="number" id="otp" placeholder="Enter your OTP" />
                        <br /><br />
                        <input type="submit" value="Verify" />
                    </form>
                </div>
            )
        }
    }
}
