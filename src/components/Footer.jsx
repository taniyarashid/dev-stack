function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-brand">
          <h2>Dev Stack</h2>
          <p>
            Build your skills, explore technologies, and create your own
            developer stack.
          </p>

          <div className="footer-socials">
            <a href="#" aria-label="GitHub">GitHub</a>
            <a href="#" aria-label="Twitter">Twitter</a>
            <a href="#" aria-label="LinkedIn">LinkedIn</a>
          </div>
        </div>

        {/* Product */}
        <div className="footer-links">
          <h3>Product</h3>
          <a href="#technologies">Technologies</a>
          <a href="#stack">Your Stack</a>
          <a href="#projects">Projects</a>
        </div>

        {/* Company */}
        <div className="footer-links">
          <h3>Company</h3>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
          <a href="#careers">Careers</a>
        </div>

        {/* Legal */}
        <div className="footer-links">
          <h3>Legal</h3>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>© 2026 Dev Stack. All rights reserved.</p>

        <div>
          <a href="#privacy">Privacy</a>
          <a href="#terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;