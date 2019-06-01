import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Navbar from './components/Navbar'

import MeetPoint from './components/MeetPoint'
import VenueIndex from './components/VenueIndex'

class App extends React.Component {

  constructor(){
    super()
    this.state ={
      data: []
    }
  }

  render() {
    return (
      <HashRouter>
        <main>
          <Navbar />
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/meetpoint" component={MeetPoint} />
            <Route path="/venues" component={VenueIndex} />
            <Route path="/" component={Home} />
          </Switch>
        </main>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
