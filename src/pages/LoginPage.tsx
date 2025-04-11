
import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center relative bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 32, 0.7), rgba(0, 0, 32, 0.7)), url("/lovable-uploads/26ba3b46-06fd-4414-85c0-32d88f1ca681.png")' 
      }}
    >
      <div className="z-10">
        <LoginForm />
      </div>
      <div className="absolute bottom-4 right-4 z-10">
        <p className="text-white text-sm">Privacy Policy</p>
      </div>
    </div>
  );
};

export default LoginPage;
