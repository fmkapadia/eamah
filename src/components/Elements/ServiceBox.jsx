import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/Quality";
import MonitorIcon from "../../assets/svg/Services/Price";
import BrowserIcon from "../../assets/svg/Services/Reliable";
import PrinterIcon from "../../assets/svg/Services/Packaging";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;

  switch (icon) {
    case "roller":
      getIcon = <RollerIcon />;
      break;
    case "monitor":
      getIcon = <MonitorIcon />;
      break;
    case "browser":
      getIcon = <BrowserIcon />;
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 20px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  font-size: 1rem;
  color: #000;
`;
