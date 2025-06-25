import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import { ReactLenis, useLenis } from 'lenis/react'
import LandingPage from "./Pages/LandingPage";
import Login from './Pages/Login'
import Home from "./Pages/Home";
import Signup from "./Pages/Signup";
import Post from "./Pages/PostPage";
import UserPage from "./Pages/userPage";

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
          <Route path="/Signup" element = { <Signup/> } />
          <Route path="/Post/:postId" element={<Post />} />
          <Route path="/User/:userId" element = {<UserPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
//Add note from https://motion-primitives.com/
//Get started for free https://www.figma.com/
// uber for reference
export default App;