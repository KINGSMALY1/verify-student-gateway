
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import Logo from './Logo';

const LoginForm: React.FC = () => {
  const { toast } = useToast();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [step, setStep] = useState<'username' | 'password'>('username');

  const handleNext = () => {
    if (!username) {
      toast({
        title: "Error",
        description: "Please enter a username",
        variant: "destructive"
      });
      return;
    }
    setStep('password');
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      toast({
        title: "Error",
        description: "Please enter a password",
        variant: "destructive"
      });
      return;
    }
    
    // Mock authentication - in a real app you would call an API
    if (username === 'admin' && password === 'password') {
      toast({
        title: "Success",
        description: "Successfully logged in!",
      });
      
      // Redirect to dashboard after a brief delay
      setTimeout(() => {
        window.location.href = '/dashboard';
      }, 1000);
    } else {
      toast({
        title: "Error",
        description: "Invalid credentials",
        variant: "destructive"
      });
    }
  };

  return (
    <div className="auth-card">
      <div className="flex justify-center mb-6">
        <Logo />
      </div>
      
      <h2 className="text-2xl font-semibold text-center mb-6">Sign In</h2>
      
      <form onSubmit={handleLogin}>
        {step === 'username' ? (
          <>
            <div className="space-y-2 mb-6">
              <Label htmlFor="username">Username</Label>
              <Input 
                id="username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                autoComplete="username"
              />
            </div>
            
            <Button 
              type="button" 
              className="w-full bg-gray-500 hover:bg-gray-600"
              onClick={handleNext}
            >
              Next
            </Button>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-university-darkblue">
                Forgot Username?
              </a>
            </div>
          </>
        ) : (
          <>
            <div className="space-y-2 mb-6">
              <Label htmlFor="password">Password</Label>
              <Input 
                id="password" 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                autoComplete="current-password"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-university-darkblue hover:bg-blue-800"
            >
              Sign In
            </Button>
            
            <div className="mt-4 text-center">
              <a href="#" className="text-sm text-gray-500 hover:text-university-darkblue">
                Forgot Password?
              </a>
            </div>
            
            <div className="mt-2 text-center">
              <button
                type="button"
                onClick={() => setStep('username')}
                className="text-sm text-university-darkblue hover:underline"
              >
                Back to username
              </button>
            </div>
          </>
        )}
      </form>
      
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-university-darkblue hover:underline flex items-center justify-center">
          Help
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 ml-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default LoginForm;
