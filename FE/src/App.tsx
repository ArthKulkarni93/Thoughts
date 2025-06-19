import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import LandingPage from "./Pages/LandingPage";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <LandingPage/> } />
          <Route path="/Home" element= { <Home/> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//Add note from https://motion-primitives.com/
//Get started for free https://www.figma.com/
// uber for reference
export default App;