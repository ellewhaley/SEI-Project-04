import React from 'react'
import Auth from '../lib/Auth'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <section className="hero is-mobile has-text-centered homepage is-fullheight">
      <div className="hero-body">
        <div className="container title-container">
          <h1 className="title is-1 has-text-light">
            inbetweenUs
          </h1>
          <h2 className="subtitle is-3 has-text-light">
            The smarter way meet friends
          </h2>
          {Auth.isAuthenticated() && <Link to="/meetpoint" className="button is-danger start-button">Start Planning</Link>}
        </div>
      </div>
    </section>
  )
}

export default Home
