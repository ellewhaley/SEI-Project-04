import React from 'react'

const Loading = () => {

  return (
    <section className="hero is-fullheight">
      <div className="hero-body has-text-centered is-vcentered">
        <div className="container">
          <figure>
            <img src="https://cdn.dribbble.com/users/267/screenshots/1927432/loading.gif" alt="loading" className="loading" />
          </figure>
          <p className="loading-message">Please wait while we find your locations...</p>
        </div>
      </div>
    </section>
  )
}

export default Loading
