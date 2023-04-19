import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h2>Trippy</h2>
          <p>Choose your favourite Destination.</p>
        </div>
        <div>
          <a href="https://www.facebook.com/people/Trippers-Spot/100086385791121/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/trippers_spot/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="https://twitter.com/spot_worldwide">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>

      <div className="Bottom">
        <div>
          <h4>Project</h4>
          <a href="/">Changelog</a>
          <a href="/">Status</a>
          <a href="/">License</a>
          <a href="/">All Versions</a>
        </div>
        <div>
          <h4>Community</h4>
          <a href="/">GitHub</a>
          <a href="/">Issues</a>
          <a href="/">Project</a>
          <a href="/">Twitter</a>
        </div>
        <div>
          <h4>Help</h4>
          <a href="/">Support</a>
          <a href="/">Troubleshooting</a>
          <a href="/">Contact Us</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
