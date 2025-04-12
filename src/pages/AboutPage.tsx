
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import VerificationForm from '@/components/VerificationForm';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-university-darkblue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Borno State University Student Verification</h1>
            <p className="text-xl max-w-3xl">
              The official platform for verifying academic credentials of Borno State University graduates.
            </p>
          </div>
        </section>
        
        {/* Verification Form Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-university-darkblue">Verify Student Credentials</h2>
              <p className="text-gray-600 mt-2">
                Complete the form below to submit a verification request
              </p>
            </div>
            
            <VerificationForm />
          </div>
        </section>
        
        {/* About University Section (collapsed) */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <details className="bg-white rounded-lg shadow-md overflow-hidden">
              <summary className="px-6 py-4 bg-university-darkblue text-white font-bold cursor-pointer text-xl">
                About Borno State University
              </summary>
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-university-darkblue">History of Borno State University</h3>
                    <p className="text-gray-700 mb-4">
                      The noble idea to establish a State University in Borno State was first thought of by the 
                      administration of Sen. Ali Modu Sheriff which was actualized by Honorable Kashim Shettima, 
                      the former Executive Governor of Borno State 2011-2019. The Government clearly expressed its 
                      determination to provide sound and qualitative education in the state.
                    </p>
                    <p className="text-gray-700">
                      It aimed at establishing a good tertiary institution for thousands of our Senior Secondary 
                      School Certificate holders at a time of stiff competition for admissions into institutions 
                      of higher learning to which Borno State is a catchment area and host community.
                    </p>
                  </div>
                  <div>
                    <img 
                      src="/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png" 
                      alt="Borno State University Senate Building" 
                      className="rounded-lg shadow-lg w-full"
                    />
                  </div>
                </div>
                
                <div className="text-gray-700">
                  <p className="mb-4">
                    Appreciating the fact that the present number of Universities in the country can hardly 
                    accommodate more than 20% of the total number of candidates seeking admissions each year, 
                    particularly Borno State indigenes who have met the requirements for admission into universities 
                    were left roaming the streets, largely due to inadequate spaces in the existing universities. 
                    This situation readily called for the need to establish a state owned University in Borno State.
                  </p>
                  <p className="mb-4">
                    Senator Ali Modu Sheriff went further to constitute a Technical Committee for the establishment 
                    of the Borno State University, in Maiduguri under the Chairmanship of Late Professor Muhammad Nur Alkali. 
                    Hon. Kashim Shettima actualized the establishment of the Borno State University, by first signing the bill 
                    into law in 2012. He reactivated the Technical Committee after the demise of Professor Mohammed Nur Alkali, 
                    with Professor Abubakar Mustapha as Chairman in 2016.
                  </p>
                  <p className="mb-4">
                    The University thereafter got its operations approved by NUC in 2016. Hon Kashim Shettima in line with 
                    the Borno State University Law sought the approval of the Executive Council for the appointment of Principal 
                    Officers of the University with Professor Umar Kyari Sandabe as the pioneer Vice-Chancellor in March, 2019.
                  </p>
                  <p>
                    The current Vice Chancellor of the University is Engr. Professor Babagana Gutti.
                  </p>
                </div>
                
                {/* Mission, Vision, Philosophy */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-university-darkblue">Mission</h3>
                    <p className="text-gray-700">
                      The Mission of the Borno State University is to provide excellent, modern, free and dynamic 
                      environment and adequate facilities, conducive for training and research through its programs 
                      for students to acquire the right type of knowledge and skill of good quality that would enable 
                      them to be self-employable and that are relevant to the transformation and accelerated development 
                      of Borno State, Nigeria and the world in general.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-university-darkblue">Vision</h3>
                    <p className="text-gray-700">
                      The Vision of the Borno State University is to develop an institution of higher learning that 
                      shall be a Centre of Excellence in teaching, learning and research where high quality University 
                      education is imparted to all without discrimination, for the rapid transformation of the communities.
                    </p>
                  </div>
                  
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="text-2xl font-bold mb-4 text-university-darkblue">Philosophy</h3>
                    <p className="text-gray-700">
                      The philosophy of the Borno State University is anchored on the principles of the universality of 
                      knowledge, freedom and service. The University shall be in character, a reservoir of knowledge derived 
                      from the experiences of its immediate environment, the Nation and the world at large. It shall be a 
                      center of attraction for all those in search of new ideas and the way forward for the society.
                    </p>
                  </div>
                </div>
              </div>
            </details>
          </div>
        </section>
        
        {/* Resources Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-university-darkblue text-center">Campus Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="hover-scale">
                <img 
                  src="/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png" 
                  alt="Senate Building" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">Senate Building</h3>
                <p className="text-gray-600">The administrative heart of the university.</p>
              </div>
              <div className="hover-scale">
                <img 
                  src="/lovable-uploads/4de329c0-9f2a-4390-b66a-a824308fceb3.png" 
                  alt="University Library" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">University Library</h3>
                <p className="text-gray-600">A modern resource center for students and faculty.</p>
              </div>
              <div className="hover-scale">
                <img 
                  src="/lovable-uploads/8ee4d66b-ef1f-4606-8a89-36ea0fd61e10.png" 
                  alt="University Grounds" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">University Grounds</h3>
                <p className="text-gray-600">Beautiful campus environments for learning and growth.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
