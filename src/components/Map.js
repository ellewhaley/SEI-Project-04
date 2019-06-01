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

    this.currrentLocation = new mapboxgl.Popup({closeOnClick: false, offset: 20})
      .setLngLat(this.props.currentLocation)
      .setHTML('<h1>You are here!</h1>')
      .addTo(this.map)

    this.locationOne = new mapboxgl.GeolocateControl({
      positionOptions: {
        enableHighAccuracy: true
      },
      trackUserLocation: true
    })

  }

  componentDidUpdate() {
    if(!this.props.userLocation) return false

    this.userLocation = new mapboxgl.Marker()
      .setLngLat(this.props.userLocation)
      .addTo(this.map)

    this.userLocation = new mapboxgl.Popup({closeOnClick: false})
      .setLngLat(this.props.userLocation)
      .setHTML('<h1>You friend is here!</h1>')
      .addTo(this.map)

    this.bounds = new mapboxgl.LngLatBounds()
    this.bounds.extend(this.props.currentLocation)
    this.bounds.extend(this.props.userLocation)

    this.centerPointMarker = new mapboxgl.Marker()
      .setLngLat(this.bounds.getCenter())
      .addTo(this.map)

    if(!this.props.venues) this.props.getVenues(this.bounds.getCenter())


    // this.map.setCenter(this.bounds.getCenter())
    this.map.flyTo({
      center: this.bounds.getCenter(),
      zoom: 11
    })
  }

  render() {
    return (
      <div className="mapbox-map" ref={el => this.mapCanvas = el}/>
    )
  }
}
export default Map
