import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import contactus from "../assets/img/banner/banner3.png";
import ServiceBox from "../components/Elements/ServiceBox";
import TopNavbar from "../components/Nav/TopNavbar";
import Footer from "../components/Sections/Footer";
import { Container, Row, Col } from "reactstrap";
import { useNavigate } from "react-router-dom";
import Blog from "../components/Elements/allBlogs";
import FooterSection from "../components/Sections/FooterSection";
import banner12 from "../assets/img/banner/blogs.png";
const Blogs = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div style={{ backgroundColor: "#fff" }}>
          <TopNavbar />
          {/* <HeaderInfo> */}
          <section
            className=""
            style={{
              backgroundImage: `url(${banner12})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: "600px",
              width: "100vw",
              marginTop: "80px",
              position: "relative",
              color: "#ffffff",
            }}
          >
            <TextOverlay>
              <h2>Blogs</h2>
              {/* <h3 style={{ fontSize: "2rem", color: "#000" }}>
            Global Presence, Local Support
          </h3> */}
              <p>
                Precision in Every Tablet/Capsule:
                <br /> Compression &amp; Encapsulation engineering perfected.
              </p>
              <div className="row flexCenter"></div>
            </TextOverlay>
            <div className="bg-overlay"></div>
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
                      backgroundColor: "#fff",
                      border: "1px solid black",
                    }}
                  >
                    {/* <h2 className="font40 extraBold"> Contact Us </h2> */}
                  </div>
                </Col>
              </Row>
            
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
              marginTop: "10rem",
              paddingTop: "2rem",
              marginBottom: "0", // Center text horizontally
            }}
          >
            <h1>Blog-Listing</h1>
            <p
              style={{
                color: "#6c757d",
                fontSize: "1.2rem",
              }}
            >
              I was interested in understanding what factors influence a
              neuro-interventionalists (NI) decision to pick a particular Flow
              Diverter (FD) for treating a given aneurysm.
              <br /> Here are some of the factors that stood out, hope it helps:
            </p>
          </div>
        </div>
      </div>
      <Blog />
      <FooterSection />
    </Wrapper>
  );
};
export default Blogs;
const Wrapper = styled.section`
  width: 100%;
`;
// const BreadcrumbContainer = styled.div`
//   position: absolute;
//   bottom: 30px; /* Adjust this value to control the distance from the bottom */
//   left: 0;
//   right: 0;
//   display: flex;
//   justify-content: center; /* Centers breadcrumb horizontally */
//   nav {
//     background-color: white;
//     padding: 5px 5px 5px 5px;
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
    color:#fff;
  }

  p {
    font-size: 2rem;
    margin-top: 10px;
    color:#f2f2f2;
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
      font-size:2rem;
    }

    p {
      font-size: 1.5rem;
    }
},
`;
const BreadcrumbContainer = styled.div`
  position: relative;
  bottom: 30px; /* Adjust this value to control the distance from the bottom */
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
