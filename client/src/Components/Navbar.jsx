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
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/images/pp.jpg";
// import { load } from "dotenv/types";
import { Get } from "../actions/ciAction";

export const Header = (props) => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const loadData = (e) => {
    console.log("loading daata");
    dispatch(Get());
  };
  return (
    <div className="container">
      <Navbar color="light" light expand="md">
        <NavbarBrand>
          <a style={{ textDecoration: "none" }} href="#">
            VistaScale
            <img src={logo} style={{ width: 30, margin: -7, marginLeft: 10 }} />
          </a>
        </NavbarBrand>
        <NavLink
       
          onClick={(e) => {
            loadData(e);
          }}
          tag={Link}
          to="/"
        >
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
