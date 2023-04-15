import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <h4>copyright@2022 AJ</h4>
        <span className="foo-connect">
   < NavLink to="/" target="_blank">
            <i className="fa-brands fa-linkedin"></i>
          </NavLink>
          <NavLink to="/" target="_blank">
            <i className="fa-brands fa-github"></i>
          </NavLink>
          <NavLink to="/" target="_blank">
            <i className="fa-brands fa-facebook"></i>
          </NavLink>
          <NavLink to="/" target="_blank">
            <i className="fa-brands fa-instagram"></i>
          </NavLink>
        </span>
      </footer>
    </>
  )
};

export default Footer;
