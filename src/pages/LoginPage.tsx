
import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="auth-background min-h-screen w-full flex items-center justify-center relative">
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
