import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "../styles/components/header.scss";

export default function Header() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="WEALTH HEALTH Logo"
        />
        <h1>HRnet</h1>
      </Link>
    </nav>
  );
}
