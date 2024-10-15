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
  flex: 0 0 25%; /* You can adjust this for responsiveness */
  max-width: 25%;
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
`;

const CardBody = styled.div`
  padding: 0;
`;

const ImageWrapper = styled.img`
  width: 100%;
  height: 200px;
`;

const Content = styled.div`
  padding: 15px;
  text-align: center;
`;

const Title = styled.h5`
  color: #0b093b;
  font-family: "Khula", sans-serif;
  font-weight: bold;
  margin-bottom: 0.5rem;
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
`;

const CTADescription = styled.p`
  color: #000;
  font-family: "Khula", sans-serif;
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
          title: "Fette 3111200_EU1_1350_5",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p5,
          title: "Fette 3117562 EU19",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p6,
          title: "IMA Kilian 248359-1",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p7,
          title: "Picture1",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p8,
          title: "Picture2",
          subtitle: "Compression",
          category: "Compression",
        },
        {
          image: p9,
          title: "Picture3",
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
                    "All",
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
                  <Col key={key}>
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
                          <Subtitle
                            style={{ fontSize: "0.8rem", color: "#0b093b" }}
                          >
                            {subtitle}
                          </Subtitle>
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
