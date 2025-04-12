
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-lg mb-4">VerifyStudent</h3>
            <p className="text-gray-600 text-sm">
              The trusted platform for Borno State University academic credential verification.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-university-darkblue text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-university-darkblue text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/verify" className="text-gray-600 hover:text-university-darkblue text-sm">
                  Verification
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-university-darkblue text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://mail.bosu.edu.ng" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-university-darkblue text-sm">
                  BOSU Mail
                </a>
              </li>
              <li>
                <a href="https://registration.bosu.edu.ng" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-university-darkblue text-sm">
                  Student Portal
                </a>
              </li>
              <li>
                <a href="https://www.bosu.edu.ng" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-university-darkblue text-sm">
                  University Website
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Kano Rd, Njimtilo 602104, Maiduguri, Borno
              </li>
              <li className="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@bosu.edu.ng" className="hover:text-university-darkblue">info@bosu.edu.ng</a>
              </li>
              <li className="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+2348024606525" className="hover:text-university-darkblue">+234 802 460 6525</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-600">
            All Rights Reserved. {new Date().getFullYear()} © Borno State University
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
