import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { X } from 'lucide-react'

interface ProjectPopupProps {
  project: {
    title: string;
    learnMore: string;
  };
  onClose: () => void;
}

const ProjectPopup: React.FC<ProjectPopupProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4 overflow-y-auto">
      <Card className="w-full max-w-2xl bg-gray-800 border-gray-700 text-white">
        <CardHeader className="relative">
          <CardTitle className="text-2xl font-bold text-teal-400">{project.title}</CardTitle>
          <Button 
            className="absolute top-2 right-2 p-2 rounded-full bg-gray-700 hover:bg-gray-600"
            onClick={onClose}
          >
            <X className="h-6 w-6" />
          </Button>
        </CardHeader>
        <CardContent>
          <div className="text-gray-300 text-lg whitespace-pre-line">{project.learnMore}</div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ProjectPopup