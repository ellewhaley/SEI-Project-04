import React from 'react'

const MapForm = ({ handleChange, handleSubmit }) => {
  return (
    <section className="section">
      <div className="container map-form">
        <p className="title is-2">Meet Up</p>
        <br/>
        <p className="subtitle is-5">Enter your friends postcode and decide where you want to meet.</p>
        <form onSubmit={handleSubmit}>
          <div className="field">
            <label className="label">Your Location</label>
            <div className="select map-input">
              <select name="venue">
                <option value="">Use Current Location</option>
              </select>
            </div>
          </div>
          <div className="field">
            <div className="control">
              <label  className="label">Your friends Location</label>
              <input
                className="input map-input"
                type="text"
                placeholder="Enter your friends Postcode"
                onChange={handleChange}
                name="friend_postcode"/>
            </div>
          </div>
          <div className="field map-input">
            <label className="label">What are you feeling?</label>
            <div className="select">
              <select name="venue">
                <option value="">Select</option>
                <option value="bar">Bar</option>
                <option value="pub">Pub</option>
                <option value="restaurant">Restaurant</option>
                <option value="cafe">Cafe</option>
                <option value="night_club">Night Club</option>
              </select>
            </div>
          </div>
          <button className="button is-dark">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default MapForm
