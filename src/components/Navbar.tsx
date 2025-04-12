
import React from 'react';
import { Button } from "@/components/ui/button";
import Logo from './Logo';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="border-b border-gray-200 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <Logo />
        </Link>
        
        <div className="flex items-center gap-4">
          <Link to="/about" className={`${isActive('/about') ? 'text-university-darkblue font-medium' : 'text-gray-600'} hover:text-university-darkblue`}>
            About
          </Link>
          <Link to="/contact" className={`${isActive('/contact') ? 'text-university-darkblue font-medium' : 'text-gray-600'} hover:text-university-darkblue`}>
            Contact
          </Link>
          <Link to="/login">
            <Button variant="outline" className="border-university-darkblue text-university-darkblue hover:bg-university-darkblue hover:text-white">
              Sign In
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
