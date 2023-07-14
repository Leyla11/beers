import React from 'react'

const InfoLiquor = (prop) => {
  return (
    <div className='infoliquor'>
      <img src={prop.info.image} alt={prop.info.name} />
      <h3>{prop.info.name}</h3>
      <p>{prop.info.price}</p>
      {prop.info.rating.reviews && <p>{prop.info.rating.reviews}</p>}

    </div>
  )
}

export default InfoLiquor