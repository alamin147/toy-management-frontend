import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-3 item">
              <h3>Quick Links</h3>
              <ul>
                <Link to="/">
                  <li>Home</li>
                </Link>
                <Link to="/blog">
                  <li>Blog</li>
                </Link>
                <Link to="/allToysShop">
                  <li>All Toys</li>
                </Link>
              </ul>
            </div>
            <div className="col-sm-6 col-md-3 item">
              <h3>About</h3>
              <ul>
                <li>Company</li>
                <li>Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="col-md-6 item text">
              <div className="d-flex align-items-center">
                <div>
                  <img src="../../../car.png" className="me-3" alt="" />
                </div>
                <div>
                  <h3>Wonder Spark</h3>
                </div>
              </div>
              <p className="mt-2">
                Wonder Spark Toys: Igniting imagination, creating joy. © 2023
                Wonder Spark Toys. All rights reserved. Explore our playful
                world and discover the wonders of childhood. Let's embark on a
                journey of fun and laughter!
              </p>
            </div>
            <div className="col item social">
              <i className="icon ion-social-facebook"></i>
              <i className="icon ion-social-twitter"></i>
              <i className="icon ion-social-snapchat"></i>
              <i className="icon ion-social-instagram"></i>
            </div>
          </div>
          <p className="copyright">Wonder Spark © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
