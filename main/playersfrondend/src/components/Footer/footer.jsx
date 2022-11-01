import React from "react";
import "./footer.css";

function Footer() {
  return (
    <section className="copyright">
      <hr className="style13" />
      <div className="site-info container">
        <div className="row">
          <div className="row condition col-lg-12">
            <div className="col-lg-4">
              <p>Terms & Conditions</p>
            </div>
            <div className="col-lg-4">
              <p>Disclaimer</p>
            </div>
            <div className="col-lg-4">
              <p>Privacy Policy</p>
            </div>
          </div>

          <div className="copyright col-lg-12">
            <hr className="style14" />
            All images are copyrighted by their respective authors.{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
export default Footer;