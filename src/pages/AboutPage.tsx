
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-university-darkblue text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Borno State University</h1>
            <p className="text-xl max-w-3xl">
              Established in 2016, Borno State University is committed to providing quality education 
              and fostering research excellence in Maiduguri, Borno State, Nigeria.
            </p>
          </div>
        </section>
        
        {/* University History */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-university-darkblue">History of Borno State University</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-8">
              <div>
                <p className="text-gray-700 mb-4">
                  The noble idea to establish a State University in Borno State was first thought of by the 
                  administration of Sen. Ali Modu Sheriff which was actualized by Honorable Kashim Shettima, 
                  the former Executive Governor of Borno State 2011-2019. The Government clearly expressed its 
                  determination to provide sound and qualitative education in the state.
                </p>
                <p className="text-gray-700 mb-4">
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
          </div>
        </section>
        
        {/* Mission, Vision, Philosophy */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-university-darkblue">Mission</h3>
                <p className="text-gray-700">
                  The Mission of the Borno State University is to provide excellent, modern, free and dynamic 
                  environment and adequate facilities, conducive for training and research through its programs 
                  for students to acquire the right type of knowledge and skill of good quality that would enable 
                  them to be self-employable and that are relevant to the transformation and accelerated development 
                  of Borno State, Nigeria and the world in general.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4 text-university-darkblue">Vision</h3>
                <p className="text-gray-700">
                  The Vision of the Borno State University is to develop an institution of higher learning that 
                  shall be a Centre of Excellence in teaching, learning and research where high quality University 
                  education is imparted to all without discrimination, for the rapid transformation of the communities.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
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
        </section>
        
        {/* Campus Images */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-university-darkblue text-center">Campus Life</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <img 
                  src="/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png" 
                  alt="Senate Building" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">Senate Building</h3>
                <p className="text-gray-600">The administrative heart of the university.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/4de329c0-9f2a-4390-b66a-a824308fceb3.png" 
                  alt="University Library" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">University Library</h3>
                <p className="text-gray-600">A modern resource center for students and faculty.</p>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/c10b4f37-1081-43c1-8556-e44dc4b6efb0.png" 
                  alt="Campus View" 
                  className="rounded-lg shadow-md w-full h-64 object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">University Grounds</h3>
                <p className="text-gray-600">Beautiful campus environments for learning and growth.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* University Links & Contacts */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-6 text-university-darkblue">Information Links</h2>
                <ul className="space-y-3">
                  <li>
                    <a href="https://mail.bosu.edu.ng" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      BOSU Mail
                    </a>
                  </li>
                  <li>
                    <a href="https://registration.bosu.edu.ng" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      Student Registration
                    </a>
                  </li>
                  <li>
                    <a href="https://screening.bosu.edu.ng" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      Screening Portal
                    </a>
                  </li>
                  <li>
                    <a href="https://news.bosu.edu.ng" target="_blank" rel="noopener noreferrer" 
                      className="flex items-center text-blue-600 hover:text-blue-800">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1M19 20a2 2 0 002-2V8a2 2 0 00-2-2h-5v10a2 2 0 002 2h3z" />
                      </svg>
                      News
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-6 text-university-darkblue">Contact Details</h2>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:info@bosu.edu.ng" className="text-gray-700 hover:text-university-darkblue">
                      info@bosu.edu.ng
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                    <a href="https://www.bosu.edu.ng" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-university-darkblue">
                      www.bosu.edu.ng
                    </a>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">
                      Kano Rd, Njimtilo 602104, Maiduguri, Borno
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:+2348024606525" className="text-gray-700 hover:text-university-darkblue">
                      +234 802 460 6525
                    </a>
                  </li>
                </ul>
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
