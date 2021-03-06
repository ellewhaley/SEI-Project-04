import React from 'react'
import axios from 'axios'

class Register extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      error: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const error = { ...this.state.error, [name]: '' }
    this.setState({ data, error })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch((err) => this.setState({ error: err.response.data.error }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <p className="title is-2">Sign Up</p>
          <div className="columns is-centered">
            <div className="column is-half-desktop is-two-thirds-tablet">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control">
                    <input className="input" name="username" placeholder="eg: leela3000" onChange={this.handleChange}/>
                  </div>
                  {this.state.error.username && <div className="help is-danger">{this.state.error.username}</div>}
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input className="input" name="email" placeholder="eg: leela@planetexpress.nnyc" onChange={this.handleChange}/>
                  </div>
                  {this.state.error.email && <div className="help is-danger">{this.state.error.email}</div>}
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input className="input" name="password" type="password" placeholder="eg: ••••••••" onChange={this.handleChange}/>
                  </div>
                  {this.state.error.password && <div className="help is-danger">{this.state.error.password}</div>}
                </div>
                <div className="field">
                  <label className="label">Password Confirmation</label>
                  <div className="control">
                    <input className="input" name="password_confirmation" type="password" placeholder="eg: ••••••••" onChange={this.handleChange}/>
                  </div>
                  {this.state.error.password_confirmation && <div className="help is-danger">{this.state.error.password_confirmation}</div>}
                </div>

                <button className="button is-dark">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
