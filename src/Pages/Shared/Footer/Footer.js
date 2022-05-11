import React from "react";
import "./Footer.css";

const Footer = () => {
  const date = new Date();
  return (
    <footer className='footer-48201 mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 pr-md-5'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
              quasi perferendis ratione perspiciatis accusantium.
            </p>
          </div>
          <div className='col-md'>
            <ul className='list-unstyled nav-links'>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Contact</li>
              <li>Home</li>
            </ul>
          </div>
          <div className='col-md'>
            <ul className='list-unstyled nav-links'>
              <li>Clients</li>
              <li>Team</li>
              <li>Career</li>
              <li>Testimonials</li>
              <li>Journal</li>
            </ul>
          </div>
          <div className='col-md'>
            <ul className='list-unstyled nav-links'>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className='col-md text-md-center'>
            <ul className='social list-unstyled'>
              <li>
                <span className='icon-twitter'></span>
              </li>
              <li>
                <span className='icon-facebook'></span>
              </li>
              <li>
                <span className='icon-pinterest'></span>
              </li>
              <li>
                <span className='icon-instagram'></span>
              </li>
              <li>
                <span className='icon-dribbble'></span>
              </li>
            </ul>
            <p className='btn btn-tertiary'>Contact Us</p>
          </div>
        </div>

        <div className='row '>
          <div className='col-12 text-center'>
            <div className='copyright mt-5 pt-5'>
              <p>
                <small>
                  &copy; 2019-{date.getFullYear()} All Rights Reserved.
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
