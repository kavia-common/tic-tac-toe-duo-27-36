import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';
import Sidebar from './Sidebar';

// Example (minimal SVG icons inline for demonstration)
const iconList = {
  home: (
    // Home icon SVG
    <svg viewBox="0 0 20 20" width="1.25em" height="1.25em" fill="none" stroke="currentColor"><path d="M2.5 9.9 10 3.5l7.5 6.4M4 17.001V9.9M16 17.001v-7.1M8 17.001v-4h4v4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
  ),
  info: (
    // Info icon SVG
    <svg viewBox="0 0 20 20" width="1.23em" height="1.23em" fill="none" stroke="currentColor"><circle cx="10" cy="10" r="8" strokeWidth="1.7"/><path d="M10 13v-3.3m0-2V8" strokeWidth="1.7" strokeLinecap="round"/></svg>
  ),
  user: (
    // User/person icon SVG
    <svg viewBox="0 0 20 20" width="1.23em" height="1.23em" fill="none" stroke="currentColor"><circle cx="10" cy="7.2" r="3" strokeWidth="1.6"/><path d="M16.5 16.5c0-3.037-2.463-5.5-5.5-5.5s-5.5 2.463-5.5 5.5" strokeWidth="1.6" strokeLinecap="round"/></svg>
  ),
};
// Placeholder for the main game reset handler
// PUBLIC_INTERFACE
function resetGame() {
  // TODO: integrate with actual game logic if present
  // For now, this just reloads the page as a placeholder
  window.location.reload();
}

/**
 * PUBLIC_INTERFACE
 * Main App component for Tic Tac Toe Duo.
 * Passes the optional demo onLogout handler to Navbar.
 */
function App() {
  const [theme, setTheme] = useState('light');

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  // Demo logout handler (replace with real handler in production)
  const handleDemoLogout = () => {
    // eslint-disable-next-line no-alert
    alert("Demo: You clicked logout!");
    // console.log("Demo: Logged out."); // Alternative if alert not wanted.
  };

  return (
    <div className="App" style={{ position: "relative" }}>
      {/* Floating Sidebar for quick actions/navigation */}
      <Sidebar
        // Example items; in production, could be dynamic or via context/menu
        items={[
          { id: "home", label: "Home", icon: iconList.home },
          { id: "about", label: "About", icon: iconList.info },
          { id: "profile", label: "Profile", icon: iconList.user }
        ]}
        position="left"
        onSelect={(id) => {
          if (id === "home") window.alert("Navigating: Home");
          else if (id === "about") window.alert("About Sidebar Button!");
          else window.alert(`Sidebar item "${id}" selected`);
        }}
        // Remove the collapsed prop to default uncollapsed; or pass collapsed={true}
      />
      <Navbar onReset={resetGame} onLogout={handleDemoLogout} />
      <header className="App-header">
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? '🌙 Dark' : '☀️ Light'}
        </button>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Current theme: <strong>{theme}</strong>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
