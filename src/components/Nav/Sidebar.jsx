import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import AboutUs from "../../screens/aboutUs";
import Eamah_logo from "../../assets/img/Eamah_logo.png";
import eamah_text from "../../assets/img/eamah_text.png";
import { Link as RouterLink } from "react-router-dom";
export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate lightBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <Img src={Eamah_logo} alt="Eamah Entreprenure" />
          <Img1 src={eamah_text} alt="Eamah Entreprenure" />
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          {/* <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </Link> */}
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            // className="whiteColor"
            style={{ padding: "10px 15px", fontSize: "1.2rem" }}
            to="/"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Home
          </RouterLink>
        </li>
        <li className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            // className="whiteColor"
            style={{ padding: "10px 15px", fontSize: "1.2rem" }}
            to="/aboutUs"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About Us
          </RouterLink>
        </li>

        {/* <DropdownWrapper className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            // className="whiteColor"
            style={{ padding: "10px 15px" }}
            to=""
            spy={true}
            smooth={true}
            offset={-60}
          >
            Products
          </RouterLink>
          <DropdownContent>
            <DropdownItem>
              <RouterLink to="/products/equipments">by Equipments</RouterLink>
            </DropdownItem>
            <DropdownItem>
              <RouterLink to="/products/company">by Company</RouterLink>
            </DropdownItem>
          </DropdownContent>
        </DropdownWrapper> */}
        <li className="semiBold font15 pointer">
          <RouterLink
            activeClass="active"
            style={{ padding: "10px 15px", fontSize: "1.2rem" }}
            to="/products"
            spy={true}
            smooth={true}
            offset={-80}
          >
            Products
          </RouterLink>
        </li>
        <li className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            // className="whiteColor"
            style={{ padding: "10px 15px", fontSize: "1.2rem" }}
            to="/blogs"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Blogs
          </RouterLink>
        </li>

        <li className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            // className="whiteColor"
            style={{ padding: "10px 15px", fontSize: "1.2rem" }}
            to="/contactUs"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Contact Us
          </RouterLink>
        </li>
      </UlStyle>
      {/* <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
          <a
            href="/"
            style={{ padding: "10px 30px 10px 0" }}
            className="whiteColor"
          >
            Log in
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="/"
            className="radius8 lightBg"
            style={{ padding: "10px 15px" }}
          >
            Get Started
          </a>
        </li>
      </UlStyle> */}
    </Wrapper>
  );
}
const Img = styled.img`
  width: 3rem;
  height: 30px;
  border-radius: 10px;
  margin-top: 5px;
`;
const Img1 = styled.img`
  width: 11rem;
  height: 2.2rem;
  align-items:center;
  }
`;
const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
  color: black;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
const DropdownWrapper = styled.li`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
  }
`;

const DropdownContent = styled.div`
  display: none;
  position: absolute;
  // background-color: white;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropdownItem = styled.div`
  padding: 12px 16px;
  white-space: nowrap;

  a {
    color: black;
    text-decoration: none;
  }

  &:hover {
    background-color: #f1f1f1;
  }
`;
