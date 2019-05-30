import React from 'react'

import Map from './Map'

class MeetPoint extends React.Component {

  constructor() {
    super()

    this.state = {
      currentLocation: [-0.2416815, 51.5285582],
      userLocation: [-0.0416815, 51.5285582]
    }
  }

  render() {
    return (
      <div className="mapbox-map">
        <Map
          currentLocation={this.state.currentLocation}
          userLocation={this.state.userLocation}
        />
      </div>
    )
  }
}

export default MeetPoint
