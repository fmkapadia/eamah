import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import headerImage from "../../assets/img/headerImage.png";
import banner1 from "../../assets/img/banner1.png";
import banner2 from "../../assets/img/banner2.png";
import banner3 from "../../assets/img/banner3.png";
import banner4 from "../../assets/img/banner4.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import { useNavigate } from "react-router-dom";
// import { Button } from "react-scroll";
const sliderImages = [
  { src: banner1, alt: "Image 1" },
  { src: banner2, alt: "Image 2" },
  { src: banner3, alt: "Image 3" },
  { src: banner4, alt: "Image 4" },
];
export default function Header() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("inside handle Click");
    navigate("/contactUs"); // Navigate to the AnotherPage
  };
  return (
    <Wrapper>
      {/* <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">We are Digital Agency.</h1>
          <HeaderP className="font13 semiBold">
            Hello we are digital company
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started" action={handleClick} />
          </BtnWrapper>
          {/* <button onClick={handleClick}>Get Started</button>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          {/* <Img
            className="radius8"
            src={headerImage}
            alt="office"
            style={{ zIndex: 9 }}
          /> 
          <SliderWrapper>
            <Slider {...sliderSettings}>
              {sliderImages.map((image, index) => (
                <div key={index}>
                  <ImageSlide>
                    <Img className="radius8" src={image.src} alt={image.alt} />
                    <TextOverlay>
                      <h2>Your Title Here</h2>
                      <p>Your description here.</p>
                    </TextOverlay>
                  </ImageSlide>
                </div>
              ))}
            </Slider>

            {/* <img src="HeaderImage" alt="" /> 
            <QuoteWrapper className="flexCenter darkBg radius8">
              <QuotesWrapper>
                <QuotesIcon />
              </QuotesWrapper>
              <div>
                <p className="font15 whiteColor">
                  <em>
                    Friends, such as we desire, are dreams and fables.
                    Friendship demands the ability to do without it.
                  </em>
                </p>
                <p
                  className="font13 orangeColor textRight"
                  style={{ marginTop: "10px" }}
                >
                  Ralph Waldo Emerson
                </p>
              </div>
            </QuoteWrapper>
            <DotsWrapper>
              <Dots />
            </DotsWrapper>
          </SliderWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide> */}
      <RightSide>
        <SliderWrapper>
          <Slider {...sliderSettings}>
            {sliderImages.map((image, index) => (
              <div key={index}>
                <ImageSlide>
                  <Img className="radius8" src={image.src} alt={image.alt} />
                  {/* <TextOverlay>
                    <h2>Eamah Entrepreneur</h2>
                    <p>
                      Your Trusted Partner for Pharmaceutical Equipment
                      Components(Machinery Spare Parts)
                    </p>
                    <div className="row flexCenter">
                      <CTAButton
                        to="/products/equipments"
                        style={{
                          fontSize: "1rem",
                          backgroundColor: "#0397DD",
                          borderRadius: "1rem",
                          color: "#fff",
                          margin: "1rem",
                        }}
                      >
                        Explore Our Products...
                      </CTAButton>
                    </div>
                  </TextOverlay> */}
                </ImageSlide>
              </div>
            ))}
          </Slider>
        </SliderWrapper>
        {/* <QuoteWrapper className="flexCenter darkBg radius8">
          <QuotesWrapper>
            <QuotesIcon />
          </QuotesWrapper> */}
        {/* <div>
            <p className="font15 whiteColor">
              <em>
                Friends, such as we desire, are dreams and fables. Friendship
                demands the ability to do without it.
              </em>
            </p>
            <p
              className="font13 orangeColor textRight"
              style={{ marginTop: "10px" }}
            >
              Ralph Waldo Emerson
            </p>
          </div>
        </QuoteWrapper> */}
        {/* <GreyDiv className="lightBg"></GreyDiv> */}
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  // padding-top: 80px;
  width: 100vw;
  // border: 1px solid black;
  // min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  object-fit: cover;
  // padding: 20px;
  // border: 1px solid black;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const CTAButton = styled(Link)`
  display: inline-block;
  background-color: #2b56f5;
  color: #fff;
  padding: 10px 30px;
  text-decoration: none;
  border-radius: 5px;
  &:hover {
    background-color: #1a3dbf;
    color: "#fff" !important;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
// const Img = styled.img`
//   @media (max-width: 560px) {
//     width: 80%;
//     height: auto;
//   }
// `;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
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
const SliderWrapper = styled.div`
  width: 100%;
`;

const ImageSlide = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const Img = styled.img`
  width: 100vw;
  height: 100vh;
  object-fit: fill;
`;

const TextOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: white;
  background: rgba(0, 0, 0, 0.4); // Semi-transparent black overlay
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 60px;
  z-index: 10;

  h2 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1.2rem;
    margin-top: 10px;
  }
`;
