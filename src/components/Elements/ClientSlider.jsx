import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
// Assets
import Picture1 from "../../assets/img/clients/Picture1.jpg";
import Picture6 from "../../assets/img/clients/Picture6.png";
import Picture2 from "../../assets/img/clients/Picture2.png";
import Picture3 from "../../assets/img/clients/Picture3.jpg";
import Picture4 from "../../assets/img/clients/Picture4.jpg";
import Picture5 from "../../assets/img/clients/Picture5.jpg";
import Picture7 from "../../assets/img/clients/Picture7.png";
import Picture8 from "../../assets/img/clients/Picture8.jpg";
import Picture9 from "../../assets/img/clients/Picture9.png";
import Picture10 from "../../assets/img/clients/Picture10.png";
import Picture11 from "../../assets/img/clients/Picture11.png";
import Picture12 from "../../assets/img/clients/Picture12.png";
import Picture13 from "../../assets/img/clients/Picture13.jpg";
import Picture14 from "../../assets/img/clients/Picture14.png";
import Picture15 from "../../assets/img/clients/Picture15.png";
import Picture16 from "../../assets/img/clients/Picture16.png";
import Picture17 from "../../assets/img/clients/Picture17.jpg";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider der {...settings}>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture1} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture2} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture3} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture4} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture5} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture6} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture7} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture8} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture9} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture11} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture12} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture13} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture14} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture15} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture16} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={Picture17} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.div`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
`;
