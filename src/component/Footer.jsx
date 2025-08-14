import React, { useState } from 'react';
import Logo from '../assets/LOGO 1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faApple,
  faGooglePlay,
  faFacebook,
  faInstagram,
  faSnapchat,
  faTiktok,
} from '@fortawesome/free-brands-svg-icons';

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.endsWith('@gmail.com')) {
      alert('Please enter a valid Gmail address.');
      return;
    }
    alert(`Subscribed with: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer_section text-white p-0">
      <div className="_top_footer_section pb-3">
        <div className="container">
          <div className="row">
            {/* Logo & App Buttons */}
            <div className="col-sm-4 mb-4 pe-4">
              <img
                src={Logo}
                alt="Logo"
                style={{ maxWidth: '180px', height: 'auto' }}
              />
              <div className="row py-4">
                <div className="col-sm-6 mb-3">
                  <button className="btn btn-dark w-100 d-flex align-items-center px-3 py-2">
                    <FontAwesomeIcon icon={faApple} className="me-2 fs-4" />
                    <div className="text-start">
                      <small className="d-block small-label">Download Our App</small>
                      <strong>App Store</strong>
                    </div>
                  </button>
                </div>
                <div className="col-sm-6 mb-3">
                  <button className="btn btn-dark w-100 d-flex align-items-center px-3 py-2">
                    <FontAwesomeIcon icon={faGooglePlay} className="me-2 fs-4" />
                    <div className="text-start">
                      <small className="d-block small-label">Get it on</small>
                      <strong>Google Play</strong>
                    </div>
                  </button>
                </div>
              </div>
              <small>
                Company # 490039-445, Registered with House of companies.
              </small>
            </div>

            {/* Subscription Section */}
            <div className="col-sm-4 mb-5 px-5">
              <h5 className="fw-bold mb-2 pb-3">Get Exclusive Deals in your Inbox</h5>
              <form onSubmit={handleSubmit}>
                <div className="input-group my-3" style={{ borderRadius: '50px', overflow: 'hidden' }}>
                  <input
                    type="email"
                    className="form-control py-2"
                    placeholder="youremail@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <button
                    type="submit"
                    className="btn text-white"
                    style={{ backgroundColor: '#ff9800' }}
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              <p className="mt-2 small-label">
                we won’t spam, read our email policy
              </p>

              {/* Social Icons */}
              <div className="mt-3 d-flex gap-3 social-icons">
                <FontAwesomeIcon icon={faFacebook} className="social-icon facebook" />
                <FontAwesomeIcon icon={faInstagram} className="social-icon instagram" />
                <FontAwesomeIcon icon={faSnapchat} className="social-icon snapchat" />
                <FontAwesomeIcon icon={faTiktok} className="social-icon tiktok" />
              </div>
            </div>

            {/* Legal Links */}
            <div className="col-sm-2 mb-4">
              <h5 className="fw-bold mb-3">Legal Pages</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Terms and Conditions</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Privacy</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Cookies</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Modern Slavery Statement</a>
                </li>
              </ul>
            </div>

            {/* Important Links */}
            <div className="col-sm-2 mb-4">
              <h5 className="fw-bold mb-3">Important Links</h5>
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Get help</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Add your restaurant</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Sign up to deliver</a>
                </li>
                <li className="list-group-item bg-transparent">
                  <a href="#" className="text-decoration-none">Create a business account</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="under_footer_section border-top py-3 text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-sm-4 text-start">
              <small>© 2024 Yeasin Arafat Nayem Bhuiyan. All Rights Reserved.</small>
            </div>
            <div className="col-sm-8 text-sm-end text-start">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white text-decoration-none">Privacy Policy</a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white text-decoration-none">Terms</a>
                </li>
                <li className="list-inline-item me-3">
                  <a href="#" className="text-white text-decoration-none">Pricing</a>
                </li>
                <li className="list-inline-item">
                  <a href="#" className="text-white text-decoration-none">
                    Do not sell or share my personal information
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;