import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

export const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div  className='container'>
      <Navbar color="light" light expand="md">
        <NavLink active tag={Link} to="/">
          ONBOARD
        </NavLink>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/CI">
                Create New Client
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={Link} to="/CTI">
                Company Trading INFO
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} tag={Link} to="/KYC">
                KYC
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/KYB">
                KYB
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/supporting-doc-kyb">
               Supporting Doc
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink tag={Link} to="/check-List">
                Check List
              </NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
