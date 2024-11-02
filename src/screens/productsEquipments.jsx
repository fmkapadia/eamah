import React from "react";
import styled from "styled-components";
import Portfolio from "../assets/img/banner12.png";
import Work from "../components/Elements/gallery";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import FooterSection from "../components/Sections/FooterSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import contactus from "../assets/img/banner/banner4.png";
import banner8 from "../assets/img/banner8.png";
// Styled components
// const BreadcrumbContainer = styled.div`
//   position: absolute;
//   bottom: 30px; /* Adjust this value to control the distance from the bottom */
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center; /* Centers breadcrumb horizontally */
//   nav {
//     background-color: white;
//     padding: 4px 8px 12px 8px;
//     border-radius: 5px;
//   }

//   ul {
//     display: flex; /* Makes breadcrumb items inline */
//     justify-content: center;
//     padding: 0;
//     margin: 0;
//     list-style: none;
//   }

//   li {
//     padding: 5px;
//     font-size: 16px;
//   }

//   li + li::before {
//     content: "/";
//     padding: 0 10px;
//     color: #999;
//   }
// `;
const BreadcrumbContainer = styled.div`
  position: relative;
  bottom: 40px; /* Adjust this value to control the distance from the bottom */
  left: 0;
  right: 0;
  display: flex;
  justify-content: center; /* Centers breadcrumb horizontally */
  nav {
    background-color: white;
    padding: 5px 5px 5px 5px;
    border-radius: 5px;
  }

  ul {
    display: flex; /* Makes breadcrumb items inline */
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  li {
    padding: 5px;
    font-size: 16px;
  }

  li + li::before {
    content: "/";
    padding: 0 10px;
    color: #999;
  }
  @media (max-width: 992px) {
    bottom: 30px;
  }

  @media (max-width: 768px) {
    bottom: 30px;
  }

  @media (max-width: 576px) {
    bottom: 30px;
  }
`;
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
const TextOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  // background: rgba(0, 0, 0, 0.4); // Semi-transparent black overlay
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px;
  z-index: 10;

  h2 {
    font-size: 3rem;
    margin: 0;
    color:#0b093b;
  }

  p {
    font-size: 2rem;
    margin-top: 10px;
    color:#000;
  }
     @media (max-width: 768px) {
    padding: 30px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 480px) {
    padding: 20px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
},
`;
const ProductsEquipments = () => {
  return (
    <React.Fragment>
      <TopNavbar />
      <section
        className=""
        style={{
          backgroundImage: `url(${banner8})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "400px",
          width: "100vw",
          marginTop: "80px",
          position: "relative",
          color: "#ffffff",
        }}
      >
        <TextOverlay>
          <h2>Products</h2>
          {/* <h3 style={{ fontSize: "2rem", color: "#000" }}>
            Global Presence, Local Support
          </h3> */}
          <p>Exceptional solutions for high-volume, high-speed needs</p>
          <div className="row flexCenter"></div>
        </TextOverlay>
        <div className="bg-overlay"></div>
        <Container>
          {/* <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading title-heading">
                <h2 className="text-white title-dark"> Aboutus </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row> */}
          {/* <BreadcrumbContainer className="position-breadcrumb">
            <nav>
              <ul>
                <li className="breadcrumb-item">
                  <Link to="/">Eamah</Link>
                </li>{" "}
                <li className="breadcrumb-item">
                  <>Pages</>
                </li>{" "}
                <li className="breadcrumb-item">Products</li>
              </ul>
            </nav>
          </BreadcrumbContainer> */}
          <BreadcrumbContainer className="position-breadcrumb">
            <nav>
              <ul>
                <li className="breadcrumb-item">
                  <Link to="/">Eamah</Link>
                </li>{" "}
                <li className="breadcrumb-item">
                  <Link>Pages</Link>
                </li>{" "}
                <li className="breadcrumb-item">
                  <Link>Products</Link>
                </li>
              </ul>
            </nav>
          </BreadcrumbContainer>
        </Container>
      </section>

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

export default ProductsEquipments;
