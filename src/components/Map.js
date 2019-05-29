import React from 'react'
import Auth from '../lib/Auth'
import { Link } from 'react-router-dom'
import ReactMapboxGl, { Marker } from 'react-mapbox-gl'

const Mapbox = ReactMapboxGl({
  minZoom: 8,
  maxZoom: 15,
  accessToken: process.env.MAP_BOX_TOKEN
})


class Map extends React.Component{

  render() {
    return(
      <Mapbox
        style='mapbox://styles/mapbox/streets-v9'
        containerStyle={{
          height: '100vh',
          width: '100vw'
        }}>
        <section className='section'>
          <div className='container map-container'>
            <Marker
              coordinates={[-0.2416815, 51.5285582]}
              anchor='bottom'>
              <img className='marker' src='assets/marker.png'/>
            </Marker>
            {!Auth.isAuthenticated() && <Link to="/home"><button className="button is-primary start-button">Start Planning</button></Link>}
          </div>
        </section>
      </Mapbox>
    )
  }
}

export default Map
