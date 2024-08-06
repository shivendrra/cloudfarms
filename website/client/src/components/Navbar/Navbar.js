import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {

  return (
    <>
      <nav className='navbar navbar-expand-lg fixed-top' id='mainNavbar'>
        <div className='container' id='innerNav'>
          <h3 className='navbar-brand my-auto'>CloudFarms</h3>
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
            <span>
              <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' fill='currentColor' className='bi bi-list' viewBox='0 0 16 16'>
                <path fill-rule='evenodd' d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5' />
              </svg>
            </span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav ms-auto'>
              <li className='nav-item dropdown'>
                <a className='nav-link dropdown-toggle' href='/' role='button' data-bs-toggle='dropdown' aria-expanded='false'>
                  solutions
                </a>
                <ul className='dropdown-menu dropdown-menu-end'>
                  <li className='dropdown-item'>Cloud-Farms</li>
                  <li className='dropdown-item'>Technology</li>
                  <li className='dropdown-item'>Robots</li>
                  <li className='dropdown-item'>Franchise</li>
                </ul>
              </li>
              <li className='nav-item'>
                <Link className='nav-link disabled' to='/'>locations</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link' to='/join-us'>join us</Link>
              </li>
              <li className='nav-item button-item'>
                <button type='button' className='btn-custom' data-bs-toggle='modal' data-bs-target='#staticBackdrop'>
                  call us
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className='modal fade' id='staticBackdrop' data-bs-backdrop='static' data-bs-keyboard='false' tabindex='-1' aria-labelledby='staticBackdropLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1 className='modal-title fs-5' id='staticBackdropLabel'>Contact Details</h1>
              <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'>
              </button>
            </div>
            <div className='modal-body'>
              shivendra : +91 99369 54894<br />
              shivnash: +91 79859 78838<br />
              satvik: +91 63879 70275
            </div>
          </div>
        </div>
      </div>
    </>
  )
}