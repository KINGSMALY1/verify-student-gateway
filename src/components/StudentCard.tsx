
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface StudentCardProps {
  student: {
    id: string;
    name: string;
    university: string;
    studentId: string;
    program: string;
    graduationYear: string;
    status: 'verified' | 'pending' | 'unverified';
  };
}

const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  const statusColors = {
    verified: "bg-green-100 text-green-800 hover:bg-green-100",
    pending: "bg-yellow-100 text-yellow-800 hover:bg-yellow-100",
    unverified: "bg-red-100 text-red-800 hover:bg-red-100"
  };
  
  const statusText = {
    verified: "Verified",
    pending: "Pending",
    unverified: "Unverified"
  };

  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle>{student.name}</CardTitle>
            <CardDescription>{student.university}</CardDescription>
          </div>
          <Badge className={statusColors[student.status]}>
            {statusText[student.status]}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="grid grid-cols-2 gap-x-2 text-sm">
            <span className="text-gray-500">Student ID:</span>
            <span>{student.studentId}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-2 text-sm">
            <span className="text-gray-500">Program:</span>
            <span>{student.program}</span>
          </div>
          
          <div className="grid grid-cols-2 gap-x-2 text-sm">
            <span className="text-gray-500">Graduation Year:</span>
            <span>{student.graduationYear}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4 flex justify-between">
        <button className="text-sm text-university-darkblue hover:underline">
          View Details
        </button>
        
        {student.status === 'verified' && (
          <button className="text-sm text-university-darkblue hover:underline">
            Download Certificate
          </button>
        )}
      </CardFooter>
    </Card>
  );
};

export default StudentCard;
