import "./css/footer.css";

function Footer() {
  return (
    <div className="footer-wrapper">
      <footer className="footer">
        <div className="footer__addr">
          <h1 className="footer__logo">Denger Scripts</h1>

          <h2>Contact</h2>

          <address>
            <a className="footer__btn" href="mailto:halltoonies@gmail.com">
              Email
            </a>
            <a
              className="footer__btn"
              href="https://www.linkedin.com/in/anthony-hall-500674261/"
              target={"_blank"}
            >
              LinkedIn
            </a>
            <a
              className="footer__btn"
              href="https://github.com/DengerScript"
              target={"_blank"}
            >
              Github
            </a>
          </address>
        </div>

        <ul className="footer__nav">
          <li className="nav__item">
            <h2 className="nav__title">Legal</h2>

            <ul className="nav__ul">
              <li>
                <a href="#">Privacy Policy</a>
              </li>

              <li>
                <a href="#">Terms of Use</a>
              </li>

              <li>
                <a href="#">Sitemap</a>
              </li>
            </ul>
          </li>
        </ul>

        <div className="legal">
          <p>&copy; 2023 Denger Scripts. All rights reserved.</p>

          <div className="legal__links"></div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
