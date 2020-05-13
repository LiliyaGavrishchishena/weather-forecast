import React from 'react';
//reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';

const Footer = () => {
  return (
    <Navbar
      color="secondary"
      dark
      expand="md"
      className="justify-content-center mb-2"
    >
      <NavbarBrand
        href="https://github.com/LiliyaGavrishchishena"
        target="_blank"
        rel="noopener noreferrer"
      >
        Github
      </NavbarBrand>
    </Navbar>
  );
};

export default Footer;
