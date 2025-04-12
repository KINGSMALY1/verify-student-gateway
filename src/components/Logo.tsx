
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="/lovable-uploads/8ee4d66b-ef1f-4606-8a89-36ea0fd61e10.png" 
        alt="Borno State University Logo" 
        className="h-14 w-auto"
      />
      <div className="flex flex-col">
        <span className="text-university-darkblue font-bold text-lg">BORNO STATE</span>
        <span className="text-university-darkblue font-bold text-lg">UNIVERSITY</span>
        <span className="text-xs italic text-gray-600">Est. 2016 - "العلم ليس له حدود"</span>
      </div>
    </div>
  );
};

export default Logo;
