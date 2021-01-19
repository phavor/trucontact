import React from "react";
import Button from "../Button";
import { Container } from "../Grids/Container";
import { HeaderStyles } from "./styles";
import { BsArrowRight as RightArrowIcon } from "react-icons/bs";
import TRUCSR_LOGO from "../../assets/images/TRUCSR-icon.png";

const Header = () => {
  return (
    <HeaderStyles>
      <Container className="container" padding="1rem 1rem 1rem 8rem">
        <div className="logo">
          <img src={TRUCSR_LOGO} alt="trucsr" />
        </div>
        <nav className="navigation">
          <ul>
            <a href="#services">
              <li>Services</li>
            </a>
            <a href="#about-us">
              <li>About Us</li>
            </a>
            <a href="#csr-academy">
              <li>CSR Academy</li>
            </a>
            <a href="#publications">
              <li>Publications</li>
            </a>
            <a href="#events">
              <li>Events</li>
            </a>
            <a href="#media">
              <li>Media</li>
            </a>
          </ul>

          <Button type="button" text="Contact Us" icon={<RightArrowIcon />} />
        </nav>
      </Container>
    </HeaderStyles>
  );
};

export default Header;