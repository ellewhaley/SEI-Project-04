import React from 'react'

const VenueCard = ({name, icon}) => {
  return (
    <div className="card venue-card">
      <div className="card-header">
        <h3 className="card-header-title">{name}</h3>
      </div>
      <div className="card-image">
        <figure className="image is-64x64">
          <img src={icon} alt={name} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
        </div>
      </div>
    </div>
  )
}

export default VenueCard
