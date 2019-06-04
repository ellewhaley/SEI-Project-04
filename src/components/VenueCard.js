import React from 'react'


const VenueCard = ({name, icon, vicinity, rating, price_level}) => {
  return (
    <div className="card venue-card has-text-centered">
      <div className="card-header">
        <h3 className="card-header-title is-6">{name}</h3>
      </div>
      <div className="card-content">
        <figure className="image is-48x48">
          <img src={icon} alt={name} />
        </figure>
        <div className="card-text">
          <p className="rating"><strong>Rating: </strong>{rating}</p>
          <p className="price"><strong>Price: </strong>{price_level}</p>
        </div>
      </div>
      <div className="card-text">
        <p className="address"><strong>Address:</strong> {vicinity}</p>
      </div>
    </div>
  )
}

export default VenueCard
