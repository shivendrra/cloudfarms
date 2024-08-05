import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top bg-primary' id='mainNavbar'>
        <div className="container" id='innerNav'>
          <h3 className='navbar-brand'>CloudFarms</h3>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className='nav-link mx-3' to="/products">blogs.</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link mx-3' to="/blogs">blogs.</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}