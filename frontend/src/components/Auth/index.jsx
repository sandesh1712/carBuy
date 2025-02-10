import { Route, Routes } from "react-router-dom";
import Login from "../login";
import Signup from "../signup";


import "./auth.scss"

export default function Auth() {
  
  return <>
  <section id="auth-container" className="container-lg">
   <Routes>
     <Route path="/" element={<Login/>} />
     <Route path="login" element={<Login/>} />
     <Route path="signup" element={<Signup />} />
   </Routes>
  </section>
  </>
} 