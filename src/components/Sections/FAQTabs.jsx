import React, { useState } from "react";
import styled from "styled-components";

const FAQSection = () => {
  // Set the initial active tab to match the renamed category, e.g., "Machines"
  const [activeTab, setActiveTab] = useState("Compression");
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Rename "Tablet Press" to "Machines" (or any other name you prefer)
  const faqCategories = {
    Compression: [
      {
        question: "What are the types of tablet press machines?",
        answer:
          "Tablet press machines vary in size, shape, and configuration; the two most common types are: ",
        points: [
          "• Single press machines use a single station with one die and two punches (upper and lower). They are ideal for small-scale production or R&D environments, where small batches of pills are manufactured. ",
          "• Rotary tablet press machines are preferred for large-scale production, rotary machines have multiple tooling stations that rotate, significantly increasing output. They are widely used in the pharmaceutical and industrial sectors for mass production of tablets. ",
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
          "What factors contribute to increasing tablet production speed? ",
        answer:
          "One key factor in boosting tablet production speed is the use of multi-tip tooling, which allows for multiple tablets to be pressed simultaneously. Additionally, fine-tuning machine parameters (compression force, punch speed, etc.) ensures efficient and consistent production. ",
        points: [],
      },
      {
        question: "Is tablet shape important in the production process? ",
        answer:
          "Tablet shape plays a crucial role in the production process. Proper tablet shaping ensures product identity and impacts user experience and compliance. Adjusting your press machine for uniform width, thickness, and shape ensures the tablets produced are consistent in size and quality, essential for regulatory compliance and branding. ",
        points: [],
      },
      {
        question: "How often is it recommended to clean a tablet press?  ",
        answer:
          "Regular cleaning and maintenance are essential to avoid contamination and ensure consistent production. Dust and other contaminants can negatively affect tablet quality. It's important to: ",
        points: [
          "• Vacuum-clean the machine regularly to remove dust and debris.",
          "• Wipe surfaces with a disinfectant. ",
          "• Release pressure from the punches after use. ",
          "• Call a professional for repairs if there is any sign of wear or tear. Eamah offers a wide range of products (cleaning kits, etc.) and consulting service to ensure your tablet press is kept in optimum state. ",
        ],
      },
      {
        question: "What to consider when purchasing a tablet press? ",
        answer:
          "Choosing the right machine can be challenging, here are some key factors we advise our clients to consider: ",
        points: [
          "• Type of press: Decide between single or rotary presses based on your production scale. ",
          "• Number of stations: Ensure your press has enough tooling stations to meet your production needs. ",
          "• Safety features: Look for machines with overload protection and emergency stop functions.  ",
          "• Product changeover and ease of use: Features like quick changeovers and minimal downtime can boost productivity. ",
          "• Compliance: Ensure the machine meets quality standards like GMP and ISO certifications to align with regulatory requirements",
        ],
      },
    ],
    Encapsulation: [
      {
        question: "Why do you need a capsule filling machine? ",
        answer:
          "Capsule filling machines are essential for industries that require precise and efficient filling of capsules. They are used in pharmaceuticals, dietary supplements, and nutrition products, handling various materials such as hard and soft gelatin capsules, powders, and liquids. By automating the capsule-filling process, these machines ensure accuracy, consistency, and efficiency while minimizing wastage, making them indispensable for commercial use. Eamah’s capsule filling machines are integral to increasing production speed while maintaining product quality. ",
        points: [
          "• Manual Capsule Filling Machines: Ideal for small-scale production or research, they are operated by hand and offer control and simplicity. ",
          "• Semi-Automatic Capsule Filling Machines: These machines combine manual feeding with automatic capsule filling, offering a balance between productivity and cost",
          "• Automatic Capsule Filling Machines: Fully automated and ideal for high-volume production, these machines are equipped with multiple filling stations for maximum efficiency and speed. ",
        ],
      },
      {
        question:
          "How does capsule filling machine benefit commercial operations? ",
        answer:
          "Capsule filling machines are beneficial for mass production, especially in pharmaceutical and supplement manufacturing. Our machines offer significant cost savings by producing large volumes of capsules with consistent accuracy. Additionally, capsule fillers ensure homogeneous filling, reducing wastage and errors. This results in lower production costs and improved operational efficiency for commercial users. ",
        points: [],
      },
      {
        question: "What are the different types of capsule filling machines? ",
        answer: "There are three primary types of capsule filing machines:  ",
        points: [
          "• Manual Capsule Filling Machines: Ideal for small-scale production or research, they are operated by hand and offer control and simplicity. ",
          "• Semi-Automatic Capsule Filling Machines: These machines combine manual feeding with automatic capsule filling, offering a balance between productivity and cost",
          "• Automatic Capsule Filling Machines: Fully automated and ideal for high-volume production, these machines are equipped with multiple filling stations for maximum efficiency and speed. ",
        ],
      },
      {
        question: "How many capsules can be filled per cycle?  ",
        answer:
          "The number of capsules filled per cycle depends on the machine model and type. Manual capsule filling machines can fill up to 300 capsules per cycle, whereas semi-automatic and automatic machines can fill thousands of capsules in the same period. Automatic filling machines can fill up to 200,000 capsules/hour. It’s important to choose a machine with the appropriate capacity based on your business needs. ",
        points: [],
      },
      {
        question: "What capsule sizes are available for filling? ",
        answer:
          "Capsule filling machines can accommodate various capsule sizes, typically ranging from 00 (the largest) to 5 (the smallest). Selecting the right size depends on the dosage and formulation requirements of your product. ",
        points: [],
      },
      {
        question:
          "What is the recommended maintenance for capsule filling machines? ",
        answer:
          "Regular maintenance is essential for ensuring the optimal performance and longevity of your capsule filling machine. Routine cleaning is important to prevent contamination and keep the machine running smoothly. Eamah offers professional solutions involving regular inspection for any mechanical, electrical and electronic issues to prolong its lifespan and ensure reliable production. ",
        points: [],
      },
      {
        question:
          "What factors should you consider when purchasing a capsule filling machine? ",
        answer:
          "When selecting a capsule filling machine, consider the following factors: ",
        points: [
          "• Brand reliability: Choose a reputable brand with a proven track record.",
          "• Production capacity: Ensure the machine can meet the volume requirements of your business. ",
          "• Ease of use and maintenance: Look for machines with intuitive controls and easy maintenance. ",
          "• Safety and technical features: Ensure the machine includes features like overload protection and easy product changeover to improve efficiency and safety. ",
          "• Compliance: Check if the machine meets industry standards and certifications, such as GMP compliance.",
        ],
      },
    ],
    Packaging: [
      {
        question:
          "What types of pharmaceutical packaging machines are available? ",
        answer: "Common types include: ",
        points: [
          "• Blister packaging machines for capsules and tablets. ",
          "• Filling and sealing machines for liquids or creams. These machines vary in automation level (manual, semi-automatic, or fully automatic) and are selected based on product and production needs. ",
          "• Pouch packaging machines for powders, liquids, or tablets. ",
          "• Cartoning machines for placing products in cartons. ",
        ],
      },
      {
        question:
          "What are the benefits of using automated packaging machines? ",
        answer:
          "Automated machines offer high-speed production, precision in packaging, minimal human intervention, and reduced wastage. They ensure consistent, safe, and tamper-proof packaging, which is crucial for regulatory compliance in pharmaceuticals. They also provide versatility, allowing for multiple formats and quick changeovers​. ",
        points: [],
      },
      {
        question: "How does a blister packaging machine work? ",
        answer:
          "Blister packaging machines encapsulate tablets or capsules in individual sealed cavities. These machines are ideal for protecting products from moisture and contaminants and ensuring accurate dosing. They come in various models, from entry-level for small volumes to advanced machines for high output production. Eamah offers a wide range of products and services for Alu-Alu, Automatic and Semi-automatic packaging machines. ",
        points: [],
      },
      {
        question:
          "Can packaging machines handle different product types and formats? ",
        answer:
          "Modern packaging machines are designed to handle a wide range of products, including powders, liquids, gels, and solids. Some machines can produce various packaging styles such as sachets, pouches, or blister packs, providing flexibility for manufacturers​.",
        points: [],
      },
      {
        question:
          "What is the recommended maintenance for packaging machines? ",
        answer:
          "Routine maintenance is necessary to ensure the machine runs efficiently and avoids costly downtime. Proper cleaning, lubrication, and timely inspections help prevent wear and tear. For advanced repairs or servicing, it’s best to consult professionals​. ",
        points: [
          "• Daily cleaning of machine components and proper lubrication are key to avoiding contamination and wear.  ",
          "• Inspect critical parts like sealing heads and conveyor systems regularly, replacing worn components when necessary.",
          "• Recalibrating machine settings and keeping software updated also helps maintain efficiency. ",
          "• Scheduling professional servicing ensures thorough inspection and optimal performance. ",
        ],
      },
      {
        question:
          "What factors should you consider when purchasing a packaging machine? ",
        answer:
          "Depending on the type of product packaged, key factors include the volume of production, machine versatility, automation level, and compliance with industry standards (like cGMP). Choosing a reliable brand with strong global support is an important component in developing a reliable pharmaceutical product. ",
        points: [],
      },
    ],
    Other: [
      {
        question:
          "How does a liquid filling machine help maintain hygiene standards? ",
        answer:
          "Liquid filling machines are designed to maintain strict hygiene standards, preventing contamination during the filling process. With automatic filling, there is minimal human contact, reducing the risk of errors and contamination. This is particularly important for sensitive products in the pharmaceutical and food industries. ",
        points: [],
      },
      {
        question:
          "What is the production capacity of liquid bottle filling machines? ",
        answer:
          "Liquid bottle filling machines can fill more than 80 bottles per minute (50 to 500 mL capacity), making them highly efficient for high-volume production. This speed helps pharmaceutical companies meet large batch volumes at accuracy and low downtime. ",
        points: [],
      },
      {
        question:
          "What industries benefit from using liquid bottle filling machines?  ",
        answer:
          "These machines are used across multiple industries, including pharmaceuticals for packaging medicines and syrups, the food industry for filling beverages and oils, and the cosmetics industry for products like lotions and oils. The versatility of Eamah machines allow compatibility with different container types, such as vials, tubes, and bottles. ",
        points: [],
      },
      {
        question:
          "Are capsule sorter machines necessary for all production lines? ",
        answer:
          "Capsule sorter machines are highly recommended for high-volume production lines where consistency and quality control are critical. Pharmaceutical companies producing large batches benefit from these machines to ensure that only perfectly filled and sealed capsules reach the market, reducing the risk of product recalls or customer complaints. ",
        points: [],
      },
      {
        question: "Why is powder dedusting essential for tablet production? ",
        answer:
          "Excess powder can affect the appearance, quality, and performance of the tablets, and may even interfere with the packaging process. A deduster guarantees that each tablet is dust-free before moving to the next production stage. ",
        points: [],
      },
      {
        question: "How often should powder deduster machines be maintained? ",
        answer:
          "Regular maintenance is essential to keep powder deduster machines running efficiently. Cleaning and inspecting critical components, such as vibrators and filters, is necessary to prevent blockages and wear. At Eamah, we offer professional maintenance services to ensure your dedusting machine operates at its best and meets quality standards. ",
        points: [],
      },
    ],
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setActiveIndex(null); // Reset the expanded FAQ when switching tabs
  };

  return (
    <FAQWrapper>
      <h1 style={{ color: "#007bff", fontSize: "40px", marginBottom: "2rem" }}>
        Frequently Asked Questions
      </h1>

      {/* Tab Navigation */}
      <TabContainer>
        {Object.keys(faqCategories).map((category) => (
          <Tab
            key={category}
            active={activeTab === category}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </Tab>
        ))}
      </TabContainer>

      {/* FAQ Content */}
      <div className="faq-container">
        {faqCategories[activeTab].map((item, index) => (
          <div key={index} className="faq-item">
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <h3>{item.question}</h3>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="faq-answer">
                <p>{item.answer}</p>
                {item.points.length > 0 && (
                  <ul>
                    {item.points.map((point, idx) => (
                      <li key={idx} style={{ marginLeft: "2rem" }}>
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

// Styled components for styling
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
      font-size: 1.2rem;
    }

    span {
      font-size: 1.2rem;
    }
  }

  .faq-answer {
    margin-top: 0.5rem;
    padding-left: 1rem;
    p {
      color: #6c757d;
      font-size: 1.2rem;
    }
    li {
      color: #6c757d;
      font-size: 1.2rem;
    }
  }
`;

const TabContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
  gap: 1.5rem;
  //   border: 1px solid #ddd;
`;

const Tab = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  // border: ${(props) => (props.active ? "1px solid #000" : "#fff")};
  border: 1px solid #000;
  background-color: ${(props) => (props.active ? "#0397DD" : "#fff")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-weight: normal;
  border-radius: 20px;
  font-size: 16px;
`;

export default FAQSection;
