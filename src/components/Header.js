function Header({ darkMode, toggleTheme }) {

  return (

    <header className="header">

      <h2>📝 Notes App</h2>

      <button
        className="theme-btn"
        onClick={toggleTheme}
      >

        {darkMode ? "☀️ Light" : "🌙 Dark"}

      </button>

    </header>

  );

}

export default Header;