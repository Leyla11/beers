import { useEffect, useState } from "react"
import axios from "axios"
import InfoLiquor from "../components/InfoLiquor"

const Liquor = () => {
    const [liquors, setLiquors] = useState ([])
    const traerLiquors = async () => {
        try {
            let response = await axios.get("https://api.sampleapis.com/beers/stouts")
            let data = response.data
            setLiquors(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        traerLiquors()
    },[])

  return (
    <div>
    <div className="container">
    {liquors.map(liquor => (
        <InfoLiquor key={liquor.title} info={liquor}/>
    ))}
    </div>

    </div>
  )
}


export default Liquor