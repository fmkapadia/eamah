import React from "react";
import styled from "styled-components";
import { useState } from "react";
const ImageTextComponent = ({
  image,
  ftext,
  sText,
  lText,
  heading,
  subHeading,
  isImageRight,
  bgStyle,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <Wrapper bgStyle={bgStyle}>
      <ContentWrapper isImageRight={isImageRight}>
        {isImageRight ? (
          <>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <SubHeading>{subHeading}</SubHeading>
              <Text>
                {ftext}
                {isExpanded && <span><br/><br/><p>{sText}</p></span>}
                {isExpanded && <span><br/><br/><p>{lText}</p></span>}

              </Text>
              <ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </TextWrapper>

            <ImageWrapper>
              <StyledImage src={image} alt={heading} />
            </ImageWrapper>
          </>
        ) : (
          <>
            <ImageWrapper>
              <StyledImage src={image} alt={heading} />
            </ImageWrapper>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <SubHeading>{subHeading}</SubHeading>
              <Text>
                {ftext}
                {isExpanded && <span><br/><p>{sText}</p></span>}
                {isExpanded && <span><br/><p>{lText}</p></span>}

              </Text>
              <ShowMoreButton onClick={() => setIsExpanded(!isExpanded)}>
                {isExpanded ? "Show Less" : "Show More"}
              </ShowMoreButton>
            </TextWrapper>
          </>
        )}
      </ContentWrapper>
    </Wrapper>
  );
};

// Styled Components
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  //   margin: 20px 0;
  background-color: ${({ bgStyle }) =>
    bgStyle === "dark" ? "#f5f5f5" : "#fff"};
  color: ${({ bgStyle }) => (bgStyle === "dark" ? "#000" : "#6c757d")};
  padding: 60px;
  @media (max-width: 768px) {
    padding: 30px;
  }
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${(isImageRight) => (isImageRight ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width:1220px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const ShowMoreButton = styled.button`
  background-color: transparent;
  border: none;
  color: blue;
  cursor: pointer;
  margin-top: 10px;
  font-size: 1rem;
  text-decoration: underline;
  &:hover {
    text-decoration: none;
  }
`;
const ImageWrapper = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
    margin-bottom: 20px; /* Spacing between image and text */
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
  @media (max-width: 768px) {
    // max-height: 300px;
    object-fit: cover;
    overflow: hidden;
  }

  @media (max-width: 480px) {
    // max-height: 200px;
    object-fit: cover;
    overflow: hidden;
  }
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 20px;
  @media (max-width: 768px) {
    width: 100%; /* Full width on smaller screens */
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const SubHeading = styled.h4`
  font-size: 18px;
  color: #007bff;
  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

const Text = styled.p`
  font-size: 1.2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
  }
`;
export default ImageTextComponent;
