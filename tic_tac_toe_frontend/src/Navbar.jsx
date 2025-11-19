import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

/**
 * PUBLIC_INTERFACE
 * Navbar component for the Tic Tac Toe app.
 * Displays the game title, navigation links, and Reset button.
 *
 * Props:
 *   onReset: Function to handle game reset (required)
 */
function Navbar({ onReset }) {
  return (
    <nav className="navbar">
      <div className="navbar__title">Tic Tac Toe</div>
      <div className="navbar__links">
        {/* Placeholder links for navigation, can be replaced with <NavLink> if routing is added */}
        <button className="navbar__link" tabIndex={0}>Home</button>
        <button className="navbar__link" tabIndex={0}>About</button>
      </div>
      <button className="navbar__reset-btn" onClick={onReset}>
        Reset
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default Navbar;
