import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { ReactLenis, useLenis } from 'lenis/react'
import LandingPage from "./Pages/LandingPage";
import Login from './Pages/Login'
import Home from "./Pages/Home";

function App() {
  const lenis = useLenis((lenis) => {
    // for smooth scroll
    // console.log(lenis)
  })
  return (
    <div className="">
      <ReactLenis root />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route path="/Home" element= { <Home/> } />
          <Route path="/Login" element = { <Login/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//Add note from https://motion-primitives.com/
//Get started for free https://www.figma.com/
// uber for reference
export default App;