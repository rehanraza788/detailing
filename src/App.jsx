import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommercialBuildings from "./components/CommercialBuildings";
import MultiStoryBuildings from "./components/multiStoryBuildings";
import EducationalFacilities from "./components/EducationalFacilities";
import IndustrialStructures from "./components/IndustrialStructures";

const App = () => {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/commercial-buildings"
            element={<CommercialBuildings />}
          />
          <Route
            path="/multiStory-buildings"
            element={<MultiStoryBuildings />}
          />
          <Route
            path="/educational-facilities"
            element={<EducationalFacilities />}
          />
          <Route
            path="/industrial-structures"
            element={<IndustrialStructures />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
};

export default App;
