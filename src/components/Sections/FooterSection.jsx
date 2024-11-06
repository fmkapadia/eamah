import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Label, Input } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";
import eamah_text from "../../assets/img/eamah_text.png";

// Styled-components
const FooterWrapper = styled.div`
  background-color: #f8f9fa;
  padding: 2rem 0;
  border-top: 1px solid #e9ecef;
  @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }
`;

const FooterHead = styled.h5`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const FooterList = styled.ul`
  list-style: none;
  padding: 0;
  fontsize: 1.2rem;
`;

const FooterListItem = styled.li`
  margin-bottom: 0.75rem;
  a {
    color: #000;
    fontsize: 1.2rem;
    text-decoration: none;
    &:hover {
      color: #0b093b;
    }
  }
`;

const SocialIconList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
  li {
    display: inline-block;
    margin-right: 10px;
  }
`;

const FootSubscribe = styled.div`
  position: relative;
  margin-bottom: 1rem;
  input {
    width: 100%;
    padding-left: 3rem;
    border: 1px solid #ced4da;
  }
`;

const FormIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  .icon-sm {
    color: #6c757d;
  }
`;

const ButtonPrimary = styled.input`
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0056b3;
  }
`;

class FooterSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companyLinks: [
        { title: "About us", link: "/aboutUs" },
        { title: "Products", link: "/products" },
        // { title: "Team", link: "#" },
        { title: "ContactUs", link: "/contactUs" },
        { title: "Blogs", link: "/blogs" },
      ],
      usefulLinks: [
        { title: "Terms of Services", link: "#" },
        { title: "Privacy Policy", link: "#" },
        { title: "Documentation", link: "#" },
        { title: "Changelog", link: "#" },
      ],
    };
  }

  render() {
    return (
      <FooterWrapper>
        <Container>
          <Row>
            {/* Company Info */}
            <Col lg={5} xs={12} className="mb-4">
              <Link to="#" className="logo-footer">
                <img
                  src={eamah_text}
                  alt="logo"
                  style={{ width: "10rem", height: "2rem" }}
                />
              </Link>
              <p className="mt-4" style={{ fontSize: "1.2rem", color: "#000" }}>
                Driving innovation in the pharmaceutical industry.
              </p>
              <SocialIconList>
                {/* "facebook", "instagram", "twitter", */}
                {["linkedin"].map((icon, index) => (
                  <li key={index}>
                    <Link
                      to="https://www.linkedin.com/company/eamah-entrepreneur/"
                      className="rounded me-1"
                    >
                      <FeatherIcon icon={icon} className="icon-sm" />
                    </Link>
                  </li>
                ))}
              </SocialIconList>
            </Col>

            {/* Company Links */}
            <Col lg={2} md={4} className="mt-4">
              <FooterHead>Company</FooterHead>
              <FooterList style={{ fontSize: "1.2rem" }}>
                {this.state.companyLinks.map((link, key) => (
                  <FooterListItem key={key}>
                    <Link
                      to={link.link}
                      className={
                        this.props.isLight ? "text-muted" : "text-foot"
                      }
                    >
                      <i className="uil uil-angle-right-b me-1"></i>{" "}
                      {link.title}
                    </Link>
                  </FooterListItem>
                ))}
              </FooterList>
            </Col>
            <Col lg={4} md={4} className="mt-4">
              <FooterHead>Contact Information</FooterHead>
              <p style={{ fontSize: "1.2rem", color: "#000" }}>
                A-032, 04th Floor, Dosa, Sandhurst Road (West), Mumbai 400 009
              </p>
              <p style={{ fontSize: "1.2rem", color: "#000" }}>
                <strong>Email:</strong> purchase@eamahent.com /
                saleseamah@gmail.com / info@eamahent.com
              </p>
              <p style={{ fontSize: "1.2rem", color: "#000" }}>
                <strong>Phone:</strong> +91-22-23744952 / +91-9870601200
              </p>
            </Col>

            {/* Useful Links */}
            {/* <Col lg={3} md={4} className="mt-4">
              <FooterHead>Useful Links</FooterHead>
              <FooterList>
                {this.state.usefulLinks.map((link, key) => (
                  <FooterListItem key={key}>
                    <Link
                      to={link.link}
                      className={
                        this.props.isLight ? "text-muted" : "text-foot"
                      }
                    >
                      <i className="uil uil-angle-right-b me-1"></i>{" "}
                      {link.title}
                    </Link>
                  </FooterListItem>
                ))}
              </FooterList>
            </Col> */}

            {/* Newsletter */}
            {/* <Col lg={3} md={4} className="mt-4">
              <FooterHead>Newsletter</FooterHead>
              <p className="mt-4">
                Sign up and receive the latest tips via email.
              </p>
              <Form>
                <Row>
                  <Col lg="12">
                    <FootSubscribe>
                      <Label>Email Address</Label>
                      <FormIcon>
                        <FeatherIcon icon="mail" className="icon-sm" />
                      </FormIcon>
                      <Input
                        type="email"
                        className="ps-5 rounded bg-light border"
                        placeholder="Your email"
                        required
                      />
                    </FootSubscribe>
                  </Col>
                  <Col lg="12">
                    <div className="d-grid">
                      <ButtonPrimary
                        type="submit"
                        className="btn btn-primary"
                        value="Subscribe"
                      />
                    </div>
                  </Col>
                </Row>
              </Form>
            </Col> */}
          </Row>
        </Container>
        <span id="siteseal"><script async type="text/javascript" src="https://seal.godaddy.com/getSeal?sealID=sP3wLDRo7A9IgTyvsrEcC4oj7BStybWiW2XTydqfX2RdOMv1q3H4GQBTsKjs"></script></span>
      </FooterWrapper>
    );
  }
}

export default FooterSection;
