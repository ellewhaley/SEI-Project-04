import React from 'react'
import axios from 'axios'

class Search extends React.Component {

  constructor() {
    super()

    this.state = {
      data: {},
      errors: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    // this will be an axios request for the long and lat of the inputs and will display them on the map
    axios.post('/api/search', this.state.data)
      .then(() => this.props.history.push('/map'))
      .catch((err) => this.setState({ errors: err.response.data }))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <p className="title is-1">Meet in the Middle</p>
          <p className="title is-4">Enter both your own and your friends starting points and choose where you want to meet.</p>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Your Postcode</label>
              <div className="control">
                <input
                  name="own_postcode"
                  className="input"
                  type="text"
                  placeholder="Enter 1st Postcode"
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label name="friend_postcode" className="label">Your friends Postcode</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Enter 2nd Postcode"
                  onChange={this.handleChange} />
              </div>
            </div>
            <div className="field">
              <label className="label">What are you feeling?</label>
              <div className="select">
                <select name="venue" onChange={this.handleChange}>
                  <option value="">Select</option>
                  <option value="bar">Bar</option>
                  <option value="pub">Pub</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                </select>
              </div>
            </div>
            <button className="button is-warning">Submit</button>
          </form>
        </div>
      </section>
    )
  }
}
export default Search
