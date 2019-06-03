import React from 'react'

const MapForm = ({ handleChange, handleSubmit }) => {
  return (
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
            <select name="type" onChange={handleChange}>
              <option value=""></option>
              <option value="bar">Drinks</option>
              <option value="food">Food</option>
              <option value="cafe">Coffee</option>
            </select>
          </div>
        </div>
        <button className="button is-dark">Submit</button>
      </form>
    </div>
  )
}

export default MapForm
