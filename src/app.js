import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'
import 'mapbox-gl/dist/mapbox-gl.css'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'

import Search from './components/Search'
import MeetPoint from './components/MeetPoint'


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/search" component={Search} />
            <Route path="/meetpoint" component={MeetPoint} />
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
