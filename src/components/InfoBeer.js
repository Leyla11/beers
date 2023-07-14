import React from 'react'

const InfoBeer = (prop) => {
  return (
    <div className='infobeer'>
      <img src={prop.info.image} alt={prop.info.name} />
      <h3>{prop.info.name}</h3>
      <p>{prop.info.price}</p>
      {prop.info.rating.reviews && <p>{prop.info.rating.reviews}</p>}
    </div>
  )
}

export default InfoBeer