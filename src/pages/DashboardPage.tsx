
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import StudentCard from '@/components/StudentCard';
import Logo from '@/components/Logo';
import { Link } from 'react-router-dom';

// Mock data for student verifications
const mockStudents = [
  {
    id: '1',
    name: 'John Smith',
    university: 'Harvard University',
    studentId: 'H12345678',
    program: 'Bachelor of Science in Computer Science',
    graduationYear: '2023',
    status: 'verified' as const
  },
  {
    id: '2',
    name: 'Emma Johnson',
    university: 'Stanford University',
    studentId: 'S98765432',
    program: 'Master of Business Administration',
    graduationYear: '2022',
    status: 'pending' as const
  },
  {
    id: '3',
    name: 'Michael Williams',
    university: 'MIT',
    studentId: 'M24681357',
    program: 'PhD in Artificial Intelligence',
    graduationYear: '2021',
    status: 'verified' as const
  },
  {
    id: '4',
    name: 'Sarah Davis',
    university: 'Yale University',
    studentId: 'Y13579246',
    program: 'Bachelor of Arts in Economics',
    graduationYear: '2023',
    status: 'unverified' as const
  },
  {
    id: '5',
    name: 'Robert Miller',
    university: 'Princeton University',
    studentId: 'P86420975',
    program: 'Master of Science in Physics',
    graduationYear: '2022',
    status: 'pending' as const
  },
  {
    id: '6',
    name: 'Jennifer Garcia',
    university: 'Columbia University',
    studentId: 'C97531864',
    program: 'Bachelor of Science in Nursing',
    graduationYear: '2023',
    status: 'verified' as const
  }
];

const DashboardPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b border-gray-200 py-4">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Logo />
          
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="font-medium">Organization Name</p>
              <p className="text-sm text-gray-500">Admin Account</p>
            </div>
            
            <Link to="/login">
              <Button variant="outline" size="sm">
                Sign Out
              </Button>
            </Link>
          </div>
        </div>
      </header>
      
      <main className="flex-grow py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-64">
              <div className="bg-white rounded-lg shadow-sm p-4 sticky top-8">
                <nav className="space-y-2">
                  <a href="#" className="flex items-center px-4 py-2 bg-university-darkblue text-white rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                    Dashboard
                  </a>
                  
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                    Verifications
                  </a>
                  
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                      <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                    </svg>
                    Reports
                  </a>
                  
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    Help & Support
                  </a>
                  
                  <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    Settings
                  </a>
                </nav>
              </div>
            </div>
            
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Total Verifications</CardDescription>
                    <CardTitle className="text-3xl">35</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      +12% from last month
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Pending Verifications</CardDescription>
                    <CardTitle className="text-3xl">8</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      3 require attention
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-2">
                    <CardDescription>Verification Success Rate</CardDescription>
                    <CardTitle className="text-3xl">95%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-gray-500">
                      +2% from last month
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
                <div className="p-6 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">Recent Verifications</h2>
                  <Link to="/verify">
                    <Button>New Verification</Button>
                  </Link>
                </div>
                
                <Tabs defaultValue="all" className="p-6">
                  <TabsList>
                    <TabsTrigger value="all">All</TabsTrigger>
                    <TabsTrigger value="verified">Verified</TabsTrigger>
                    <TabsTrigger value="pending">Pending</TabsTrigger>
                    <TabsTrigger value="unverified">Unverified</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="all" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockStudents.map(student => (
                        <StudentCard key={student.id} student={student} />
                      ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="verified" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockStudents
                        .filter(student => student.status === 'verified')
                        .map(student => (
                          <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="pending" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockStudents
                        .filter(student => student.status === 'pending')
                        .map(student => (
                          <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="unverified" className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {mockStudents
                        .filter(student => student.status === 'unverified')
                        .map(student => (
                          <StudentCard key={student.id} student={student} />
                        ))}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;
