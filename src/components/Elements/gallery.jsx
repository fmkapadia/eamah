import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Images
import contactus from "../../assets/img/contactus.webp";
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
// Styled Components
const SectionWrapper = styled.section`
  padding: 60px 0;
`;

const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 15px;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -15px;
`;

const Col = styled.div`
  padding: 15px;
  flex: 0 0 25%;
  max-width: 25%;

  @media (max-width: 992px) {
    flex: 0 0 33.33%; /* Three columns on medium screens */
    max-width: 33.33%;
    padding: 15px;
  }

  @media (max-width: 768px) {
    flex: 0 0 50%; /* Two columns on small screens */
    max-width: 50%;
    padding: 15px;
  }

  @media (max-width: 576px) {
    flex: 0 0 100%; /* One column on extra small screens */
    max-width: 100%;
    padding: 15px;
  }
`;

const CardWrapper = styled.div`
  position: relative;
  border-radius: 0.5rem;
  overflow: hidden;
  transition: transform 0.3s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    margin-bottom: 1rem; /* Add some spacing between cards */
  }
`;

const CardBody = styled.div`
  padding: 0;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 200px;
  @media (max-width: 576px) {
    height: 150px; /* Smaller image height on small screens */
  }
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h5`
  color: #0b093b;
  // font-family: "Brush Script MT", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    font-size: 0.8rem;
  }
`;

const Subtitle = styled.h6`
  color: #0b093b;
  font-family: "Khula", sans-serif;
  font-size: "1.2rem !important";
`;

const FilterGroup = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const FilterItem = styled.li`
  display: inline-block;
  padding: 10px 15px;
  cursor: pointer;
  margin: 5px;
  border: 1px solid #000;
  border-radius: 20px;
  background-color: ${({ active }) => (active ? "#0397DD" : "transparent")};
  color: ${({ active }) => (active ? "#EDF6FF" : "#0397DD")};

  &:hover {
    background-color: #2b56f5;
    color: #fff;
  }
`;

const CTASection = styled.div`
  text-align: center;
  margin-top: 60px;
`;

const CTATitle = styled.div`
  margin-bottom: 1.5rem;
  font-size: "1.2rem";
  color: "#0397DD" !important;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }

  @media (max-width: 576px) {
    font-size: 1.2rem;
  }
`;

