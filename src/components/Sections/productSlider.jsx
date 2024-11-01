import p1 from "../../assets/img/products/Compression/p1.png";
import p2 from "../../assets/img/products/Compression/p2.png";
import p3 from "../../assets/img/products/Compression/p3.PNG";
import p4 from "../../assets/img/products/Compression/p4.jpg";
import p5 from "../../assets/img/products/Compression/p5.jpg";
import p6 from "../../assets/img/products/Compression/p6.png";
import p7 from "../../assets/img/products/Compression/p7.jpg";
import p8 from "../../assets/img/products/Compression/p8.jpg";
import p9 from "../../assets/img/products/Compression/p9.png";
import p10 from "../../assets/img/products/Encapsulation/p10.jpeg";
import p11 from "../../assets/img/products/Encapsulation/p11.jpg";
import p12 from "../../assets/img/products/Encapsulation/p12.png";
import p13 from "../../assets/img/products/Encapsulation/p13.jpg";
import p14 from "../../assets/img/products/Encapsulation/p14.png";
import p15 from "../../assets/img/products/Encapsulation/p15.jpg";
import p16 from "../../assets/img/products/Encapsulation/p16.jpg";
import p25 from "../../assets/img/products/Encapsulation/p25.jpg";
import p17 from "../../assets/img/products/Other/p17.jpg";
import p18 from "../../assets/img/products/Other/p18.jpg";
import p19 from "../../assets/img/products/Other/p19.PNG";
import p20 from "../../assets/img/products/Other/p20.jpg";
import p21 from "../../assets/img/products/Packaging/p21.jpeg";
import p22 from "../../assets/img/products/Packaging/p22.jpg";
import p29 from "../../assets/img/products/Packaging/p29.jpg";
import p30 from "../../assets/img/products/Packaging/p30.jpg";
import p31 from "../../assets/img/products/Packaging/p31.jpg";
import p32 from "../../assets/img/products/Packaging/p32.jpg";
import p33 from "../../assets/img/products/Packaging/p33.jpg";
import p34 from "../../assets/img/products/Packaging/p34.jpg";
import p23 from "../../assets/img/products/Other/p23.jpg";
import p24 from "../../assets/img/products/Other/p24.jpg";
import p26 from "../../assets/img/products/Other/p26.jpg";
import p27 from "../../assets/img/products/Other/p27.jpg";
import p28 from "../../assets/img/products/Other/p28.jpg";
import p35 from "../../assets/img/products/Encapsulation/p35.PNG";
import p36 from "../../assets/img/products/Encapsulation/p36.PNG";
import p37 from "../../assets/img/products/Compression/p37.jpg";
import p38 from "../../assets/img/products/Compression/p38.jpg";
import p39 from "../../assets/img/products/Compression/p39.jpg";
import p40 from "../../assets/img/products/Compression/p40.jpg";
import p41 from "../../assets/img/products/Compression/p41.jpg";
import p42 from "../../assets/img/products/Compression/p42.jpg";
import p43 from "../../assets/img/products/Compression/p43.jpg";
import p44 from "../../assets/img/products/Compression/p44.jpg";
import p45 from "../../assets/img/products/Compression/p45.jpg";
import p46 from "../../assets/img/products/Compression/p46.jpg";
import p47 from "../../assets/img/products/Compression/p47.PNG";
import p48 from "../../assets/img/products/Compression/p48.PNG";
import p49 from "../../assets/img/products/Compression/p49.PNG";
import p50 from "../../assets/img/products/Compression/p50.PNG";
import p51 from "../../assets/img/products/Compression/p51.PNG";
import p52 from "../../assets/img/products/Compression/p52.PNG";

import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Import your images
// import p1 from "../../assets/img/products/Compression/p1.png";
// import p2 from "../../assets/img/products/Compression/p2.png";
// import p3 from "../../assets/img/products/Compression/p3.PNG";
// import p4 from "../../assets/img/products/Compression/p4.jpg";
// import p5 from "../../assets/img/products/Compression/p5.jpg";
// import p6 from "../../assets/img/products/Compression/p6.png";
// import p7 from "../../assets/img/products/Compression/p7.jpg";
// import p8 from "../../assets/img/products/Compression/p8.jpg";
// import p9 from "../../assets/img/products/Compression/p9.png";
// import p10 from "../../assets/img/products/Encapsulation/p10.jpeg";

