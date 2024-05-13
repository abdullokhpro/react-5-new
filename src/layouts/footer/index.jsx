import React from "react";
import footerLogo from "../../assets/footer/footer-logo.svg";
import footerWhatsup from "../../assets/footer/footer__whatsupp.svg";
import footerFacebook from "../../assets/footer/facebook__icon.svg";
import footerInstagram from "../../assets/footer/instagram__icon.svg";
import footerTikTok from "../../assets/footer/icon__icon.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__items">
          <div className="footer__item">
            <img
              className="footer__logo"
              src={footerLogo}
              alt="here is the logo of website"
            />
            <p className="footer__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="footer__item">
            <h3 className="footer__title">Contact us</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">E: info@example.com</a>
              </li>
              <li className="footer__item">
                <a href="#">P: +94 7670000000</a>
              </li>
              <li className="footer__item">
                <a href="#">E: info@example.com</a>
              </li>
              <li className="footer__item">
                <a href="#">Kalubowila, Dehiwela</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <h3 className="footer__title">Useful links</h3>
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#">Shop All </a>
              </li>
              <li className="footer__item">
                <a href="#">Tempered Glass</a>
              </li>
              <li className="footer__item">
                <a href="#">Back-cover</a>
              </li>
              <li className="footer__item">
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__item">
            <ul className="footer__list">
              <li className="footer__item footer__icons">
                <img src={footerWhatsup} alt="here is whatsupp icon" />
                <a href="#">Shop All </a>
              </li>
              <li className="footer__item footer__icons">
                <img src={footerFacebook} alt="her is facebook icon" />
                <a href="#">Tempered Glass</a>
              </li>
              <li className="footer__item footer__icons">
                <img src={footerInstagram} alt="here is Instagram icon" />
                <a href="#">Back-cover</a>
              </li>
              <li className="footer__item footer__icons">
                <img src={footerInstagram} alt="here is Instagram icon" />
                <a href="#">About Us</a>
              </li>
              <li className="footer__item footer__icons">
                <img src={footerTikTok} alt="here is tiktok icon" />
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
