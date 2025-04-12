
import React from 'react';
import LoginForm from '@/components/LoginForm';
import { Link } from 'react-router-dom';

const LoginPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.7)), url("/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png")' 
      }}
    >
      <div className="z-10">
        <LoginForm />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <Link to="/" className="text-white text-sm mr-4 hover:underline">
          Home
        </Link>
        <span className="text-white text-sm">Privacy Policy</span>
      </div>
    </div>
  );
};

export default LoginPage;
