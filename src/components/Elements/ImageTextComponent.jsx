import React from "react";
import styled from "styled-components";

const ImageTextComponent = ({
  image,
  text,
  heading,
  subHeading,
  isImageRight,
  bgStyle,
}) => {
  return (
    <Wrapper bgStyle={bgStyle}>
      <ContentWrapper isImageRight={isImageRight}>
        {isImageRight ? (
          <>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <SubHeading>{subHeading}</SubHeading>
              <Text>{text}</Text>
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
              <Text>{text}</Text>
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
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: ${(isImageRight) => (isImageRight ? "row-reverse" : "row")};
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ImageWrapper = styled.div`
  width: 50%;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 600px;
  object-fit: contain;
`;

const TextWrapper = styled.div`
  width: 50%;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const SubHeading = styled.h4`
  font-size: 18px;
  color: #007bff;
`;

const Text = styled.p`
  font-size: 1.2rem;
`;
export default ImageTextComponent;