const CTADescription = styled.p`
  color: #000;
  font-family: "Khula", sans-serif;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 576px) {
    font-size: 0.9rem;
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

//creating array of images for image portfolio
const images = [
  p1,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p25,
  p23,
  p24,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
  p32,
  p33,
  p34,
  p35,
  p36,
  p37,
  p38,
  p39,
  p40,
  p41,
  p42,
  p43,
  p44,
  p45,
  p46,
  p47,
  p48,
  p49,
  p50,
  p51,
  p52,
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: p1,
          title: "Cadmach 8mm-D tooling",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p2,
          title: "Cadmach 12mm-D-BI layer",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p3,
          title: "Cam track",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p4,
          title: "Grip Ledge",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p5,
          title: "Fette ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p6,
          title: "IMA Kilian ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p7,
          title: "Cam 1",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p8,
          title: "Cam 2",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p9,
          title: "Cam 3",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p10,
          title: "Capsule filling finger",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p11,
          title: "Capsule sorter",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p12,
          title: "Dosing disc",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p13,
          title: "Drum sorter",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p14,
          title: "Exit chut",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p15,
          title: "Magzine assembly",
          subtitle: "Encapsulation",
          category: "Encapsulation66",
        },
        {
          image: p16,
          title: "Rectifier block",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p17,
          title: "IMG_20201028_174701",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p18,
          title: "IMG_20201028_181419",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p19,
          title: "Punch seals",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p20,
          title: "WA0000",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p21,
          title: "disc image",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p22,
          title: "Picture1",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p25,
          title: "Vertical finger",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p23,
          title: " Fill-O-Matic Intermediate plate ",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p24,
          title: "  Tight punch control ",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p26,
          title: "  Sorter container",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p27,
          title: " Tablet and Capsule counter magazine ",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p28,
          title: " Pneumatic spring ",
          subtitle: "Other",
          category: "Other",
        },
        {
          image: p29,
          title: " Draw-off roller ",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p30,
          title: "Servo drives and punch blocks ",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p31,
          title: " Press table and conveyor ",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p32,
          title: "Rolling drum with cavity ",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p33,
          title: "Filling block assembly and railing",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p34,
          title: " Heating plates",
          subtitle: "Packaging",
          category: "Packaging",
        },
        {
          image: p35,
          title: "Dosing disk",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p36,
          title: "Air intake filter",
          subtitle: "Encapsulation",
          category: "Encapsulation",
        },
        {
          image: p37,
          title: "Fill-O-Matic base plate with scraper",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p38,
          title: "Die lock screw ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p39,
          title: " Dosing wheel for Fill-O-Matic ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p40,
          title: "Lube felt",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p41,
          title: "Fill-O-Matic Intermediate plate ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p42,
          title: "Filling wheel for Fill-O-Matic",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p43,
          title: "Pneumatic spring ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p44,
          title: "Scraper bar ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p45,
          title: "Sealing segment ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p46,
          title: "Tight punch control ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p47,
          title: "Feeder paddle (Korsch)",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p48,
          title: "Feeder sole plate ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p49,
          title: "Feed frame ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p50,
          title: "Bronze fill CAM ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p51,
          title: "Fill CAM B tooling ",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p52,
          title: "Upper lowering CAM ",
          subtitle: "Compression",
          category: "Compression",
        },
      ],
      displayCategory: "All",
      photoIndex: 0,
      isOpen: false,
    };
    this.setCategory = this.setCategory.bind(this);
  }

  setCategory(category) {
    this.setState({
      displayCategory: category,
    });
  }

  render() {
    const { photoIndex, isOpen } = this.state;
    return (
      <React.Fragment>
        <SectionWrapper>
          <Container>
            <Row>
              <FilterGroup>
                <ul className="filter-options">
                  {[
                    // "All",
                    "Compression",
                    "Encapsulation",
                    "Other",
                    "Packaging",
                  ].map((category) => (
                    <FilterItem
                      key={category}
                      onClick={() => this.setCategory(category)}
                      active={this.state.displayCategory === category}
                    >
                      {category}
                    </FilterItem>
                  ))}
                </ul>
              </FilterGroup>
            </Row>

            <Row style={{ paddingBottom: "10px" }}>
              {this.state.projects
                .filter(
                  ({ category }) =>
                    this.state.displayCategory === category ||
                    this.state.displayCategory === "All"
                )
                .map(({ title, image, subtitle }, key) => (
                  <Col
                    key={key}
                    xs={12} // Two columns on small screens
                    md={4} // Three columns on medium screens
                    lg={3}
                  >
                    <CardWrapper>
                      <CardBody>
                        <Link
                          to="#"
                          onClick={(event) => {
                            event.preventDefault();
                            this.setState({ isOpen: true, photoIndex: key });
                          }}
                        >
                          <ImageWrapper src={image} alt="work" />
                        </Link>
                        <Content>
                          <Title style={{ fontSize: "1rem", color: "#0397DD" }}>
                            {title}
                          </Title>
                          {/* <Subtitle
                            style={{ fontSize: "0.8rem", color: "#0b093b" }}
                          >
                            {subtitle}
                          </Subtitle> */}
                        </Content>
                      </CardBody>
                    </CardWrapper>
                  </Col>
                ))}
            </Row>

            {isOpen && (
              <Lightbox
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]}
                prevSrc={
                  images[(photoIndex + images.length - 1) % images.length]
                }
                onCloseRequest={() => this.setState({ isOpen: false })}
                onMovePrevRequest={() =>
                  this.setState({
                    photoIndex:
                      (photoIndex + images.length - 1) % images.length,
                  })
                }
                onMoveNextRequest={() =>
                  this.setState({
                    photoIndex: (photoIndex + 1) % images.length,
                  })
                }
              />
            )}
          </Container>

          <Container>
            <CTASection>
              <CTATitle style={{ fontSize: "2rem", color: "#0397DD" }}>
                We get you the parts you need at the price you require and on
                time.
              </CTATitle>
              <CTADescription
                style={{
                  fontSize: "1.2rem",
                  marginBottom: "1rem",
                  color: "#000",
                }}
              >
                Our passion lies in producing top-quality parts at exceptional
                speeds, minimizing downtime for our clients.
              </CTADescription>
              <CTAButton
                to="/contactUs"
                style={{
                  fontSize: "1rem",
                  backgroundColor: "#0397DD",
                  borderRadius: "1rem",
                  color: "#fff",
                }}
              >
                Get In Touch Now
              </CTAButton>
            </CTASection>
          </Container>
        </SectionWrapper>
      </React.Fragment>
    );
  }
}

export default Work;
