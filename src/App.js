import React from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Screens
import Landing from "./screens/Landing.jsx";
import ContactUs from "./screens/contactUs.jsx";
import Careers from "./screens/careers.jsx";
import AboutUs from "./screens/aboutUs.jsx";
export default function App() {
  return (
    <>
      {/* <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet> */}
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} /> {/* Landing page */}
          <Route path="/contactUs" element={<ContactUs />} /> {/* New page */}
          <Route path="/careers" element={<Careers />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          {/* Route for Careers */}
        </Routes>
      </Router>
      {/* <Landing /> */}
    </>
  );
}
