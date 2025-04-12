
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { Link } from 'react-router-dom';
import Logo from '@/components/Logo';

const LoginPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full flex flex-col items-center justify-center relative bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.7)), url("/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png")' 
      }}
    >
      <div className="absolute top-6 left-6">
        <div className="bg-white/90 p-3 rounded-lg">
          <Logo />
        </div>
      </div>
      
      <div className="z-10 my-auto">
        <LoginForm />
      </div>
      
      <div className="absolute bottom-4 w-full flex justify-center z-10">
        <div className="flex gap-6">
          <Link to="/" className="text-white text-sm hover:underline">
            Home
          </Link>
          <Link to="/about" className="text-white text-sm hover:underline">
            About
          </Link>
          <Link to="/verify" className="text-white text-sm hover:underline">
            Verify Credentials
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
