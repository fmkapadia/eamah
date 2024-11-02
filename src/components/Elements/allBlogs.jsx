import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react"; // Assuming FeatherIcon is imported
import contactus from "../../assets/img/neuro.png";
import contactus1 from "../../assets/img/founder/husain.jpg";

// Styled Components
const Section = styled.section`
  padding: 60px 0;
  @media (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const StyledContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
  @media (max-width: 860px) {
    flex-direction: column;
  }
`;

const Col = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: ${(props) => (props.lg ? `0 0 ${(props.lg / 12) * 100}%` : "100%")};
  max-width: ${(props) => (props.lg ? `${(props.lg / 12) * 100}%` : "100%")};
  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
`;

const Overlay2 = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: opacity 0.3s ease; // Smooth fade-in effect
`;

const TitleLink = styled(Link)`
  font-size: 1.75rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

const MetaLink = styled(Link)`
  color: #6c757d;
  font-size: 0.875rem;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
`;

const SidebarItem = styled.div`
  margin-top: 1rem;
  text-align: center;
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Tagcloud = styled.div`
  margin-top: 1rem;
  text-align: center;
  a {
    background-color: #f8f9fa;
    padding: 0.5rem 1rem;
    margin: 0.25rem;
    display: inline-block;
    border-radius: 3px;
    text-decoration: none;
    color: #000;
    @media (max-width: 768px) {
      padding: 0.3rem 0.8rem;
      font-size: 0.9rem;
    }
  }
`;

const SocialList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  li {
    margin: 0 0.25rem;
  }
  a {
    display: block;
    padding: 0.5rem;
    background-color: #f8f9fa;
    border-radius: 50%;
    color: #6c757d;
  }
