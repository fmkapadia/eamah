import React, { useEffect, useRef, useState } from "react";
import styled, { css, keyframes } from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
import { Link } from "react-router-dom";
// Assets
import AddImage1 from "../../assets/img/p45.jpg";
import AddImage2 from "../../assets/img/p44.jpg";
import p29 from "../../assets/img/banner/company1.png";
import p32 from "../../assets/img/banner/company3.png";
import AddImage3 from "../../assets/img/products/Compression/p39.jpg";
import AddImage4 from "../../assets/img/products/Packaging/p30.jpg";
import Dots from "../../assets/svg/Dots";

export default function Services() {
  const [isVisibleServiceBox, setIsVisibleServiceBox] = useState(false);
  const [isVisibleAdvertising, setIsVisibleAdvertising] = useState(false);

  const serviceBoxRef = useRef();
  const advertisingRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleServiceBox(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (serviceBoxRef.current) {
      observer.observe(serviceBoxRef.current);
    }

    return () => {
      if (serviceBoxRef.current) {
        observer.unobserve(serviceBoxRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleAdvertising(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (advertisingRef.current) {
      observer.observe(advertisingRef.current);
    }

    return () => {
      if (advertisingRef.current) {
        observer.unobserve(advertisingRef.current);
      }
    };
  }, []);

  return (
    <Wrapper id="services">
      <div className="whiteBg" style={{ padding: "50px 0", marginTop: "60px" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="lightBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 style={{ color: "#007bff", fontSize: "40px" }}>
              Engineering Innovation for Seamless Production.
            </h1>
            <p style={{ color: "#000", fontSize: "1.1rem" }}>
              The future of pharmaceutical machinery starts here. Explore our
              innovative solutions
            </p>
          </HeaderInfo>
          <ServiceBoxRow
            ref={serviceBoxRef}
            isVisible={isVisibleServiceBox}
            className="flex"
          >
            <ServiceBoxWrapper>
              <ServiceBox
                icon="roller"
                title=" Quality Assurance
"
                subtitle=" Our state-of-the-art facilities utilize top-tier machinery, enabling us to deliver premium quality replacement parts for your pharmaceutical equipment."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="monitor"
                title="Competitive Prices"
                subtitle="Our in-depth knowledge and experience translate into exceptional spare parts that rival OEM standards at competitive prices."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="browser"
                title="Reliability"
                subtitle="We are committed to providing dependable solutions that minimize downtime,
enhance productivity, and consistently meet the high standards required in
the industry."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper>
              <ServiceBox
                icon="printer"
                title="Packaging"
                subtitle=" Eamah supports
manufacturers in achieving safe, efficient, and hygienic product packaging.
Our machinery is designed to maintain product integrity, ensuring products are well-protected from production
to final delivery."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising
              ref={advertisingRef}
              isVisible={isVisibleAdvertising}
              className="flexSpaceCenter"
            >
              <AddLeft>
                <h4 style={{ color: "#007bff", fontSize: "40px" }}>
                  A few words about company
                </h4>
                {/* <h2 className="font40 extraBold">A Study of Creativity</h2> */}
                <p style={{ color: "#000", fontSize: "1.2rem" }}>
                  We are a leading manufacturer of spare parts for
                  pharmaceutical machinery, specializing in tablet press and
                  capsule filling technologies. Our expertise empowers our
                  pharmaceutical clients to optimize their production processes.
                  We collaborate closely with our customers, ensuring we stay
                  one step ahead in a competitive landscape.
                </p>
                <ButtonsRow
                  // className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  {/* <Link
                    to="#"
                    style={{
                      color: "#000",
                      fontWeight: "normal",
                      textDecoration: "none",
                      borderBottom: "2px solid #fff",
                      fontSize: "20px",
                    }}
                  >
                    Explore Our Products
                    <i
                      className="uil uil-angle-right-b align-middle"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </Link> */}

                  <CTAButton
                    to="/contactUs"
                    style={{
                      fontSize: "1.2rem",
                      backgroundColor: "#0397DD",
                      borderRadius: "1rem",
                      color: "#fff",
                      // margin: "3rem",
                    }}
                  >
                    Contact Us{" "}
                    <i
                      className="uil uil-angle-right-b align-middle"
                      style={{ marginLeft: "5px" }}
                    ></i>
                  </CTAButton>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={p32} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={p29} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    opacity: 0;
    transform: translateX(0);
  }
  100% {
    opacity: 1;
    transform: translateX(50px); // Slide out to the right
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #2b56f5;
  color: #fff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #1a3dbf;
    color: "#fff" !important;
    transform: scale(1.05);
  }
`;
const Wrapper = styled.section`
  width: 100%;
`;
const ServiceBoxRow = styled.div`
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${slideIn} 3s ease forwards;
    `}
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;
const ServiceBoxWrapper = styled.div`
  width: 20%;
  margin-right: 5%;
  padding: 80px 0;

  &:hover {
    transform: translateY(-5px);
  }
  @media (max-width: 860px) {
    width: 100%;
    text-align: center;
    padding: 40px 0;
  }
`;
const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Advertising = styled.div`
  margin: 80px 0;
  padding: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 0px 0 40px 0;
  }
  opacity: ${(props) => (props.isVisible ? 1 : 0)};
  ${(props) =>
    props.isVisible &&
    css`
      animation: ${slideOut} 0.5s ease forwards;
    `}

  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
    animation: ${slideIn} 1s ease forwards;
  }
`;
const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;
const AddLeft = styled.div`
  width: 50%;
  p {
    max-width: 475px;
  }
  @media (max-width: 860px) {
    width: 100%;
    order: 2;
    text-align: center;
    h2 {
      line-height: 3rem;
      margin: 15px 0;
    }
    p {
      margin: 2px auto;
    }
  }
`;
const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: 70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;
const AddRightInner = styled.div`
  width: 100%;
`;
const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
