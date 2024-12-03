import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row, Form, Label, Input } from "reactstrap";
import FeatherIcon from "feather-icons-react";
import styled from "styled-components";
import eamah_text from "../../assets/img/eamah_text.png";

// Styled-components
const FooterWrapper = styled.div`
  background-color: #ebebeb;
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
    margin-right: 15px;
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
const ContactInfo = styled.p`
  font-size: 1.2rem;
  color: #000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    strong {
      margin-bottom: 0.5rem;
    }
  }
`;
const ContactDetails = styled.div`
  font-size: 1.2rem;
  color: #000;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 0.5rem; /* Add some spacing between each item */
  }

  p {
    margin: 0; /* Reset margin for better alignment */
  }

  strong {
    margin-bottom: 0.5rem;
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
        {
          icon: "linkedin",
          url: "https://www.linkedin.com/company/eamah-entrepreneur/",
        },
        { icon: "facebook", url: "#" },
        { icon: "instagram", url: "#" },
        { icon: "twitter", url: "#" },
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
                {this.state.usefulLinks.map((social, index) => (
                  <li key={index}>
                    <Link to={social.url} className="rounded me-1">
                      <FeatherIcon icon={social.icon} className="icon-sm" />
                    </Link>
                  </li>
                ))}
              </SocialIconList>
            </Col>

            {/* Company Links */}
            <Col lg={3} md={4} className="mt-4">
              <FooterHead style={{ paddingLeft: "10px" }}>Company</FooterHead>
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
              {/* <p style={{ fontSize: "1.2rem", color: "#000" }}>
                A-032, 04th Floor, Dosa, Sandhurst Road (West), Mumbai 400 009
              </p>
              <ContactInfo>
                <strong>Email:</strong>
                purchase@eamahent.com /
                <br />
                sales@eamahent.com/
                <br />
                info@eamahent.com
              </ContactInfo>
              <p style={{ fontSize: "1.2rem", color: "#000" }}>
                <strong>Email:</strong> purchase@eamahent.com/sales@eamahent.com
                / info@eamahent.com
              </p>

              <p style={{ fontSize: "1.2rem", color: "#000" }}>
                <strong>Phone:</strong> +91-22-23744952/+91-9870601200
              </p> */}
              <ContactDetails>
                <p>
                  <strong>Address: </strong>
                  A-032, 04th Floor, Dosa, Sandhurst Road (West), Mumbai 400 009
                </p>
                <p>
                  <strong>Email: </strong>
                  purchase@eamahent.com
                  <br />
                  sales@eamahent.com
                  <br />
                  info@eamahent.com
                </p>
                <p>
                  <strong>Phone: </strong> +91-22-23744952 / +91-9870601200
                </p>
              </ContactDetails>
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
        <span id="siteseal">
          <script
            async
            type="text/javascript"
            src="https://seal.godaddy.com/getSeal?sealID=sP3wLDRo7A9IgTyvsrEcC4oj7BStybWiW2XTydqfX2RdOMv1q3H4GQBTsKjs"
          ></script>
        </span>
      </FooterWrapper>
    );
  }
}

export default FooterSection;
