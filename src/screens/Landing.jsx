import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import FAQSection from "../components/Sections/FAQSection";
import ImageTextComponent from "../components/Elements/ImageTextComponent";
import header from "../assets/img/header.png";
import FooterSection from "../components/Sections/FooterSection";
export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Services />
      <Projects />

      {/* <Blog /> */}
      {/* <Pricing /> */}
      <Contact />

      <ImageTextComponent
        image={header}
        text="USA company description."
        heading=""
        subHeading=""
        isImageRight="true"
        bgStyle="dark"
      />
      <FAQSection />
      <FooterSection />
    </>
  );
}
