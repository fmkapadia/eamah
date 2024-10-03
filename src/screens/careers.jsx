import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

// import NavBar from "./NavBar";

//Import images
import contactus from "../assets/img/contactus.webp";

class JobListThree extends Component {
  render() {
    return (
      <React.Fragment>
        {/* <NavBar /> */}
        {/* breadcrumb */}
        <section
          className="bg-half-170 bg-primary d-table w-100"
          style={{
            backgroundImage: `url(${contactus})`,
            height: "500px", // Set the desired height
            overflow: "hidden",
          }}
        >
          <Container>
            <Row className="mt-5 justify-content-center">
              <Col lg={12} className="text-center">
                <div
                  className="pages-heading"
                  style={{
                    position: "absolute", // Absolutely position to overlap the iframe
                    top: "50%", // Align to the center vertically
                    left: "50%", // Align to the center horizontally
                    transform: "translate(-50%, -50%)", // Shift to true center
                    zIndex: 2, // Ensure the content is above the iframe
                    color: "#0b093b", // Text color
                    textAlign: "center", // Center text horizontally
                  }}
                >
                  <h2 className="font40 extraBold"> Careers </h2>
                </div>
              </Col>
            </Row>

            {/* <div className="position-breadcrumb">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul className="breadcrumb bg-white rounded shadow mb-0 px-4 py-2">
                  <li className="breadcrumb-item">
                    <Link
                      to="/"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      Landrick
                    </Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link
                      to="/index-job"
                      style={{ color: "#007bff", textDecoration: "none" }}
                    >
                      Careers
                    </Link>
                  </li>
                  <li
                    className="breadcrumb-item active"
                    aria-current="page"
                    style={{ color: "#6c757d" }}
                  >
                    Jobs
                  </li>
                </ul>
              </nav>
            </div> */}
          </Container>
        </section>
        <div className="form-icon position-relative">
          <div className="shape overflow-hidden text-white">
            <svg
              viewBox="0 0 2880 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
        </div>
        {/* <section className="section">
          <Container className="mt-5 mt-sm-0">
        

            <Row>
              {(this.state.jobList || []).map((item, key) => (
                <Col xs={12} key={key} className="mt-4 pt-2">
                  <div className="job-box d-md-flex align-items-center border-0 shadow rounded p-4 position-relative">
                    <img
                      src={item.img}
                      className="avatar avatar-md-sm"
                      alt=""
                    />

                    <div className="ms-md-4 mt-4 mt-sm-0">
                      <Link to="/job-detail-three" className="text-dark h5">
                        {item.designation}
                      </Link>

                      <ul className="list-unstyled mb-0 mt-2">
                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2">
                          <i className="uil uil-map-marker text-primary"></i>{' '}
                          <Link to="#" className="text-dark">
                            {item.location}
                          </Link>
                          , {item.country}
                        </li>{" "}
                        <li className="d-lg-inline text-muted h6 mb-0 me-lg-2">
                          <i className="uil uil-clock text-primary"></i>{' '}
                          {item.time}
                        </li>{" "}
                        <li className="d-lg-inline text-muted h6 mb-0">
                          <i className="uil uil-bill text-primary"></i>{" "}
                          {item.salary}
                        </li>
                      </ul>

                      <div className="mt-2">
                        <span className="badge bg-soft-primary me-1">Fulltime</span>
                        <span className="badge bg-soft-warning">Office</span>
                      </div>
                    </div>

                    <div className="position-absolute top-0 end-0 mt-3 me-3">
                      <Link
                        to="#"
                        className="btn btn-icon btn-pills btn-soft-primary"
                      >
                        <i className="uil uil-bookmark align-middle"></i>
                      </Link>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </section> */}
      </React.Fragment>
    );
  }
}

export default JobListThree;
