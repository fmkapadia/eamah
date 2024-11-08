import React, { Component, useEffect, useState } from "react";
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
import contactus from "../assets/img/banner/banner2.png";
import contactus1 from "../assets/img/add/aboutusexp1.png"

import p1 from "../assets/img/products/Compression/p1.png";
import p2 from "../assets/img/products/Compression/p2.png";
import mustansir from "../assets/img/founder/mustansir.jpg";
import abizer from "../assets/img/founder/abizer.jpg";
import husain from "../assets/img/founder/husain.jpg";
import rehana from "../assets/img/founder/rehana.jpg";
import aboutUs from "../assets/img/banner/aboutusbanner4.png";
import header from "../assets/img/header.png";
import { useNavigate } from "react-router-dom";
import { NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import ImageTextComponent from "../components/Elements/ImageTextComponent";
import FooterSection from "../components/Sections/FooterSection";


const AboutUs = () => {
  const [activeTab, setActiveTab] = useState("1");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const toggle = (tab) => {
    this.setState({ activeTab: tab });
  };
  const tabContent = {
    1: {
      img: p1,
      title: "Cadmach 8mm-D tooling",
      description:
        "This is required when, for example, the final text is not yet available. Dummy text is also known as 'fill text'.",
    },
    2: {
      img: p2,
      title: "Cadmach 12mm-D-BI layer",
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
        className=""
        style={{
          backgroundImage: `url(${aboutUs})`,
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
          <h2>About Us</h2>
          {/* <h3 style={{ fontSize: "2rem", color: "#000" }}>
            Global Presence, Local Support
          </h3> */}
          <p>Serving pharma leaders across three continents.</p>
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
                src={contactus1}
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
                      <CountUp start={0} end={25} duration={12} />
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
                    Who are we?
                  </h4>
                  <p
                    className="text-muted"
                    style={{ color: "#6c757d", fontSize: "1.2rem" }}
                  >
                    Driven by a deep commitment to healthcare and
                    pharmaceuticals, we've offered a comprehensive range of
                    services for years, impacting countless lives. Our
                    commitment extends beyond cutting-edge technology; it's
                    about the people
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
      <ImageTextComponent
        image={mustansir}
        ftext="With a vision for excellence in pharmaceutical machine manufacturing, Mustansir Sodawalla founded Eamah Entrepreneur in 2011. Under his leadership, Eamah has become a reliable name in the pharmaceutical sector, delivering precise, cost-effective, and time-efficient solutions to leading pharma and nutraceutical companies across the globe. 

"
        sText=" Prior to founding Eamah, he served in a leadership role at ACG World, where he spearheaded key projects with Theegarten-Pactec GmbH & Co. KG and Volpack, gaining invaluable insights into the intricacies of
         industrial machinery. His tenure at Pet Tools further honed his skills in brand 
         building and sales, setting the stage for his entrepreneurial venture." 
         ltext = "A trained Mechanical Engineer from Mumbai, Mustansir has continually sought to enhance his expertise in areas like Effective Personal Productivity, SAP System, and 5S Kaizen. This blend of technical knowledge and managerial acumen has enabled him to lead Eamah Entrepreneur with a focus on product innovation, service excellence, and global market expansion. His leadership style is rooted in integrity, dedication, and a customer-first mindset, reflecting the values that have driven Eamah Entrepreneur to its current success. "
        heading="Mustansir Sodawalla "
        subHeading="Founder & Director, Eamah Entrepreneur "
        isImageRight={false}
        bgStyle="dark"
      />
      <ImageTextComponent
        image={rehana}
        ftext=" Rehana brings a strategic vision and a people-first approach to her role as Co-Founder at Eamah. Leading the Recruiting and Administration functions, she has been instrumental in building the Sales and Logistics teams that drive Eamah’s global operations. Known for her recruiting,Rehana continues to identify top talent ensuring Eamah is driven by a workforce as passionate about business growth as she is. "
        sText="With a background in law, Rehana’s expertise extends beyond talent management. Her acumen has been critical in steering the company’s tactical decision-making process; leading client development in North America and the Middle East. Her emphasis on building strong relationships has expanded Eamah’s presence in new markets and has been vital in shaping the company into an agile and client-centered company it is today. "
        ltext=""
        heading="Rehana Sodawalla "
        subHeading="Co-Director, Eamah Entrepreneur  "
        isImageRight={true}
        bgStyle="light"
      />

      <ImageTextComponent
        image={husain}
        ftext=" Dr. Husain is a bioengineer working on advancing medical device development by building neurovascular devices. His research on aneurysm modeling has shown potential to significantly impact neurovascular treatments enabling effective long-term testing and clinical adoption of life-saving devices."
        sText ="At Eamah, Husain leads delivery of pharmaceutical accessories and precision equipment to global markets, building cGMP-compliant practices and providing essential logistical support. His ability to identify production challenges and implement solutions during market shifts, including the global pandemic, has been critical to Eamah's success. "
        lText="He also leads product development efforts to bring medical devices from concept to clinical use. He is skilled in navigating the complex regulatory landscape, including ISO 13485 and 10993 standards, and 21 CFR 820 medical device regulations. Husain’s expertise in ISO standards and dedication to improving clinical outcomes position him as a driving force in both pharmaceutical and medical device manufacturing. "
        heading="Dr. Husain Sodawalla  "
        subHeading="Device development manager, Eamah Entrepreneur   "
        isImageRight={false}
        bgStyle="dark"
      />
      <ImageTextComponent
        image={abizer}
        ftext=" Abizer is a Chemical engineer with a passion for operational efficiency. At Eamah, he has been instrumental in improving production workflow while maintaining the highest standards of quality. His team focuses on improving operational efficiency by reducing lead times and maximizing client satisfaction. 
"
        sText="Having worked in small molecule formulation development, he has experience in diagnosing and troubleshooting granulation, compression and encapsulation machine issues to resolve critical production bottlenecks.  

Abizer’s commitment to operational excellence extends to his role in customer relations.  He has driven business development efforts in Western and Central India, drawing new clients and securing recurring revenue."  

         ltext="With a master's degree specializing in biotechnology and biopharmaceuticals, Abizer has experience in drug process and product development in the pharmaceutical industry. His work on formulation of biologics for rare diseases demonstrates his dedication to advancing pharmaceutical innovation."
        heading="Abizer Sodawalla  "
        subHeading="Operations engineer, Eamah Entrepreneur"
        isImageRight={true}
        bgStyle="light"
      />
      {/* <div className="whiteBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div> */}

      {/* <div style={{ marginTop: "60px", padding: "20px" }} className="lightBg">
        
        <div style={{ marginBottom: "40px", textAlign: "center" }}>
          <h6 style={{ color: "#007bff", fontSize: "40px" }}>Products</h6>
          <h4 style={{ fontSize: "1.75rem", fontWeight: "600" }}>
            What we Offer?
          </h4>
          <p style={{ color: "#000", fontSize: "1.2rem" }}>
            Explore what it's like to be part of our dynamic workforce and make
            a difference with us.
          </p>
        </div>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
        
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
                  backgroundColor: activeTab === "1" ? "#7ACAEB" : "#ffffff",
                  color: activeTab === "1" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Product Category By Equipments
              </button>
              <button
                onClick={() => setActiveTab("2")}
                style={{
                  padding: "10px",
                  backgroundColor: activeTab === "2" ? "#7ACAEB" : "#ffffff",
                  color: activeTab === "2" ? "#ffffff" : "#000000",
                  border: "1px solid gray",
                  borderRadius: "5px",
                  fontWeight: "normal",
                  fontSize: "1rem",
                }}
              >
                Product Category by Company
              </button>
              {/* <button
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
                backgroundColor: "#fff",
              }}
            />
            <h4 style={{ fontWeight: "600", fontSize: "1.2rem" }}>
              {tabContent[activeTab].title}
            </h4>
            <p style={{ color: "#6c757d", fontSize: "1.1rem" }}>
              {tabContent[activeTab].description}
            </p>
            {activeTab == "1" ? (
              <>
                <Link
                  to="/products"
                  style={{ color: "#007bff", fontSize: "1.1rem" }}
                >
                  See More{" "}
                  <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </>
            ) : (
              <>
                <Link to="/products" style={{ color: "#007bff" }}>
                  See More{" "}
                  <i className="uil uil-angle-right-b align-middle"></i>
                </Link>
              </>
            )}
          </div>
        </div>
      </div> */}

      <section
        style={{
          position: "relative",
          height: "450px",
          overflow: "hidden",
          justifyContent: "top",
          background: "linear-gradient(to bottom, transparent 50%,#7ACAEB 50%)",
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
          color: "#fff",
          padding: "2rem",

          marginTop: "00px", // Adjust to position the text below the image
          backgroundColor: "#7ACAEB",
        }}
      >
        {/* <div style={{}}>
          {/* <p style={{ color: "#000", fontSize: "30px", fontWeight: "normal" }}>
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
            A team of expert engineers, creative designers and efficient
            technicians is what drives this company to its goals.
          </h4>
        </div> */}
        <div
          style={{
            color: "#ccc",
            marginBottom: "1.5rem",
            textAlign: "center",
            padding: "1rem",
            maxWidth: "1220px",

          }}
        >
          <p
            style={{
              color: "#fff",
              fontSize: "20px",
              marginBottom: "0.5rem",
              lineHeight: "1.6", // Adds better readability
              margin: "0 auto",
            }}
          >
            Eamah is much more than the modern technology it harbours, it is the
            people that work here. A team of expert engineers, creative
            designers and efficient technicians is what drives this company to
            its goals. They make this company what it is today. Explore what it
            is like to work in a dynamic workforce and together let’s make a
            difference.
          </p>
          <Link
            to="/contactUs"
            style={{
              color: "#000",
              fontWeight: "normal",
              textDecoration: "none",
              borderBottom: "2px solid #fff",
              fontSize: "20px",
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              transition: "transform 0.3s ease, color 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
              e.target.style.color = "#0b093b"; // Change color on hover
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
              e.target.style.color = "#000"; // Revert color
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
      <FooterSection />
    </>
  );
};
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
      font-size: 2rem;
    }

    p {
      font-size: 1.5rem;
    }
},
`;
export default AboutUs;
