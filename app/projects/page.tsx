import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of your first project. This project showcases your skills in web development and user interface design.",
    technologies: ["React", "Node.js", "MongoDB"],
  },
  {
    title: "Project 2",
    description: "An overview of your second project. This project demonstrates your ability to work with data and create meaningful visualizations.",
    technologies: ["Python", "D3.js", "SQL"],
  },
  {
    title: "Project 3",
    description: "Details about your third project. This project highlights your experience with mobile app development and cross-platform solutions.",
    technologies: ["React Native", "Firebase", "Redux"],
  },
]

export default function Projects() {
  return (
    <div className="space-y-12 animate-fade-in">
      <h1 className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        My Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-500 transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl font-semibold text-blue-400">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300 mb-4">{project.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 text-white text-xs px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

