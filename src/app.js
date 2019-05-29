import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Switch } from 'react-router-dom'

import 'bulma'
import './style.scss'

import Home from './components/Home'

class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <main>
          <Switch>
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
