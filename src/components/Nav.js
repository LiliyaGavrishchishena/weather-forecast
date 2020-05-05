import React from 'react';
//reactstrap
import { Navbar, NavbarBrand } from 'reactstrap';

const Nav = () => {
  return (
    <Navbar color="danger" dark expand="md" className="mb-2">
      <NavbarBrand href="/">Weather forecast</NavbarBrand>
    </Navbar>
  );
};

export default Nav;