`;

class Blog extends Component {
  data = {
    blogs: [
      {
        id: 1,
        image: contactus,
        image1: contactus1,

        title: "Factors influence a neuro-interventionalists (NI) decision ",
        desc: "Due to its widespread use as filler text for layouts, non-readability",
        like: "33",
        comment: "08",
        autor: "Calvin Carlo",
        date: "13th August, 2019",
      },
      // {
      //   id: 2,
      //   image: contactus,
      //   title: "How apps is changing the IT world",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
      // {
      //   id: 3,
      //   image: contactus,
      //   title: "Smartest Applications for Business",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
      // {
      //   id: 4,
      //   image: contactus,
      //   title: "Design your apps in your own way",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
      // {
      //   id: 5,
      //   image: contactus,
      //   title: "How apps is changing the IT world",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
      // {
      //   id: 6,
      //   image: contactus,
      //   title: "Smartest Applications for Business",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
      // {
      //   id: 7,
      //   image: contactus,
      //   title: "Design your apps in your own way",
      //   desc: "Due to its widespread use as filler text for layouts, non-readability",
      //   like: "33",
      //   comment: "08",
      //   autor: "Calvin Carlo",
      //   date: "13th August, 2019",
      // },
    ],
  };
  render() {
    return (
      <Section>
        <StyledContainer>
          <Row>
            <Col lg={8}>
              <Row>
                {this.data.blogs.map((blog, key) => (
                  <Col key={key} lg={12}>
                    <Card>
                      <Row>
                        <Col lg={12}>
                          <Img src={blog.image} alt={blog.title} />
                          {/* <Overlay2 /> */}
                          <Author>
                            <small>{blog.autor}</small>
                            <small>{blog.date}</small>
                          </Author>
                        </Col>
                        <Col lg={12}>
                          <CardBody>
                            <h5>
                              <TitleLink to="#">{blog.title}</TitleLink>
                            </h5>
                            {/* <p>{blog.desc}</p> */}
                            <p
                              style={{ paddingTop: "1rem", fontSize: "1.2rem" }}
                            >
                              <b>
                                1. Dimensions of a flow diverter (diameter &
                                length):
                              </b>{" "}
                              NIs try to match the diameter of the parent vessel
                              and neck length (for full coverage of neck) with
                              the diameter and length of a FD in their toolkit.
                              Attention is thus given to the location of
                              aneurysm – because that will determine the
                              diameter of the parent vessel e.g., internal
                              carotid artery (proximal) is larger than anterior
                              communicating artery (distal). Surpass Streamline
                              (SS) could be up to 5.3-mm diameter and Flow
                              Redirection Endoluminal Device could be around
                              3-mm. To measure the length, software like
                              AneuGuide could be used. [Reference:
                              Vivanco-Suarez, <br />
                              <b>2. Porosity: </b>Porosity of the FD
                              (measurement of how closely packed its mesh)
                              determines how efficiently it ‘diverts the flow’
                              away from the aneurysm sac without blocking
                              (jailing) nearby perforating arteries. So low
                              porosity will lead to quicker aneurysm occlusion
                              but may cause jailing and high porosity leads to
                              reduced risk of jailing but slower aneurysm
                              occlusion e.g., PED? <br />
                              <b>3. Flexibility:</b> A flexible flow diverter
                              can be fit to conform to tortuous, curved vessels
                              – e.g., PED Flex? What is the relationship with
                              porosity? <br />
                              <b>
                                4. Preference for a delivery system/deployment
                                technique:
                              </b>{" "}
                              This might be the most important factor out of the
                              5 listed factors. An NI may prefer an FD solely
                              because they may prefer self-expanding FD over a
                              balloon expandable FD. The goal is to achieve
                              precise positioning of FD across an aneurysm neck
                              and its ease of adjustment if needed.
                              <br />
                              <b>5. Compatibility:</b> Some aneurysms are
                              giant-sized (&gt;25mm in a single dimension) or
                              irregularly shaped or both and may require an
                              embolic to be placed inside the sac like metal
                              coils or even a liquid embolic. The compatibility
                              of a given FD with these adjuvant devices becomes
                              critical at that point. As of now, Stryker’s SS,
                              Microvention Terumo’s FRED and Medtronic’s PED
                              have approval to treat giant-sized aneurysms.
                              There’s much to learn about this treatment
                              technique, I did not include cost and immediate
                              availability of FDs for this post, but I imagine
                              they are a factor as well in decision making and
                              planning. What do you think? Is there something I
                              missed?
                            </p>
                            {/* <PostMeta>
                              <MetaLink to="#">
                                <i className="uil uil-heart"></i> {blog.like}
                              </MetaLink>
                              <MetaLink to="#">
                                <i className="uil uil-comment"></i>{" "}
                                {blog.comment}
                              </MetaLink>
                              <MetaLink to="page-blog-detail">
                                Read More{" "}
                                <i className="uil uil-angle-right-b"></i>
                              </MetaLink>
                            </PostMeta> */}
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Sidebar */}
            <Col lg={4}>
              <Sidebar>
                <CardBody>
                  <SidebarItem style={{ textAlign: "center" }}>
                    <img
                      src={contactus1}
                      className="rounded-circle"
                      alt="Author"
                      style={{
                        width: "100px",
                        height: "100px",
                        borderRadius: "4rem",
                      }}
                    />
                    <div style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                      <Link to="#" className="d-block mt-3">
                        Husaain SodaWala
                      </Link>
                    </div>
                    <div style={{ marginTop: "1rem", fontSize: "1.2rem" }}>
                      <small>
                        Device development manager, Eamah Entrepreneur
                      </small>
                    </div>
                  </SidebarItem>

                  {/* <SidebarItem>
                    <h6>Recent Posts</h6>
                    <div>
                      <Link to="#">Consultant Business</Link>
                      <small>15th April 2021</small>
                    </div>
                    <div>
                      <Link to="#">Grow Your Business</Link>
                      <small>15th April 2021</small>
                    </div>
                    <div>
                      <Link to="#">Look On The Glorious Balance</Link>
                      <small>15th April 2021</small>
                    </div>
                  </SidebarItem> */}

                  <SidebarItem>
                    <h6>Tagcloud</h6>
                    <Tagcloud>
                      <Link to="#">Business</Link>
                      <Link to="#">Pharmacueticals</Link>
                      <Link to="#">SpareParts</Link>
                    </Tagcloud>
                  </SidebarItem>

                  {/* <SidebarItem>
                    <h6>Social Media</h6>
                    <SocialList>
                      <li>
                        <Link to="#">
                          <FeatherIcon icon="facebook" />
                        </Link>
                      </li>
                      <li>
                        <Link to="#">
                          <FeatherIcon icon="instagram" />
                        </Link>
                      </li>
                    </SocialList>
                  </SidebarItem> */}
                </CardBody>
              </Sidebar>
            </Col>
          </Row>
        </StyledContainer>
      </Section>
    );
  }
}
const Card = styled.div`
  background-color: #fff;
  border-radius: 0.25rem;
  border: 0;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
`;
const Sidebar = styled(Card)`
  position: sticky;
  top: 20px;
  @media (max-width: 768px) {
    position: static;
    margin-top: 20px;
  }
`;
const Author = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.6);
  padding: 0.5rem;
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
`;
const CardBody = styled.div`
  padding: 1rem;
  position: relative;
  // cursor: pointer;
`;
export default Blog;
