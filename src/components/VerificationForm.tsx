
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const VerificationForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    candidateName: '',
    candidateEmail: '',
    universityName: '',
    studentId: '',
    graduationYear: '',
    program: '',
    purpose: 'employment'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.candidateName || !formData.universityName || !formData.studentId) {
      toast({
        title: "Error",
        description: "Please fill all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Mock API call
    toast({
      title: "Verification Request Submitted",
      description: "We'll process your request and notify you once completed."
    });
    
    // Reset form
    setFormData({
      candidateName: '',
      candidateEmail: '',
      universityName: '',
      studentId: '',
      graduationYear: '',
      program: '',
      purpose: 'employment'
    });
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Verification Request</CardTitle>
        <CardDescription>
          Fill out this form to verify a candidate's educational credentials
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Candidate Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="candidateName">Full Name <span className="text-red-500">*</span></Label>
                <Input
                  id="candidateName"
                  name="candidateName"
                  value={formData.candidateName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="candidateEmail">Email Address</Label>
                <Input
                  id="candidateEmail"
                  name="candidateEmail"
                  type="email"
                  value={formData.candidateEmail}
                  onChange={handleChange}
                  placeholder="john.doe@example.com"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Academic Information</h3>
            
            <div className="space-y-2">
              <Label htmlFor="universityName">University/Institution <span className="text-red-500">*</span></Label>
              <Input
                id="universityName"
                name="universityName"
                value={formData.universityName}
                onChange={handleChange}
                placeholder="Harvard University"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="studentId">Student ID <span className="text-red-500">*</span></Label>
                <Input
                  id="studentId"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  placeholder="123456789"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="graduationYear">Graduation Year</Label>
                <Input
                  id="graduationYear"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleChange}
                  placeholder="2023"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="program">Program/Degree</Label>
              <Input
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                placeholder="Bachelor of Science in Computer Science"
              />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Verification Details</h3>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Purpose of Verification</Label>
              <Select 
                value={formData.purpose} 
                onValueChange={(value) => handleSelectChange('purpose', value)}
              >
                <SelectTrigger id="purpose">
                  <SelectValue placeholder="Select purpose" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="employment">Employment</SelectItem>
                  <SelectItem value="further-education">Further Education</SelectItem>
                  <SelectItem value="visa">Visa Application</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-university-darkblue hover:bg-blue-800"
          >
            Submit Verification Request
          </Button>
        </form>
      </CardContent>
      
      <CardFooter className="flex justify-between border-t pt-6">
        <p className="text-sm text-gray-500">
          All information is secure and encrypted
        </p>
      </CardFooter>
    </Card>
  );
};

export default VerificationForm;
