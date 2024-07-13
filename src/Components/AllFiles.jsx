import React from "react";
import Navigationbar from "./Navigationbar";
import Home from "./Home";
import Printers from "./Printers";
import Exibition from "./Exibition";
import { Link } from "react-router-dom";

const AllFiles = () => {
  return (
    <>
      <Navigationbar />
      <Home />
      <Printers />
      <Exibition />
    </>
  );
};

export default AllFiles;
