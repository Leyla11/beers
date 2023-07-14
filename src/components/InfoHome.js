import React from 'react'

const InfoHome = (prop) => {
  return (
    <div className='home'>
        <h1>{prop.info.title}</h1>
        <img src={prop.info.image} alt={prop.info.title}/>
    </div>
  )
}

export default InfoHome