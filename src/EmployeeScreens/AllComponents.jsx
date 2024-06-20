import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "../LandingPage/Screens/UHeader/Main";



function AllComponents() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AllComponents;
