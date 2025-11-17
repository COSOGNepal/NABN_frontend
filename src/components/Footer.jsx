import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section footer-about">
            <h3>NAGN Nepal</h3>
            <p>
              Empowering Nepal&apos;s Adolescent Girls.
            </p>
          </div>
          <div className="footer-section footer-links-section">
            <h3>Quick Links</h3>
            <div className="footer-links">
              <Link to="/about">About Us</Link>
              <Link to="/events">Our Events</Link>
              <Link to="/contact">Contact Us</Link>
            </div>
          </div>
          <div className="footer-section footer-contact">
            <h3>Contact Info</h3>
            <p>
              <a href="https://www.facebook.com/kishorisanjal" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span>Follow Us</span>
              </a>
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              Kathmandu, Nepal
            </p>
            <p>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              nationaladolescentgirlnetwork@gmail.com
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} National Adolescent Girls&apos; Network Nepal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;