// Sample images (replace with your actual images)
const images = [
  { src: p1, name: "Cadmach 8mm-D tooling" },
  { src: p2, name: "Cadmach 12mm-D-BI layer" },
  { src: p3, name: "Cam track" },
  { src: p4, name: "Grip Ledge" },
  { src: p5, name: "Fette" },
  { src: p6, name: "IMA Kilian" },
  { src: p37, name: "Fill-O-Matic base plate with scraper" },
  { src: p38, name: "Die lock screw" },
  { src: p39, name: "Dosing wheel for Fill-O-Matic" },
  { src: p40, name: "Lube felt " },
  { src: p41, name: "Fill-O-Matic Intermediate plate " },
  { src: p42, name: "Filling wheel for Fill-O-Matic" },
  { src: p43, name: "Pneumatic spring " },
  { src: p44, name: "Scraper bar " },
  { src: p45, name: "Sealing segment" },
  { src: p46, name: "Tight punch control" },
  { src: p47, name: "Feeder paddle" },
  { src: p48, name: "Feeder sole plate" },
  { src: p49, name: "Feed frame " },
  { src: p50, name: "Bronze fill CAM" },
  { src: p51, name: "Fill CAM B tooling " },
  { src: p52, name: "Upper lowering CAM " },
];
const Encapsulation = [
  { src: p10, name: "Capsule filling finger" },
  { src: p11, name: "Capsule sorter" },
  { src: p12, name: "Dosing disc" },
  { src: p13, name: "Drum sorter" },
  { src: p14, name: "Exit chut" },
  { src: p15, name: "Magzine assembly" },
  { src: p16, name: "Rectifier block" },
  { src: p25, name: "Vertical finger" },
  { src: p35, name: "Dosing disk" },
  { src: p36, name: "Air intake filter" },
];
const other = [
  //   { src: p17, name: "Capsule filling finger" },
  //   { src: p18, name: "Capsule sorter" },
  { src: p19, name: "Punch seals" },
  //   { src: p20, name: "Drum sorter" },
  { src: p23, name: "Fill-O-Matic Intermediate plate" },
  { src: p24, name: " Tight punch control " },
  { src: p26, name: "Sorter container" },
  { src: p27, name: "Tablet and Capsule counter magazine" },
  { src: p28, name: " Pneumatic spring " },
];
const packaging = [
  { src: p21, name: "disc image" },
  // { src: p22, name: "Capsule sorter" },
  { src: p29, name: "Draw-off roller " },
  { src: p30, name: "Servo drives and punch blocks " },
  { src: p31, name: "Press table and conveyor" },
  { src: p32, name: "Rolling drum with cavity" },
  { src: p33, name: "Filling block assembly and railing" },
  { src: p34, name: "Heating plates" },
];

const Carousel = () => {
  const [currentSlide1, setCurrentSlide1] = useState(0);
  const [currentSlide2, setCurrentSlide2] = useState(0);
  const [currentSlide3, setCurrentSlide3] = useState(0);
  const [currentSlide4, setCurrentSlide4] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCurrentSlide1((prev) => (prev + 1) % Math.ceil(images.length / 4)); // Change slide every 5 seconds
    }, 9000);

    return () => clearInterval(interval1);
  }, []);
  useEffect(() => {
    const interval2 = setInterval(() => {
      setCurrentSlide2(
        (prev) => (prev + 1) % Math.ceil(Encapsulation.length / 4)
      ); // Change slide every 5 seconds
    }, 3000);

    return () => clearInterval(interval2);
  }, []);
  useEffect(() => {
    const interval3 = setInterval(() => {
      setCurrentSlide3((prev) => (prev + 1) % Math.ceil(other.length / 4)); // Change slide every 5 seconds
    }, 3000);

    return () => clearInterval(interval3);
  }, []);
  useEffect(() => {
    const interval4 = setInterval(() => {
      setCurrentSlide4((prev) => (prev + 1) % Math.ceil(packaging.length / 4)); // Change slide every 5 seconds
    }, 3000);

    return () => clearInterval(interval4);
  }, []);

  return (
    <>
      <CarouselSection>
        <Heading>Compression</Heading>
        <CarouselContainer>
          <CarouselWrapper slideIndex={currentSlide1}>
            {images.map((image, index) => (
              <Slide key={index}>
                <Image src={image.src} alt={image.name} />
                <Caption>{image.name}</Caption>
              </Slide>
            ))}
          </CarouselWrapper>
        </CarouselContainer>
      </CarouselSection>
      <div style={{ marginTop: "1rem" }}></div>
      <CarouselSection>
        <Heading>Encapsulation</Heading>
        <CarouselContainer>
          <CarouselWrapper slideIndex={currentSlide2}>
            {Encapsulation.map((image, index) => (
              <Slide key={index}>
                <Image src={image.src} alt={image.name} />
                <Caption>{image.name}</Caption>
              </Slide>
            ))}
          </CarouselWrapper>
        </CarouselContainer>
      </CarouselSection>
      <div style={{ marginTop: "1rem" }}></div>
      <CarouselSection>
        <Heading>Other</Heading>
        <CarouselContainer>
          <CarouselWrapper slideIndex={currentSlide3}>
            {other.map((image, index) => (
              <Slide key={index}>
                <Image src={image.src} alt={image.name} />
                <Caption>{image.name}</Caption>
              </Slide>
            ))}
          </CarouselWrapper>
        </CarouselContainer>
      </CarouselSection>
      <CarouselSection>
        <Heading>Packaging</Heading>
        <CarouselContainer>
          <CarouselWrapper slideIndex={currentSlide4}>
            {packaging.map((image, index) => (
              <Slide key={index}>
                <Image src={image.src} alt={image.name} />
                <Caption>{image.name}</Caption>
              </Slide>
            ))}
          </CarouselWrapper>
        </CarouselContainer>
      </CarouselSection>
    </>
  );
};

export default Carousel;

// CSS-in-JS styles
const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
`;

const CarouselSection = styled.div`
  width: 100%;
  padding: 2rem 0;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2rem;
  color: #0b093b;
  margin-bottom: 1.5rem;
`;

const CarouselWrapper = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
  transform: translateX(-${({ slideIndex }) => slideIndex * 100}%);
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 25%; /* Four images per slide */
  padding: 10px; /* Space between images */
  @media (max-width: 768px) {
    min-width: 50%; /* Two images per slide on smaller screens */
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px; /* Adjust height as needed */
  object-fit: contain;
`;

const Caption = styled.div`
  text-align: center;
  font-size: 1.2rem;
  padding: 0.5rem;
  color: #6c757d;
`;
