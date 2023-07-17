import { useState, useEffect } from "react"
import axios from "axios"
import InfoBeer from "../components/InfoBeer"

export const Beer = () => {
    const [beers, setBeers] = useState([])
    const traerBeers = async () => {
        try {
            let response = await axios.get("https://api.sampleapis.com/beers/ale")
            let data = response.data
            console.log(response.data.length)
            setBeers(data)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        traerBeers()
    }, [])

    return (
        <div>
        <div className="container">
            {beers.map(beer => (
                <InfoBeer key={beer.title} info={beer} />
            ))}
            </div>
        </div>
    )
}

