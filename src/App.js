import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Partials/Header";
import NavBar from "./components/Partials/NavBar";
import Home from "./components/Home";
import Mission from "./components/Mission";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import APOD from "./components/APOD";

function App() {
    return (
        <div className="container">
            <div className="row">
                <Header />
                <NavBar />
            </div>
            <div className="row">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mission" element={<Mission />} />
                    <Route path="/gallery" element={<Gallery />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/apod" element={<APOD />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
