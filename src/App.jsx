import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Otp from "./pages/Otp";


const App = () => {
  return (
   <div>
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/login" element={<Login />} />
     <Route path="/otp" element={<Otp />} />
     </Routes>
   </div>
  )
}
export default App;