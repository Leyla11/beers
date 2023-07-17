import InfoHome  from "../components/InfoBeer"

export const Home = () => {
    let datas = [
        {
            imagen: "https://img.freepik.com/vector-premium/logotipo-cerveza-plantilla-diseno-logotipo-empresa-bebidas-alcoholicas_605910-332.jpg?w=2000",
            title: "Beers" 
        },
    ]
    return (
    <div>
        <h1>Malta´s House</h1>
        <div className="homecont">
            {datas.map(data=>(
                <InfoHome info={data} key={data.title}/>
            ))}
        </div>
    </div>
  )
}
