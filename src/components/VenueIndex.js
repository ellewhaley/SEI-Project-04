import React from 'react'
import axios from 'axios'
// import { Link } from 'react-router-dom'

import Map from './Map'
import Loading from './Loading'
import VenueCard from './VenueCard'

class VenueIndex extends React.Component {

  constructor() {
    super()

    this.state = {
      venues: []
    }

  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords
      this.setState({ currentLocation: [longitude, latitude] })
    })
    axios.get('api/venues')
      .then(res => this.setState({ venues: res.data }))
  }

  render() {
    if(!this.state.currentLocation) return <Loading />
    return(
      <section className="section map-section">
        <div className="container map-form">
          <p className="title is-2">Choose a venue</p>
          <div className="columns is-multiline is-mobile">
            {this.state.venues.map(venue =>
              <div key={venue._id} className="column">
                <VenueCard {...venue} />
              </div>
            )}
          </div>
        </div>
        <div className="mapbox-map">
          <Map
            currentLocation={this.state.currentLocation}
            userLocation={this.state.userLocation}
          />
        </div>
      </section>
    )
  }
}

export default VenueIndex
