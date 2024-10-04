import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";
// Components
import FullButton from "../components/Buttons/FullButton";
// import NavBar from "./NavBar";

//Import images
import contactus from "../assets/img/contactus.webp";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <TopNavbar />
      <section
        className="bg-half-170 d-table w-100"
        style={{
          background: `url(${contactus})`,
          height: "500px",
          overflow: "hidden",
        }}
      >
        <div className="bg-overlay"></div>
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div className="pages-heading title-heading">
                <h2 className="text-white title-dark"> Aboutus </h2>
                <p className="text-white-50 para-desc mb-0 mx-auto">
                  Start working with Landrick that can provide everything you
                  need to generate awareness, drive traffic, connect.
                </p>
              </div>
            </Col>
          </Row>
          <BreadcrumbContainer className="position-breadcrumb">
            <nav>
              <ul>
                <li className="breadcrumb-item">
                  <Link to="/">Eamah</Link>
                </li>{" "}
                <li className="breadcrumb-item">
                  <>Pages</>
                </li>{" "}
                <li className="breadcrumb-item">About Us</li>
              </ul>
            </nav>
          </BreadcrumbContainer>
        </Container>
      </section>
      <Footer />
    </>
  );
};
const BreadcrumbContainer = styled.div`
  position: absolute;
  bottom: 110px; /* Adjust this value to control the distance from the bottom */
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
`;
export default AboutUs;
