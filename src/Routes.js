import { Routes, Route } from "react-router-dom"
import { Home } from "./pages/Home"
import { Beer } from "./pages/Beer"
import Liquor from "./pages/Liquor"
import Contact from "./pages/Contact"


const RootRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/beer" element={<Beer/>}/>
            <Route path="/liquor" element={<Liquor/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    )
}

export default RootRoutes
