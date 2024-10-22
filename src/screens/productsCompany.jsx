import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/bg-portfolio.jpg";
import Work from "../components/Elements/gallery";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import FooterSection from "../components/Sections/FooterSection";
// Styled components
const SectionWrapper = styled.section`
  position: relative;
  display: table;
  width: 100%;
  height: 260px;
  background: url(${Portfolio}) center center no-repeat;
  background-size: cover;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(
    255,
    255,
    255,
    0.2
  ); /* You can tweak the opacity here */
`;

const TitleHeading = styled.div`
  text-align: center;
  margin-top: 5rem;
  padding-top: 4rem;
`;

const Title = styled.h1`
  font-size: 3.75rem; /* Adjust size for display-1 equivalent */
  font-weight: 800 !important;
  margin-bottom: 3rem;
  color: #0b093b; /* Change as needed */
`;

const Description = styled.p`
  font-size: 1.25rem; /* Equivalent to h6 in Bootstrap */
  margin: 0 auto;
  max-width: 600px; /* To control the width of the description */
  color: #0b093b;
  font-family: "Khula", sans-serif;
`;

const SvgWrapper = styled.div`
  position: relative;
  overflow: hidden;
  color: #fff; /* Adjust the text color as per your design */
`;

const Shape = styled.svg`
  display: block;
  width: 100%;
`;

const ProductsCompany = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <SectionWrapper>
        <Overlay />
        <TitleHeading>
          <Title>Our Products</Title>
          <Description>
            We consistently strive to be the best, and this is reflected in our
            products.
          </Description>
        </TitleHeading>
      </SectionWrapper>

      <SvgWrapper>
        <Shape
          viewBox="0 0 2880 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
            fill="currentColor"
          />
        </Shape>
      </SvgWrapper>
      <Work />
      <FooterSection />
    </React.Fragment>
  );
};

export default ProductsCompany;
