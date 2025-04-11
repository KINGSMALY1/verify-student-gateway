
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VerificationForm from '@/components/VerificationForm';

const VerifyPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl font-bold mb-2">Borno State University Credential Verification</h1>
              <p className="text-gray-600">
                Complete the form below to submit a verification request
              </p>
            </div>
            
            <VerificationForm />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyPage;
