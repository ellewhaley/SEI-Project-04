import jwt from 'jsonwebtoken'

class Auth {
  // store the token
  static setToken(token) {
    localStorage.setItem('token', token)
  }
  // get the token
  static getToken() {
    return localStorage.getItem('token')
  }
  //
  static removeToken() {
    localStorage.removeItem('token')
  }

  static getPayload() {
    return jwt.decode(this.getToken())
  }

  static isAuthenticated() {
    return !!this.getToken()
  }
}

export default Auth
