import React from 'react'
// import Auth from '../lib/Auth'
// import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'

mapboxgl.accessToken = process.env.MAP_BOX_TOKEN

class Map extends React.Component {
  constructor(props){
    super(props)
    this.markers = []
  }

  componentDidMount() {
    this.map = new mapboxgl.Map({
      container: this.mapCanvas,
      style: 'mapbox://styles/mapbox/streets-v9',
      zoom: 10,
      center: [-0.07, 51.515]
    })

    this.currentLocationMarker = new mapboxgl.Marker()
      .setLngLat(this.props.currentLocation)
      .addTo(this.map)

    this.currrentLocationPopup = new mapboxgl.Popup({closeOnClick: false, offset: 30})
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

  componentDidUpdate(prevProps) {
    if(prevProps.venues && !this.props.venues) {
      // venues have been reset...
      this.centerPointMarker.remove()
      this.userLocationMarker.remove()
      this.userPopup.remove()
      this.markers.forEach(marker => marker.remove())

      this.map.flyTo({
        center: [-0.07, 51.515],
        zoom: 10
      })
      return false
    }
    if(!this.props.userLocation) return false

    if(this.userLocationMarker) this.userLocationMarker.remove()
    this.userLocationMarker = new mapboxgl.Marker()
      .setLngLat(this.props.userLocation)
      .addTo(this.map)

    if(this.userPopup) this.userPopup.remove()
    this.userPopup = new mapboxgl.Popup({closeOnClick: false, offset: 30})
      .setLngLat(this.props.userLocation)
      .setHTML('<h1>You friend is here!</h1>')
      .addTo(this.map)

    this.bounds = new mapboxgl.LngLatBounds()
    this.bounds.extend(this.props.currentLocation)
    this.bounds.extend(this.props.userLocation)

    const middleMarker = document.createElement('div')
    middleMarker.className = 'middle-marker'
    middleMarker.innerText = '📍'
    if(this.centerPointMarker) this.centerPointMarker.remove()
    this.centerPointMarker = new mapboxgl.Marker(middleMarker)
      .setLngLat(this.bounds.getCenter())
      .addTo(this.map)

    if(!this.props.venues) this.props.getVenues(this.bounds.getCenter())

    if (this.props.venues) {
      // removes the markers from the map
      this.markers.forEach(marker => marker.remove())

      // add new markers based on the API request
      this.markers = this.props.venues.map(venue => {
        const popUp = new mapboxgl.Popup({offset: 20})
          .setText(`${venue.name}`)
        return new mapboxgl.Marker({interactive: true})
          .setLngLat(venue.geometry.location)
          .setPopup(popUp)
          .addTo(this.map)
      })
    }

    this.map.flyTo({
      center: this.bounds.getCenter(),
      zoom: 14
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="mapbox-map" ref={el => this.mapCanvas = el}/>
    )
  }
}
export default Map
