import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react"; // Assuming FeatherIcon is imported
import contactus from "../../assets/img/contactus.webp";
// Styled Components
const Section = styled.section`
  padding: 60px 0;
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
`;

const Col = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  flex: ${(props) => (props.lg ? `0 0 ${(props.lg / 12) * 100}%` : "100%")};
  max-width: ${(props) => (props.lg ? `${(props.lg / 12) * 100}%` : "100%")};
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
  font-size: 1.25rem;
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
        title: "Design your apps in your own way",
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
            <Col lg={12}>
              <Row>
                {this.data.blogs.map((blog, key) => (
                  <Col key={key} lg={12}>
                    <Card>
                      <Row>
                        <Col lg={6}>
                          <Img src={blog.image} alt={blog.title} />
                          {/* <Overlay2 /> */}
                          <Author>
                            <small>{blog.autor}</small>
                            <small>{blog.date}</small>
                          </Author>
                        </Col>
                        <Col lg={6}>
                          <CardBody>
                            <h5>
                              <TitleLink to="#">{blog.title}</TitleLink>
                            </h5>
                            <p>{blog.desc}</p>
                            <PostMeta>
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
                            </PostMeta>
                          </CardBody>
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>

            {/* Sidebar */}
            {/* <Col lg={4}>
              <Sidebar>
                <CardBody>
                  <SidebarItem>
                    <img
                      src={contactus}
                      className="rounded-circle"
                      alt="Author"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <Link to="/blog-about" className="d-block mt-3">
                      Cristina Jota
                    </Link>
                    <small>Photographer & Blogger</small>
                  </SidebarItem>

                  <SidebarItem>
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
                  </SidebarItem>

                  <SidebarItem>
                    <h6>Tagcloud</h6>
                    <Tagcloud>
                      <Link to="#">Business</Link>
                      <Link to="#">Finance</Link>
                      <Link to="#">Marketing</Link>
                    </Tagcloud>
                  </SidebarItem>

                  <SidebarItem>
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
                  </SidebarItem>
                </CardBody>
              </Sidebar>
            </Col> */}
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
  cursor: pointer;
`;
export default Blog;
