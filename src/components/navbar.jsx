import logo from "../assets/logo-text.png";
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
  <img src={logo} alt="Dev Stack" />
</div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#technologies">Technologies</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="navbar-actions">
        <button className="sign-in">Sign In</button>
        <button className="sign-up">Sign Up</button>
      </div>
    </nav>
  );
}

export default Navbar;