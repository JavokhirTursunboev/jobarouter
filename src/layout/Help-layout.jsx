import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Help() {
  return (
    <div className="help-layout">
      <h2>Webiste Help</h2>
      <p>This is part of Question and Answer and Contact page main part</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>

      {/* this belov part render child elements */}
      <Outlet />
    </div>
  );
}

export default Help;
