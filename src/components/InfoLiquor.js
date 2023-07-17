import React from 'react'

const InfoLiquor = (prop) => {
  return (
    <div className='infoliquors'>
      <img src={prop.info.image} alt={prop.info.name} />
      <h3>{prop.info.name}</h3>
      <p>Price: {prop.info.price}</p>
      <p>Views: {prop.info.rating && <p>{prop.info.rating.reviews}</p>}</p>

    </div>
  )
}

export default InfoLiquor