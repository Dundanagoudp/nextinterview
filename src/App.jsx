import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";


const App = () => {
  return (
   <div>
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/login" element={<Login />} />
     </Routes>
   </div>
  )
}

export default App;