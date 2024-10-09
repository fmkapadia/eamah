import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import contactus from "../assets/img/contactus.webp";
import ServiceBox from "../components/Elements/ServiceBox";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
const ContactUs = () => {
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div>
          <TopNavbar />
          {/* <HeaderInfo> */}
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
                    <h2 style={{ fontSize: "3.75rem", color: "#0397DD" }}>
                      {" "}
                      Contact Us{" "}
                    </h2>
                  </div>
                </Col>
              </Row>
              <BreadcrumbContainer
                className="position-breadcrumb"
                style={{ color: "#000", fontWeight: "bold" }}
              >
                <nav>
                  <ul>
                    <li className="breadcrumb-item">
                      <Link to="/">Eamah</Link>
                    </li>{" "}
                    <li className="breadcrumb-item">
                      <>Pages</>
                    </li>{" "}
                    <li className="breadcrumb-item">Contact Us</li>
                  </ul>
                </nav>
              </BreadcrumbContainer>
            </Container>
          </section>
          <div
            style={{
              position: "relative", // Absolutely position to overlap the iframe
              top: "50%", // Align to the center vertically
              left: "50%", // Align to the center horizontally
              transform: "translate(-50%, -50%)", // Shift to true center
              zIndex: 2, // Ensure the content is above the iframe
              color: "#0397DD", // Text color
              textAlign: "center",
              marginTop: "5rem",
              paddingTop: "2rem",
              marginBottom: "0", // Center text horizontally
            }}
          >
            {/* <h1>Contact Us</h1> */}
            <p style={{ fontSize: "1.8rem", color: "#0b093b" }}>
              Connect with us regarding job or need assistance with your
              products Get In Touch with us
            </p>
          </div>
          {/* </HeaderInfo> */}

          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper>
              <div style={{ textAlign: "center", padding: "20px" }}>
                {/* SVG Icon */}
                <div style={{ marginBottom: "15px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48" // Customize size
                    height="48"
                    fill="currentColor" // Use color based on your theme
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.45-.48-4.5-2.53-4.98-4.98H5v-2h3.02C8.5 9.6 10.55 7.55 13 7.07V5h2v2.07c2.45.48 4.5 2.53 4.98 4.98H19v2h-3.02c-.48 2.45-2.53 4.5-4.98 4.93v2.93h-2V19.93zm0-15.93c-2.76 0-5 2.24-5 5h-2c0-3.87 3.13-7 7-7V2h2v2.07c2.76.48 5 2.53 5 5h-2c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginTop: "15px",
                    color: "#0397DD",
                  }}
                >
                  Phone
                </h3>

                {/* Subtitle/Content */}
                <p style={{ marginTop: "10px" }}>
                  Connect with us and get your queries solved
                </p>
                <span
                  style={{
                    marginTop: "10px",
                    color: "#000",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                  }}
                >
                  1234567890
                </span>
              </div>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <div style={{ textAlign: "center", padding: "20px" }}>
                {/* SVG Icon */}
                <div style={{ marginBottom: "15px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48" // Customize size
                    height="48"
                    fill="currentColor" // Use color based on your theme
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.45-.48-4.5-2.53-4.98-4.98H5v-2h3.02C8.5 9.6 10.55 7.55 13 7.07V5h2v2.07c2.45.48 4.5 2.53 4.98 4.98H19v2h-3.02c-.48 2.45-2.53 4.5-4.98 4.93v2.93h-2V19.93zm0-15.93c-2.76 0-5 2.24-5 5h-2c0-3.87 3.13-7 7-7V2h2v2.07c2.76.48 5 2.53 5 5h-2c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginTop: "15px",
                    color: "#0397DD",
                  }}
                >
                  Email
                </h3>

                {/* Subtitle/Content */}
                <p style={{ marginTop: "10px" }}>
                  Send Your CV/RESUME on{" "}
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    careers@eamah.com{" "}
                  </span>
                  and Product Enquiry on{" "}
                  <span
                    style={{
                      color: "#000",
                      fontWeight: "bold",
                      fontSize: "1rem",
                    }}
                  >
                    enquiries@eamah.com
                  </span>
                </p>
              </div>
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <div style={{ textAlign: "center", padding: "20px" }}>
                {/* SVG Icon */}
                <div style={{ marginBottom: "15px" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="48" // Customize size
                    height="48"
                    fill="currentColor" // Use color based on your theme
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-2.45-.48-4.5-2.53-4.98-4.98H5v-2h3.02C8.5 9.6 10.55 7.55 13 7.07V5h2v2.07c2.45.48 4.5 2.53 4.98 4.98H19v2h-3.02c-.48 2.45-2.53 4.5-4.98 4.93v2.93h-2V19.93zm0-15.93c-2.76 0-5 2.24-5 5h-2c0-3.87 3.13-7 7-7V2h2v2.07c2.76.48 5 2.53 5 5h-2c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>

                {/* Title */}
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginTop: "15px",
                    color: "#0397DD",
                  }}
                >
                  Location
                </h3>

                {/* Subtitle/Content */}
                <p style={{ marginTop: "10px" }}>
                  Visit us and meet our amazing team and built with us
                </p>
              </div>
            </ServiceBoxWrapper>
          </ServiceBoxRow>

          <div className="row" style={{ paddingBottom: "30px" }}></div>
          <section
            className="bg-half-170 bg-light d-flex align-items-center justify-content-center position-relative w-100"
            style={{
              height: "470px", // Set the desired height
              overflow: "hidden", // Hide any overflow from iframe
            }}
          >
            {/* Iframe as Background */}
            <iframe
              title="test"
              src="//www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
              style={{
                position: "relative",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%", // Full height of section
                zIndex: 1, // Ensure the iframe is behind the content
                border: 0,
              }}
              allowFullScreen=""
              className="rounded"
            ></iframe>
          </section>

          <Footer />
        </div>
      </div>
    </Wrapper>
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
const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 100px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
const ServiceBoxRow = styled.div`
  display: flex;
  justify-content: center; /* Center the boxes horizontally */
  align-items: center; /* Vertically center content */
  gap: 20px; /* Space between boxes */
  flex-wrap: wrap; /* Allow wrapping on smaller screens */

  @media (max-width: 860px) {
    flex-direction: column; /* Stack the boxes on small screens */
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%; /* Set a fixed width for larger screens */
  margin-right: 5%; /* Add space between boxes */
  // padding: 80px 0; /* Vertical padding */

  @media (max-width: 860px) {
    width: 100%; /* Full width on small screens */
    margin-right: 0; /* Remove margin on smaller screens */
    text-align: center; /* Center the content */
    padding: 40px 0; /* Reduce padding on smaller screens */
  }
`;
export default ContactUs;
