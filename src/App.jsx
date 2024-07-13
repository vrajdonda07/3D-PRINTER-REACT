import React from "react";
import Navigationbar from "./Components/Navigationbar";
import Exibition from "./Components/Exibition";
import Home from "./Components/Home";
import Printers from "./Components/Printers";
import Footer from "./Components/Footer";
import LoginPage from "./Components/LoginPage";
import RegistrationPage from "./Components/RegistrationPage";
import Create from "./Components/Create";
import { Routes, Route } from "react-router-dom";
import AllFiles from "./Components/AllFiles";

const App = () => {
  return (
    <>
      {/* <Footer /> */}

      <Routes>
        <Route path="/" element={<AllFiles />}></Route>
        <Route path="/loginPage" element={<LoginPage />}></Route>
        <Route path="/registrationPage" element={<RegistrationPage />}></Route>
      </Routes>
    </>
  );
};

export default App;
