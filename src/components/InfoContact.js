const InfoContact = (prop) => {
  return (
    <div className='infocontact'>
      <h2>{prop.info.title}</h2>
      <img src={prop.info.image} alt={prop.info.title} />
      <p>{prop.info.nickname}</p>
    </div>
  )
}

export default InfoContact