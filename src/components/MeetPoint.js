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
    this.handleRefresh = this.handleRefresh.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = { ...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })

    console.log(this.state.data.type)
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ currentLocation: [longitude, latitude] })
    })
  }

  handleRefresh() {
    this.setState({
      venues: null,
      userLocation: null
    })
  }

  handleSubmit(e) {
    e.preventDefault()
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
        location: `${location.lat},${location.lng}`,
        type: this.state.data.type,
        radius: this.state.data.radius
      }
    })
      .then(res => this.setState({ venues: res.data.results }))
  }

  render() {
    if(!this.state.currentLocation) return <Loading />
    return (
      <section className="section map-section is-mobile">
        <div className="columns is-multiline">
          <div className="column map-form-column">
            {!this.state.venues &&
              <MapForm
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
              />
            }
            {this.state.venues &&<div className="column venue-index">
              <p className="title is-3">Venues...</p>
              {this.state.venues && this.state.venues.map(venue =>
                <div key={venue.id}>

                  <VenueCard {...venue} />
                </div>
              )}
            </div>
            }
          </div>
        </div>
        <div className="mapbox-map is-mobile">
          {this.state.venues && <button className="reset-button" onClick={this.handleRefresh}>Search Again</button>}
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
