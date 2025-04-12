
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
            
            <div className="mt-16 p-6 bg-white rounded-lg shadow-md">
              <h2 className="text-2xl font-bold mb-4 text-university-darkblue">University Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <img 
                    src="/lovable-uploads/4de329c0-9f2a-4390-b66a-a824308fceb3.png" 
                    alt="Borno State University Library" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold">University Library</h3>
                  <p className="text-gray-600">
                    Our modern library provides students with access to extensive academic resources.
                  </p>
                </div>
                <div>
                  <img 
                    src="/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png" 
                    alt="Borno State University Senate Building" 
                    className="w-full h-64 object-cover rounded-lg mb-3"
                  />
                  <h3 className="text-lg font-semibold">Senate Building</h3>
                  <p className="text-gray-600">
                    The central administrative building of Borno State University.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default VerifyPage;
