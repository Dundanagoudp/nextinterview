import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import PersonalInfo from "./pages/PersonalInfo";
import QuestionPage1 from "./pages/QuestionPage1";


const App = () => {
  return (
   <div>
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/login" element={<Login />} />
     <Route path="/otp" element={<Otp />} />
     <Route path="/personalinfo" element={<PersonalInfo />} />
     <Route path="/questionpage1" element={<QuestionPage1 />} />
     </Routes>
   </div>
  )
}
export default App;