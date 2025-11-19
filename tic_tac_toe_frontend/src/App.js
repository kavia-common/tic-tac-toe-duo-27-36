import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import './Navbar.css';

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
    <div className="App">
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
