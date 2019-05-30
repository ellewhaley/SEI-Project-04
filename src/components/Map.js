import React from 'react'
// import Auth from '../lib/Auth'
// import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN

class Map extends React.Component {

  componentDidMount() {

    this.map = new mapboxgl.Map({
      container: this.mapCanvas,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 10,
      center: [-0.07, 51.515]
    })

    this.currentLocation = new mapboxgl.Marker()
      .setLngLat(this.props.currentLocation)
      .addTo(this.map)

    this.userLocation = new mapboxgl.Marker()
      .setLngLat(this.props.userLocation)
      .addTo(this.map)

    this.bounds = new mapboxgl.LngLatBounds()
    this.bounds.extend(this.props.currentLocation)
    this.bounds.extend(this.props.userLocation)

    this.centerPointMarker = new mapboxgl.Marker()
      .setLngLat(this.bounds.getCenter())
      .addTo(this.map)

    this.map.setCenter(this.bounds.getCenter())
  }

  render() {
    return (
      <div className="mapbox-map" ref={el => this.mapCanvas = el}/>
    )
  //   render() {
  //     return(
  //       <div className="map-container">
  //         {!Auth.isAuthenticated() && <Link to="/" className="button is-primary start-button">Start Planning</Link>}
  //         <Mapbox
  //           style='mapbox://styles/mapbox/streets-v9'
  //           containerStyle={{
  //             height: '100vh',
  //             width: '100vw'
  //           }}>
  //           <Marker
  //             coordinates={[-0.2416815, 51.5285582]}
  //             anchor='bottom'>
  //             <img className='marker' src='assets/marker.png'/>
  //           </Marker>
  //         </Mapbox>
  //       </div>
  //     )
  //   }
  // }
  }
}
export default Map
