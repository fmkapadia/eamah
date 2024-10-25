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
import FooterSection from "../components/Sections/FooterSection";

const Careers = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("inside handle Click");
    navigate("/contactUs"); // Navigate to the AnotherPage
  };
  return (
    <React.Fragment>
      <TopNavbar />
      {/* <NavBar /> */}
      {/* breadcrumb */}
      <section
        className="bg-half-170 bg-primary d-table w-100"
        style={{
          backgroundImage: `url(${contactus})`,
          height: "500px", // Set the desired height
          overflow: "hidden",
        }}
      >
        <Container>
          <Row className="mt-5 justify-content-center">
            <Col lg={12} className="text-center">
              <div
                className="pages-heading"
                style={{
                  position: "absolute", // Absolutely position to overlap the iframe
                  top: "50%", // Align to the center vertically
                  left: "50%", // Align to the center horizontally
                  transform: "translate(-50%, -50%)", // Shift to true center
                  zIndex: 2, // Ensure the content is above the iframe
                  color: "#0b093b", // Text color
                  textAlign: "center", // Center text horizontally
                }}
              >
                <h2 className="font40 extraBold"> Join Our Innovative Team </h2>
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
                <li className="breadcrumb-item">Jobs And Careers</li>
              </ul>
            </nav>
          </BreadcrumbContainer>
          {/* <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      Landrick
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to="/index-job"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      Careers
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ color: "#6c757d" }}
                  >
                    Jobs
                  </li>
                </ul>
              </nav>
            </div> */}
        </Container>
      </section>
      <div
        style={{
          position: "relative", // Absolutely position to overlap the iframe
          top: "50%", // Align to the center vertically
          left: "50%", // Align to the center horizontally
          transform: "translate(-50%, -50%)", // Shift to true center
          zIndex: 2, // Ensure the content is above the iframe
          color: "#0b093b", // Text color
          textAlign: "center",
          marginTop: "5rem",
          paddingTop: "2rem",
          marginBottom: "0", // Center text horizontally
        }}
      >
        {/* <h1>Join Our Innovative Team</h1> */}
        <h4>
          Be a part of a passionate team dedicated to problem-solving and
          creating groundbreaking products.
        </h4>
        <p>Join us in making a positive impact on millions of live </p>
      </div>
      <div>
        <Row
          style={{
            margin: "0",
            padding: "0",
            width: "100vw",
            justifyContent: "center", // Center the Row content
          }}
        >
          <Col className="mt-4 pt-2">
            <div
              className="job-box d-md-flex align-items-center border-0 shadow rounded p-4 position-relative"
              style={{
                backgroundColor: "#EDF6FF", // White background for the card
                padding: "20px", // Padding inside the card
                borderRadius: "10px", // Rounded corners
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Soft shadow for a card-like look
                width: "90vw", // Set width to 90% of viewport
                maxWidth: "800px", // Limit the maximum width for the card
                margin: "20px auto", // Center the card horizontally
                display: "flex", // Flexbox for layout
                alignItems: "center",
                marginTop: "0",
              }}
            >
              <img
                src={contactus}
                className="avatar avatar-md-sm"
                alt=""
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  marginRight: "20px",
                }}
              />

              <div
                className="ms-md-4 mt-4 mt-sm-0"
                style={{
                  flexGrow: 1, // Allow this div to take available space
                  marginLeft: "20px", // Inline style
                  marginTop: "10px", // Inline style for top margin
                }}
              >
                <Link
                  to="/job-detail-three"
                  className="text-dark h5"
                  style={{
                    color: "#333", // Custom color for the link
                    textDecoration: "none", // Remove underline from link
                    fontWeight: "bold",
                  }}
                >
                  Engineering Training
                </Link>

                <ul className="list-unstyled mb-0 mt-2">
                  <li
                    className="d-lg-inline text-muted h6 mb-0 me-lg-2"
                    style={{
                      marginBottom: "10px", // Inline style for list item
                    }}
                  >
                    <i className="uil uil-map-marker text-primary"></i>{" "}
                    <Link
                      to="#"
                      className="text-dark"
                      style={{
                        color: "#555", // Custom color for location link
                      }}
                    >
                      Mumbai
                    </Link>
                    , India
                  </li>{" "}
                  <li
                    className="d-lg-inline text-muted h6 mb-0 me-lg-2"
                    style={{
                      marginBottom: "10px", // Inline style for second list item
                    }}
                  >
                    We invest in Engineering Training for interested individuals
                  </li>{" "}
                </ul>

                {/* <div
                  className="mt-2"
                  style={{
                    marginTop: "20px", // Inline style for top margin
                  }}
                >
                  <span
                    className="badge bg-soft-primary me-1"
                    style={{
                      backgroundColor: "#e0f7fa", // Custom badge background color
                      padding: "10px", // Inline style for padding
                      borderRadius: "5px",
                    }}
                  >
                    Fulltime
                  </span>
                  <span
                    className="badge bg-soft-warning"
                    style={{
                      backgroundColor: "#fff8e1", // Custom badge background color
                      padding: "10px", // Inline style for padding
                      borderRadius: "5px",
                      marginLeft: "10px",
                    }}
                  >
                    Office
                  </span>
                </div> */}
              </div>

              <div style={{ marginLeft: "auto" }}>
                {" "}
                {/* Pushes the button to the end */}
                <Link
                  to="/contactUs"
                  className="btn btn-icon btn-pills btn-soft-primary"
                  style={{
                    backgroundColor: "#007bff", // Button background color (change as needed)
                    color: "#fff", // Button text color
                    padding: "10px 20px", // Button padding
                    borderRadius: "20px", // Rounded edges
                    textDecoration: "none", // Remove underline
                  }}
                >
                  Apply Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <FooterSection />
    </React.Fragment>
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
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
export default Careers;
