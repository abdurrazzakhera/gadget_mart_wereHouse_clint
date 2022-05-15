import React from "react";
import "./Footer.css";
import socialaimg1 from "../../../images/footerSocial/social1.png";
import socialaimg2 from "../../../images/footerSocial/social2.png";
import socialaimg3 from "../../../images/footerSocial/social3.png";
import socialaimg4 from "../../../images/footerSocial/social4.png";

const Footer = () => {
  const date = new Date();
  return (
    <footer className='footer-48201 mt-3'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-4 pr-md-5 text-center text-lg-start'>
            <h4 className='border-bottom'>Out Address</h4>
            <ul className='list-unstyled nav-links'>
              <li>Address: 104b , block-d</li>
              <li>Badda , Dhaka</li>
              <li>Phone: +98111111</li>
              <li>Email: gadget@mart.com</li>
            </ul>
          </div>
          <div className='col-md text-center text-lg-start'>
            <h4 className='border-bottom'>Company</h4>
            <ul className='list-unstyled nav-links'>
              <li>About Us</li>
              <li>Portfolio</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className='col-md text-center text-lg-start'>
            <h4 className='border-bottom'>Services</h4>
            <ul className='list-unstyled nav-links'>
              <li>Clients</li>
              <li>Team</li>
              <li>Career</li>
              <li>Journal</li>
            </ul>
          </div>
          <div className='col-md text-center text-lg-start'>
            <h4 className='border-bottom'>Rolls</h4>
            <ul className='list-unstyled nav-links'>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className='col-md text-center text-lg-start'>
            <h4 className='border-bottom mb-3'>Contact</h4>
            <ul className='social list-unstyled'>
              <li>
                <span className='pe-2'>
                  <img className='rounded-circle' src={socialaimg1} alt='' />
                </span>
              </li>
              <li>
                <span className='pe-2'>
                  <img className='rounded-circle' src={socialaimg2} alt='' />
                </span>
              </li>
              <li>
                <span className='pe-2'>
                  <img className='rounded-circle' src={socialaimg3} alt='' />
                </span>
              </li>
              <li>
                <span className='pe-2'>
                  <img className='rounded-circle' src={socialaimg4} alt='' />
                </span>
              </li>
            </ul>
            <p className='btn btn-tertiary bgPrimary border border-2 text-white rounded-pill py-2 px-4'>
              Contact Us
            </p>
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
