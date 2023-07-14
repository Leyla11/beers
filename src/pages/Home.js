import InfoHome  from "../components/InfoBeer"

export const Home = () => {
    let datas = [
        {
            image: "https://img.freepik.com/vector-premium/logotipo-cerveza-plantilla-diseno-logotipo-empresa-bebidas-alcoholicas_605910-332.jpg?w=2000",
            title: "Beers" 
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtpb2LIZa8YvpG-wuK9unzekgq_EsckbA85A&usqp=CAU",
            title: "Liquors" 
        }
    ]
    return (
    <div>
        <h1>Malta´s House</h1>
        <div className="container">
            {datas.map(data=>(
                <InfoHome info={data} key={data.title}/>
            ))}
        </div>
    </div>
  )
}
