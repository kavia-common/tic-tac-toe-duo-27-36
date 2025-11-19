import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Sidebar.css";

/**
 * PUBLIC_INTERFACE
 * Floating Sidebar component with a glass/blurred background, modern floating buttons, and responsive/collapsed controls.
 *
 * Props:
 *   items: array of { id, label, icon? }
 *   onSelect: function(itemId)
 *   position: "left" | "right" (default: left)
 *   collapsed: boolean (default: false)
 */
function Sidebar({
  items,
  onSelect,
  position = "left",
  collapsed: collapsedProp = false,
  hide = false
}) {
  // Hooks must always be called, even if the sidebar is hidden
  const [collapsed, setCollapsed] = useState(collapsedProp);

  // If the Sidebar should be hidden, render nothing
  if (hide) return null;

  // Toggles the sidebar between collapsed/expanded
  const handleToggle = () => setCollapsed((c) => !c);

  // Accessibility position and justify class
  const sideClass =
    position === "right" ? "sidebar--right" : "sidebar--left";

  // Compact view for mobile: automatically collapse on small screens
  // We use a simple CSS media query for compact styles

  return (
    <nav
      className={`sidebar ${sideClass} ${collapsed ? "sidebar--collapsed" : ""}`}
      aria-label="Floating Sidebar"
      role="navigation"
    >
      <button
        className="sidebar__toggle"
        aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        onClick={handleToggle}
        type="button"
      >
        <span aria-hidden="true">
          {collapsed ? "»" : "«"}
        </span>
      </button>
      <ul className="sidebar__list" role="list">
        {items.map(({ id, label, icon }, idx) => (
          <li key={id || idx} className="sidebar__item" role="none">
            <button
              className="sidebar__btn"
              onClick={() => onSelect && onSelect(id)}
              aria-label={label}
              role="menuitem"
              type="button"
              tabIndex={0}
            >
              {icon ? (
                <span className={`sidebar__btn-icon`} aria-hidden="true">
                  {icon}
                </span>
              ) : null}
              <span
                className={`sidebar__btn-label${collapsed ? " sidebar__btn-label--collapsed" : ""}`}
                aria-hidden={collapsed}
              >
                {label}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

Sidebar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.node,
    })
  ).isRequired,
  onSelect: PropTypes.func.isRequired,
  position: PropTypes.oneOf(["left", "right"]),
  collapsed: PropTypes.bool,
  hide: PropTypes.bool, // Optional hide prop
};

Sidebar.defaultProps = {
  position: "left",
  collapsed: false,
  hide: false,
};

export default Sidebar;
