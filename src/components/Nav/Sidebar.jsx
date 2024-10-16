import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/svg/Logo";
import AboutUs from "../../screens/aboutUs";
import { Link as RouterLink } from "react-router-dom";
export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate darkBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
          <h1 className="whiteColor font20" style={{ marginLeft: "15px" }}>
            fanatic
          </h1>
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
            className="whiteColor"
            style={{ padding: "10px 15px" }}
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
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="/aboutUs"
            spy={true}
            smooth={true}
            offset={-60}
          >
            About Us
          </RouterLink>
        </li>

        <DropdownWrapper className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
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
        </DropdownWrapper>
        <li className="semiBold font15 pointer">
          <RouterLink
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
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
            className="whiteColor"
            style={{ padding: "10px 15px" }}
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
  background-color: white;
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
