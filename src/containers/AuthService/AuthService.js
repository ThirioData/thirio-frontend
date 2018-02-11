import decode from 'jwt-decode'
import axios from 'axios'

export default class AuthService {
  constructor(domain) {
    this.domain = domain || 'http://159.89.172.19'
    this.fetch = this.fetch.bind(this)
    this.login = this.login.bind(this)
    this.getProfile = this.getProfile.bind(this)
  }

  login(username, password) {
    return axios({
      method: 'POST',
      url: `${this.domain}login`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        username,
        password
      }
    })
    .then(res => {
      // Set the token in local storage
      this.setToken(res.data.access_token)
      // console.log(res.data);
      return Promise.resolve(res)
    })
  }
  loggenIn() {
    // check weather the user is logged in or not
    const token = this.getToken()
    return !!token && !this.isTokenExpired(token)
  }
  isTokenExpired(token) {
    try {
      const decodeNow = decode(token)
      if(decodeNow.exp < Date.now() / 1000) {
        return true
      } else {
        return false
      }
    } catch (err) {
      return false;
    }
  }
  setToken(token) {
    localStorage.setItem('id_token', token)
  }
  getToken() {
    return localStorage.getItem('id_token')
  }
  logout() {
    localStorage.removeItem('id_token')
  }
  getProfile() {
    return decode(this.getToken())
  }
  fetch(url, options) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
    if(this.loggenIn()) {
      headers['Authorization'] = 'JWT ' + this.getToken()
    }
    return fetch(url, {
      headers,
      ...options
    })
    .then(this._checkStatus)
    .then(response => response.json())
  }
  _checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      // Success status
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }
}
