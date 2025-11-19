import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

/**
 * PUBLIC_INTERFACE
 * Navbar component for the Tic Tac Toe app.
 * Displays the game title, navigation links, Reset button, and an optional Logout button.
 *
 * Props:
 *   onReset: Function to handle game reset (required)
 *   onLogout: Optional function to handle logout; if not given, logout is hidden/no-op.
 */
function Navbar({ onReset, onLogout }) {
  const showLogout = typeof onLogout === "function";

  return (
    <nav className="navbar">
      <div className="navbar__title">Tic Tac Toe</div>
      <div className="navbar__links">
        {/* Placeholder links for navigation, can be replaced with <NavLink> if routing is added */}
        <button className="navbar__link" tabIndex={0}>
          Home
        </button>
        <button className="navbar__link" tabIndex={0}>
          About
        </button>
        {showLogout && (
          <button
            className="navbar__link navbar__logout-btn"
            tabIndex={0}
            style={{
              color: "#fff",
              background: "linear-gradient(90deg, #06b6d4 65%, #3b82f6 100%)",
              fontWeight: 600,
            }}
            onClick={onLogout}
            aria-label="Logout"
          >
            Logout
          </button>
        )}
      </div>
      <button className="navbar__reset-btn" onClick={onReset}>
        Reset
      </button>
    </nav>
  );
}

Navbar.propTypes = {
  onReset: PropTypes.func.isRequired,
  onLogout: PropTypes.func,
};

export default Navbar;
