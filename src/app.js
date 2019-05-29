import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'
import Register from './components/Register'
import Login from './components/Login'
import Map from './components/Map'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/map" component={Map} />
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
