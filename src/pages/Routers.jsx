import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home"
import About from "./About"
import Project from "./Projects"
import Contact from "./Contact";

function Routers(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/projects" element={<Project />}/>
                <Route path="/projects" element={<Project />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
        </Router>
    )
}
export default Routers