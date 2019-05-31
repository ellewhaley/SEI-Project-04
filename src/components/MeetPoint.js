import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

import Map from './Map'
import Loading from './Loading'

class MeetPoint extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      errors: ''
      // userLocation: [-0.10847, 51.429474]
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })

    console.log(this.state)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ currentLocation: [longitude, latitude] })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    console.log(this.state)
    axios.get(`https://api.postcodes.io/postcodes/${this.state.data.friend_postcode}`)
      .then(res => {
        console.log(res.data.result)
        const { longitude, latitude } = res.data.result
        this.setState({ userLocation: [longitude, latitude] })
      })
  }

  render() {
    if(!this.state.currentLocation) return <Loading />
    return (
      <section className="section map-section">
        <div className="container map-form">
          <p className="title is-2">Meet Up</p>
          <br/>
          <p className="subtitle is-5">Enter your friends postcode and decide where you want to meet.</p>
          <form onSubmit={this.handleSubmit}>
            <div className="field">
              <label className="label">Your Location</label>
              <div className="select map-input">
                <select name="venue">
                  <option value="">Use Current Location</option>
                </select>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <label  className="label">Your friends Location</label>
                <input
                  className="input map-input"
                  type="text"
                  placeholder="Enter your friends Postcode"
                  onChange={this.handleChange}
                  name="friend_postcode"/>
              </div>
            </div>
            <div className="field map-input">
              <label className="label">What are you feeling?</label>
              <div className="select">
                <select name="venue">
                  <option value="">Select</option>
                  <option value="bar">Bar</option>
                  <option value="pub">Pub</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="cafe">Cafe</option>
                  <option value="night_club">Night Club</option>
                </select>
              </div>
            </div>
            <button className="button is-dark">Submit</button>
          </form>
        </div>
        <div className="mapbox-map">
          {this.state.userLocation && <Link to="/" className="button is-primary show-venues-button">Sign In</Link>}
          <Map
            currentLocation={this.state.currentLocation}
            userLocation={this.state.userLocation}
          />
        </div>
      </section>
    )
  }
}

export default MeetPoint
