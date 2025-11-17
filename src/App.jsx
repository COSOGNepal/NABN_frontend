import Home from "./pages/Home.jsx"
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from "./pages/AboutUs.jsx"
import Events from "./pages/Events.jsx"
import Team from "./pages/Team.jsx"
import Contact from "./pages/Contact.jsx"
import Donate from "./pages/Donate.jsx"
import './index.css'
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "National Adolescence Girls' Network Nepal";
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<AboutUs />} /> 
          <Route path="/events" element={<Events />} />
          <Route path="/team" element={<Team />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/donate" element={<Donate />} /> 
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
