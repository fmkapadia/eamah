import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What are the types of tablet press machines?",
      answer:
        "We offer a variety of digital services including web development, digital marketing, and SEO.",
      points: [
        " • Single press machines use a single station with one die and two punches (upper and lower). They are ideal for small-scale production or R&D environments, where small batches of pills are manufactured.",
        "	• Rotary tablet press machines are preferred for large-scale production, rotary machines have multiple tooling stations that rotate, significantly increasing output. They are widely used in the pharmaceutical and industrial sectors for mass production of tablets",
      ],
    },
    {
      question: "What are the applications of a tablet press?",
      answer:
        "Tablet press machines are versatile and used across various industries, including pharmaceuticals, food, and confectionery. They help create a variety of products like medicinal drugs, chewable tablets, and dietary supplements. Rotary tablet presses are especially effective in handling different material formulations, such as active drugs, lubricants, and disintegrants.",
      points: [],
    },
    {
      question:
        "What factors contribute to increasing tablet production speed?",
      answer:
        "One key factor in boosting tablet production speed is the use of multi-tip tooling, which allows for multiple tablets to be pressed simultaneously. Additionally, fine-tuning machine parameters (compression force, punch speed, etc.) ensures efficient and consistent production.",
      points: [],
    },
    {
      question: "Is tablet shape important in the production process?",
      answer:
        "Tablet shape plays a crucial role in the production process. Proper tablet shaping ensures product identity and impacts user experience and compliance. Adjusting your press machine for uniform width, thickness, and shape ensures the tablets produced are consistent in size and quality, essential for regulatory compliance and branding.",
      points: [],
    },
    {
      question: "How often is it recommended to clean a tablet press?",
      answer:
        "Regular cleaning and maintenance are essential to avoid contamination and ensure consistent production. Dust and other contaminants can negatively affect tablet quality. It's important to:",
      points: [
        " •	Vacuum-clean the machine regularly to remove dust and debris.",
        " •	Wipe surfaces with a disinfectant.",
        " •	Release pressure from the punches after use.",
        " •	Call a professional for repairs if there is any sign of wear or tear. Eamah offers a wide range of products (cleaning kits, etc.) and consulting service to ensure your tablet press is kept in optimum state.",
      ],
    },
    {
      question: "What to consider when purchasing a tablet press?",
      answer:
        "Choosing the right machine can be challenging, here are some key factors we advise our clients to consider:",
      points: [
        "•	Type of press: Decide between single or rotary presses based on your production scale",
        "•	Number of stations: Ensure your press has enough tooling stations to meet your production needs.",
        "•	Safety features: Look for machines with overload protection and emergency stop functions.",
        "•	Product changeover and ease of use: Features like quick changeovers and minimal downtime can boost productivity.",
        "•	Compliance: Ensure the machine meets quality standards like GMP and ISO certifications to align with regulatory requirements.",
      ],
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
                {item.points && (
                  <ul>
                    {item.points.map((point, index) => (
                      <li key={index} style={{ marginLeft: "2rem" }}>
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
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
  padding: 8rem;
  text-align: left;

   @media (max-width: 768px) {
    padding: 4rem;
  }

  @media (max-width: 480px) {
    padding: 2rem;
  }

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
