import React from 'react'

const MapForm = ({ handleChange, handleSubmit }) => {
  return (
    <div className="container map-form is-mobile">
      <p className="title is-3">Meet Up...</p>
      <form onSubmit={handleSubmit}>
        <div className="field">
          <div className="control">
            <label  className="label">Your friends Postcode</label>
            <input
              className="input map-input"
              type="text"
              placeholder="eg. SE27 0RS"
              onChange={handleChange}
              name="friend_postcode"/>
          </div>
        </div>
        <br/>
        <div className="field">
          <div className="control">
            <label  className="label">Radius from centerpoint</label>
            <input
              className="input map-input"
              type="text"
              placeholder="eg. 500 (meters)"
              onChange={handleChange}
              name="radius"/>
          </div>
        </div>
        <br/>
        <div className="field">
          <label className="label">What are you feeling?</label>
          <div className="select">
            <select name="type" onChange={handleChange}>
              <option value=""></option>
              <option value="bar">Drinks</option>
              <option value="restaurant">Food</option>
              <option value="cafe">Coffee</option>
            </select>
          </div>
        </div>
        <br/>
        <div className="container has-text-centered">
          <button className="button is-dark">Find Center Point</button>
        </div>
      </form>
    </div>
  )
}

export default MapForm
