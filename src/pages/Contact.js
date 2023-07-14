import InfoContact from "../components/InfoContact"

const Contact = () => {
    
    let datas = [
        {
            title: "Instagram",
            image: "https://i.pinimg.com/564x/a2/4c/cc/a24ccc83bec854a87cc133fd52eb9161.jpg",
            nickname: "MaltasHouse"
        },
        {
            title: "Facebook",
            image: "https://thumbs.dreamstime.com/b/s%C3%ADmbolo-del-icono-logotipo-de-facebook-en-fondo-negro-la-ilustraci%C3%B3n-vector-173831891.jpg",
            nickname: "Malta´sHouse"
        },
    ]


  return (
    <div>
        <h2>Follow in</h2>
        <div className='container'>
            {datas.map(data =>(
                <InfoContact key={data.title} info={data}/>
            ))}
        </div>
    </div>
  )
}

export default Contact