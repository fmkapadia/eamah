import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import styled from "styled-components";
import CountUp from "react-countup";
// Components
import FullButton from "../components/Buttons/FullButton";
import ClientSlider from "../components/Elements/ClientSlider";
// import NavBar from "./NavBar";

//Import images
import contactus from "../assets/img/contactus.webp";
import header from "../assets/img/header.png";
import { useNavigate } from "react-router-dom";
import { NavItem, NavLink, TabContent, TabPane } from "reactstrap";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    this.setState({ activeTab: tab });
  };
  const tabContent = {
    1: {
      img: contactus,
      title: "Web Developing",
      description:
        "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
    },
    2: {
      img: contactus,
      title: "Database Analysis",
      description:
        "Database analysis helps improve data integrity and efficiency. Dummy text is also known as 'fill text'.",
    },
    3: {
      img: header,
      title: "Server Security",
      description:
        "Server security ensures data protection from external threats. Dummy text is also known as 'fill text'.",
    },
    4: {
      img: header,
      title: "Web Designing",
      description:
        "Web designing enhances the user interface and user experience. Dummy text is also known as 'fill text'.",
    },
  };
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
      <section
        className="section"
        style={{
          padding: "60px 0", // Example inline CSS for padding
          // backgroundColor: "#f8f9fa",
        }}
      >
        <Container>
          <Row
            className="align-items-center"
            id="counter"
            style={{ display: "flex", flexWrap: "wrap" }}
          >
            {/* Image Column */}
            <Col
              md={6}
              style={{
                marginBottom: "20px", // Add space for smaller screens
              }}
            >
              <img
                src={contactus}
                className="img-fluid"
                alt="About Us"
                style={{ width: "100%", height: "auto", borderRadius: "8px" }}
              />
            </Col>

            {/* Content Column */}
            <Col
              md={6}
              className="mt-4 pt-2 mt-sm-0 pt-sm-0"
              style={{
                marginTop: "20px", // Add space between the image and text
                paddingTop: "20px",
              }}
            >
              <div className="ms-lg-4" style={{ marginLeft: "30px" }}>
                <div
                  className="d-flex mb-4"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                  }}
                >
                  {/* Counter with Years Experience */}
                  <span
                    className="text-primary h1 mb-0"
                    style={{
                      color: "#007bff", // Primary color
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    <span className="counter-value display-1 fw-bold">
                      <CountUp start={0} end={15} duration={12} />
                    </span>
                    +
                  </span>
                  <span
                    className="h6 align-self-end ms-2"
                    style={{
                      fontSize: "1.2rem",
                      marginLeft: "10px",
                      alignSelf: "flex-end",
                    }}
                  >
                    Years <br /> Experience
                  </span>
                </div>

                {/* Section Title */}
                <div className="section-title">
                  <h4
                    className="title mb-4"
                    style={{
                      fontSize: "1.75rem",
                      marginBottom: "20px",
                      fontWeight: "600",
                    }}
                  >
                    Who we are?
                  </h4>
                  <p
                    className="text-muted"
                    style={{ color: "#6c757d", fontSize: "1.2rem" }}
                  >
                    Start working with{" "}
                    <span
                      className="text-primary fw-bold"
                      style={{ color: "#007bff", fontWeight: "bold" }}
                    >
                      Landrick
                    </span>{" "}
                    that can provide everything you need to generate awareness,
                    drive traffic, and connect. Dummy text is text that is used
                    in the publishing industry or by web designers to occupy the
                    space which will later be filled with 'real' content.
                  </p>
                  <Link
                    to="/contactUs"
                    className="btn btn-primary mt-3"
                    style={{
                      display: "inline-block",
                      padding: "10px 20px",
                      color: "#fff",
                      backgroundColor: "#007bff",
                      borderRadius: "10px",
                      textDecoration: "none",
                      marginTop: "20px",
                    }}
                  >
                    Contact us
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Partners Section */}
        {/* <Container className="mt-4">
        <Row className="justify-content-center">
          {partners.map((partner, index) => (
            <Col lg={2} md={2} xs={6} className="text-center pt-4" key={index}>
              <img
                src={partner.img}
                className="avatar avatar-ex-sm"
                alt={`Partner ${index + 1}`}
              />
            </Col>
          ))}
        </Row>
      </Container> */}
      </section>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>

      <div style={{ marginTop: "60px", padding: "20px" }}>
        {/* Header Row */}
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h6 style={{ color: "#007bff", fontSize: "40px" }}>Products</h6>
          <h4 style={{ fontSize: "1.75rem", fontWeight: "600" }}>
            What we Offer?
          </h4>
          <p style={{ color: "#6c757d", fontSize: "1.2rem" }}>
            Start working with{" "}
            <span style={{ color: "#007bff", fontWeight: "bold" }}>
              Landrick
            </span>{" "}
            that can provide everything you need to generate awareness, drive
            traffic, and connect.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {/* Tabs Column */}
          <div
            style={{
              width: "30%",
              position: "sticky",
              top: "60px",
              height: "100%",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
                backgroundColor: "#f8f9fa",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              <button
                onClick={() => setActiveTab("1")}
                style={{
                  padding: "10px",
                  backgroundColor: activeTab === "1" ? "#007bff" : "#ffffff",
                  color: activeTab === "1" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Web Developing
              </button>
              <button
                onClick={() => setActiveTab("2")}
                style={{
                  padding: "10px",
                  backgroundColor: activeTab === "2" ? "#007bff" : "#ffffff",
                  color: activeTab === "2" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Database Analysis
              </button>
              <button
                onClick={() => setActiveTab("3")}
                style={{
                  padding: "10px",
                  backgroundColor: activeTab === "3" ? "#007bff" : "#ffffff",
                  color: activeTab === "3" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Server Security
              </button>
              <button
                onClick={() => setActiveTab("4")}
                style={{
                  padding: "10px",
                  backgroundColor: activeTab === "4" ? "#007bff" : "#ffffff",
                  color: activeTab === "4" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Web Designing
              </button>
            </div>
          </div>

          {/* Content Column */}
          <div
            style={{
              width: "65%",
              padding: "20px",
            }}
          >
            <img
              src={tabContent[activeTab].img}
              alt={tabContent[activeTab].title}
              style={{
                width: "100%",
                borderRadius: "10px",
                marginBottom: "20px",
                height: "500px",
              }}
            />
            <h4 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              {tabContent[activeTab].title}
            </h4>
            <p style={{ color: "#6c757d", fontSize: "1rem" }}>
              {tabContent[activeTab].description}
            </p>
            <Link to="/products" style={{ color: "#007bff" }}>
              See More <i className="uil uil-angle-right-b align-middle"></i>
            </Link>
          </div>
        </div>
      </div>

      <section
        style={{
          position: "relative",
          height: "450px", // Adjust the height as needed
          overflow: "hidden",
          justifyContent: "top",
          background: "linear-gradient(to bottom, transparent 50%,#2b56f5 50%)",
        }}
      >
        <div style={{ padding: "0 15px" }}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ textAlign: "center" }}>
              <div
                style={{
                  position: "relative",
                  // zIndex: 1,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    zIndex: 0,
                  }}
                >
                  {/* Image */}
                  <img
                    src={header}
                    alt="Team"
                    style={{
                      width: "100%",
                      height: "450px",
                      borderRadius: "0.5rem",
                      objectFit: "cover",
                      boxShadow: "0 0.5rem 1rem rgba(0, 0, 0, 0.15)",
                    }}
                  />
                </div>

                <div>
                  <div style={{}}>
                    <div style={{}}>
                      <div>
                        <div
                          style={{ marginTop: "1rem", paddingTop: "0.5rem" }}
                        >
                          <div>
                            <p style={{ color: "#000", fontSize: "14px" }}>
                              Start working with Landrick, a team that can
                              provide everything you need to generate awareness,
                              drive traffic, and connect.
                            </p>
                            <Link
                              to="#"
                              style={{
                                color: "#fff",
                                fontWeight: "bold",
                                textDecoration: "none",
                                borderBottom: "2px solid #fff",
                              }}
                            >
                              Read More{" "}
                              <i
                                className="uil uil-angle-right-b align-middle"
                                style={{ marginLeft: "5px" }}
                              ></i>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          position: "relative",
          zIndex: 1,
          width: "100%",
          // maxWidth: "800px",
          color: "#fff",
          padding: "2rem",

          marginTop: "00px", // Adjust to position the text below the image
          backgroundColor: "#2b56f5",
        }}
      >
        <div style={{}}>
          <p style={{ color: "#000", fontSize: "30px", fontWeight: "normal" }}>
            Team
          </p>
          <h4
            style={{
              color: "#fff",
              fontWeight: "normal",
              marginBottom: "1rem",
              fontSize: "20px",
            }}
          >
            Meet Our <br /> Experienced Team
          </h4>
        </div>
        <div style={{ color: "#ccc", marginBottom: "1.5rem" }}>
          <p style={{ color: "#ccc", fontSize: "20px" }}>
            Start working with Landrick, a team that can provide
            <br /> everything you need to generate awareness, drive traffic, and
            connect.
          </p>
          <Link
            to="#"
            style={{
              color: "#000",
              fontWeight: "normal",
              textDecoration: "none",
              borderBottom: "2px solid #fff",
              fontSize: "24px",
            }}
          >
            Contact Us
            <i
              className="uil uil-angle-right-b align-middle"
              style={{ marginLeft: "5px" }}
            ></i>
          </Link>
        </div>
      </div>
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
