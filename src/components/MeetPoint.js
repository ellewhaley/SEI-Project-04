import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import Map from './Map'
import Loading from './Loading'
import VenueCard from './VenueCard'
import MapForm from './MapForm'

class MeetPoint extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      data: {},
      errors: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getVenues = this.getVenues.bind(this)
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

  getVenues(location) {
    axios.get('/api/venues', {
      params: {
        location: `${location.lat},${location.lng}`
      }
    })
      .then(res => {
        console.log(res.data)
        res.data.results.splice(0,1)
        this.setState({ venues: res.data.results })
      })
  }

  render() {
    if(!this.state.currentLocation) return <Loading />
    console.log(this.state.venues)
    return (
      <section className="section map-section">
        <div className="columns is-multiline is-mobile">
          <div className="column is-desktop">
            {!this.state.venues &&
              <MapForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
            {this.state.venues &&<div className="column venue-index">
              {this.state.venues && this.state.venues.map(venue =>
                <div key={venue.id}>
                  <VenueCard {...venue} />
                </div>
              )}
            </div>
            }
          </div>
        </div>
        <div className="mapbox-map">
          <Map
            currentLocation={this.state.currentLocation}
            userLocation={this.state.userLocation}
            getVenues={this.getVenues}
            venues={this.state.venues}
          />
        </div>
      </section>
    )
  }
}

export default MeetPoint
