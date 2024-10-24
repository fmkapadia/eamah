import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import Eamah_logo from "../../assets/img/Eamah_logo.png";
import eamahText from "../../assets/img/eamahText.jpeg";
export default function TopNavbar() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBg"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <RouterLink
            className="pointer flexNullCenter"
            to="home"
            smooth={true}
          >
            {/* <LogoIcon />
             */}
            <Img src={Eamah_logo} alt="Eamah Entreprenure" />
            <Img1 src={eamahText} alt="Eamah Entreprenure" />
            {/* <h1
              style={{
                marginLeft: "15px",
                fontWeight: "bold",
                color: "#0397DD",
              }}
            >
              Eamah Entrepreneur
            </h1> */}
          </RouterLink>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <BurgerIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Home
              </RouterLink>
            </li>
            <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/aboutUs"
                spy={true}
                smooth={true}
                offset={-80}
              >
                About Us
              </RouterLink>
            </li>
            <DropdownWrapper className="semiBold font15 pointer">
              <RouterLink to="" style={{ padding: "10px 15px" }}>
                Products
              </RouterLink>
              <DropdownContent>
                <DropdownItem>
                  <RouterLink to="/products/equipments">
                    by Equipments
                  </RouterLink>
                </DropdownItem>
                <DropdownItem>
                  <RouterLink to="/products/company">by Company</RouterLink>
                </DropdownItem>
              </DropdownContent>
            </DropdownWrapper>
            {/* <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/products"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Products
              </RouterLink>
            </li> */}
            {/* <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Clients
              </RouterLink>
            </li> */}
            <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/blogs"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Blogs
              </RouterLink>
            </li>
            {/* <li className="semiBold font15 pointer">
              <RouterLink
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="/careers"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Careers
              </RouterLink>
            </li> */}
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            {/* <li className="semiBold font15 pointer">
              <a href="/" style={{ padding: "10px 30px 10px 0" }}>
                Log in
              </a>
            </li> */}
            <li className="semiBold font15 pointer flexCenter">
              <a
                href="/contactUs"
                className="radius8 lightBg"
                style={{
                  padding: "10px 15px",
                  backgroundColor: "#0397DD",
                  color: "#fff",
                }}
              >
                Contact Us
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}
const Img = styled.img`
  width: 4rem;
  height: 40px;
  border-radius: 10px;
`;
const Img1 = styled.img`
  width: 16rem;
  height: 3rem;
`;
const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;
const NavInner = styled.div`
  position: relative;
  height: 100%;
`;
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;
const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;
const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
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
