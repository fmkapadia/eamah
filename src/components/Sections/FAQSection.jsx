import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer:
        "We offer a variety of digital services including web development, digital marketing, and SEO.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "The time required depends on the complexity of the project, but typically it takes between 4-6 weeks.",
    },
    {
      question: "What is your pricing model?",
      answer:
        "We offer both fixed-price and hourly-rate models depending on the project.",
    },
  ];

  return (
    <FAQWrapper>
      <h1 style={{ color: "#007bff", fontSize: "40px", marginBottom: "2rem" }}>
        Frequently Asked Questions
      </h1>
      <div
        className="faq-container"
        style={{
          color: "#6c757d",
          fontSize: "1.2rem",
          fontWeight: "Normal",
        }}
      >
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </FAQWrapper>
  );
};

// Styled components for FAQ styling
const FAQWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 2rem;
  text-align: left;

  h2 {
    text-align: center;
    margin-bottom: 1.5rem;
  }

  .faq-container {
    border-top: 1px solid #ddd;
  }

  .faq-item {
    border-bottom: 1px solid #ddd;
    padding: 1rem 0;
  }

  .faq-question {
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    h3 {
      margin: 0;
      font-weight: normal;
    }

    span {
      font-size: 24px;
    }
  }

  .faq-answer {
    margin-top: 0.5rem;
    padding-left: 1rem;
    color: #000;
  }
`;

export default FAQSection;
