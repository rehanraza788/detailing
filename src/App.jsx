import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider } from "react-router";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Samples from "./components/Samples";
import Contact from "./components/Contact";
import Error from "./components/Error";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <NavBar />
          <Home />
          <Footer />
        </>
      )
    },
    {
      path: "/about",
      element: (
        <>
          <NavBar />
          <AboutUs />
          <Footer />
        </>
      )
    },
    {
      path: "/service",
      element: (
        <>
          <NavBar />
          <Services />
          <Footer />
        </>
      )
    },
    {
      path: "/project",
      element: (
        <>
          <NavBar />
          <Projects />
          <Footer />
        </>
      )
    },
    {
      path: "/samples",
      element: (
        <>
          <NavBar />
          <Samples />
          <Footer />
        </>
      )
    },
    {
      path: "/contacts",
      element: (
        <>
          <NavBar />
          <Contact />
          <Footer />
        </>
      )
    },
    {
      path: "*",
      element: (
        <>
          <NavBar />
          <Error />
          <Footer />
        </>
      )
    }
  ]);

  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};

export default App;
