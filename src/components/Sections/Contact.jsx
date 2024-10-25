import React from "react";
import styled from "styled-components";
import { useState } from "react";
import emailjs from "emailjs-com";
// Assets
import ContactImg1 from "../../assets/img/filling-cam-track.png";
import ContactImg2 from "../../assets/img/p33.png";
import ContactImg3 from "../../assets/img/TURRET.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    fname: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    emailjs
      .send(
        "service_eb6zzz9", // Replace with your EmailJS service ID
        "template_pd6zg4e", // Replace with your EmailJS template ID
        formData, // Form data to send
        "R8lahl78KsGy5i6Mj" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("Message successfully sent!");
        },
        (err) => {
          console.log("FAILED...", err);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <Wrapper id="contact">
      <div className="lightBg">
        <div className="container">
          <HeaderInfo>
            <h1 style={{ color: "#007bff", fontSize: "40px" }}>
              Let's get in touch
            </h1>
            {/* 6c757d */}
            <p style={{ color: "#000", fontSize: "1.2rem" }}>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </HeaderInfo>
          <div className="row" style={{ paddingBottom: "30px" }}>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Form onSubmit={handleSubmit}>
                <label style={{ color: "#000", fontSize: "1.2rem" }}>
                  First name:
                </label>
                <input
                  type="text"
                  id="fname"
                  name="fname"
                  value={formData.fname}
                  onChange={handleChange}
                  className="font20 "
                />
                <label style={{ color: "#000", fontSize: "1.2rem" }}>
                  Email:
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="font20 "
                />
                <label style={{ color: "#000", fontSize: "1.2rem" }}>
                  Subject:
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="font20 "
                />
                <label style={{ color: "#000", fontSize: "1.2rem" }}>
                  Message:
                </label>
                <textarea
                  rows="4"
                  cols="50"
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="font20 "
                />
              </Form>
              <SumbitWrapper className="flex">
                <ButtonInput
                  type="submit"
                  value="Send Message"
                  className="pointer animate radius8"
                  onClick={handleSubmit}
                  style={{
                    maxWidth: "220px",
                    color: "#fff",
                    fontSize: "1.1rem",
                    backgroundColor: "#007bff",
                  }}
                />
              </SumbitWrapper>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 flex">
              <div
                style={{ width: "50%" }}
                className="flexNullCenter flexColumn"
              >
                <ContactImgBox>
                  <img src={ContactImg1} alt="office" className="radius6" />
                </ContactImgBox>
                <ContactImgBox>
                  <img src={ContactImg2} alt="office" className="radius6" />
                </ContactImgBox>
              </div>
              <div style={{ width: "50%" }}>
                <div style={{ marginTop: "100px" }}>
                  <img src={ContactImg3} alt="office" className="radius6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px;
  align-self: flex-end;
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;
