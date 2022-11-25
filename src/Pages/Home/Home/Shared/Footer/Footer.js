import React from 'react';
const Footer = () => {
    return (
        <footer className="footer p-32 bg-neutral">
  <div>
    <p>Good-Will online Resale Market.<br/>Providing reliable service since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Marketing</span> 
    <a className="link link-hover">Selling</a> 
    <a className="link link-hover">Delivery</a> 
    <a className="link link-hover">Buying</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
    );
};

export default Footer;