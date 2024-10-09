import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

//Import Images
import contactus from "../../assets/img/contactus.webp";

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
  height: auto;
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
  contactus,
  contactus,
  contactus,
  contactus,
  contactus,
  contactus,
  contactus,
  contactus,
];

class Work extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          image: contactus,
          title: "Iphone mockup",
          subtitle: "Capsule Filling",
          category: "Capsule Filling",
        },
        {
          image: contactus,
          title: "Mockup Collection",
          subtitle: "Mockup",
          category: "Tablet Press",
        },
        {
          image: contactus,
          title: "Abstract images",
          subtitle: "Abstract",
          category: "Tablet Press",
        },
        {
          image: contactus,
          title: "Yellow bg with Books",
          subtitle: "Company V-card",
          category: "Tablet Press",
        },
        {
          image: contactus,
          title: "Company V-card",
          subtitle: "V-card",
          category: "Capsule Filling",
        },
        {
          image: contactus,
          title: "Mockup box with paints",
          subtitle: "Photography",
          category: "Capsule Filling",
        },
        {
          image: contactus,
          title: "Coffee cup",
          subtitle: "Cups",
          category: "General",
        },
        {
          image: contactus,
          title: "Pen and article",
          subtitle: "Article",
          category: "General",
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
                  {["All", "Capsule Filling", "General", "Tablet Press"].map(
                    (category) => (
                      <FilterItem
                        key={category}
                        onClick={() => this.setCategory(category)}
                        active={this.state.displayCategory === category}
                      >
                        {category}
                      </FilterItem>
                    )
                  )}
                </ul>
              </FilterGroup>
            </Row>

            <Row>
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
                  fontSize: "13px",
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
