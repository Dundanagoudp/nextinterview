import { Route, Routes } from "react-router-dom";
import React from "react";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import PersonalInfo from "./pages/PersonalInfo";
import QuestionPage1 from "./pages/QuestionPage1";
import QuestionPage2 from "./pages/QuestionPage2";
import QuestionPage3 from "./pages/QuestionPage3";
import QuestionPage4 from "./pages/QuestionPage4";
import CompaniesPlan from "./pages/CompaniesPlan";


const App = () => {
  return (
   <div>
     <Routes>
     <Route path="/" element={<SignUp />} />
     <Route path="/login" element={<Login />} />
     <Route path="/otp" element={<Otp />} />
     <Route path="/personalinfo" element={<PersonalInfo />} />
     <Route path="/question1" element={<QuestionPage1 />} />
     <Route path="/question2" element={<QuestionPage2 />} />
     <Route path="/question3" element={<QuestionPage3 />} />
     <Route path="/question4" element={<QuestionPage4 />} />
     <Route path ="/companiesplan" element={<CompaniesPlan />} />
     </Routes>
   </div>
  )
}
export default App;