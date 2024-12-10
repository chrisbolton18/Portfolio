'use client'

import { useState } from 'react'
import Header from './components/Header'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileCode, PenTool, Code, Globe, Puzzle, Coffee, Cpu, Database, Figma, MapIcon as Diagram, Linkedin, Github, Mail, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import ProjectPopup from '../components/ProjectPopup'

const projects = [
  {
    title: "Bolton Cup",
    description: "This is the website for the annual Bolton Cup hockey tournament. It holds game results, player statistics, player profiles, etc., providing fans and participants with up-to-date tournament information and highlights.",
    technologies: ["HTML", "Blazor", "JavaScript", "SQL"],
    image: "/boltoncup.jpeg",
    demo: "https://boltoncup.ca",
    source: "https://github.com/bolst/BoltonCup",
    learnMore: "The Bolton Cup website is a comprehensive digital platform designed to enhance the experience of the annual hockey tournament. Built with a combination of HTML, Blazor, JavaScript, and SQL, this project showcases my ability to create robust, data-driven web applications.\n\nKey Features:\n1. Real-time Game Results: The website provides live updates of game scores, allowing fans and participants to stay informed about the tournament's progress.\n2. Detailed Player Statistics: A sophisticated database system tracks and displays individual player performance metrics, offering insights into goals, assists, penalties, and other relevant data.\n3. Player Profiles: Each participant has a dedicated profile page, highlighting their tournament history, team affiliations, and current statistics.\n4. Tournament Brackets: An interactive bracket system visually represents the tournament structure and progression.\n5. Admin Dashboard: A secure backend allows tournament organizers to easily update game results, player information, and other critical data.\n\nTechnical Highlights:\n- Blazor Framework\n- Responsive Design\n- SQL Database\n- Real-time Updates"
  },
  {
    title: "Exo Explorer",
    description: "Developed with Three.JS, allowing users to freely navigate and explore discovered exoplanets. This app allows users to click on planets/exoplanets to access detailed information about each one.",
    technologies: ["Three.JS", "JavaScript", "HTML", "CSS"],
    image: "/ExoExplorer.jpeg",
    demo: "https://bolst.github.io/ExoExplorer/",
    source: "https://github.com/chrisbolton18/ExoExplorer",
    learnMore: "Exo Explorer is an immersive, interactive web application that brings the wonders of exoplanets to life. Leveraging the power of Three.JS, this project showcases my ability to create engaging, educational experiences at the intersection of web development and astronomy.\n\nKey Features:\n1. 3D Universe Exploration: Users can navigate through a visually stunning representation of our cosmic neighborhood, with discovered exoplanets accurately placed based on astronomical data.\n2. Interactive Exoplanet Information: Clicking on any exoplanet reveals a wealth of information, including its size, orbital period, distance from Earth, and potential habitability.\n3. Realistic Planetary Rendering: Each exoplanet is rendered with attention to known details such as size, color, and atmospheric composition where data is available.\n4. Search and Filter Functionality: Users can search for specific exoplanets or filter them based on characteristics like size, distance, or potential for supporting life.\n5. Educational Content: Integrated information panels provide context about exoplanet discovery methods, the history of exoplanet research, and current scientific understanding.\n\nTechnical Highlights:\n- Optimized Performance\n- Responsive Design\n- Data Integration"
  },
  {
    title: "Data Structures & Algorithms Tutor",
    description: "Interactive web application designed to help users visualize and understand various data structures and algorithms. It provides a user-friendly interface for exploring concepts such as arrays, linked lists, and more.",
    technologies: ["TypeScript", "JavaScript", "CSS"],
    image: "/DSA.jpeg",
    demo: "https://chrisbolton18.github.io/DSA_Visualizer/",
    source: "https://github.com/chrisbolton18/DSA_Visualizer",
    learnMore: "The Data Structures & Algorithms Tutor is an innovative educational platform designed to demystify complex computer science concepts. This project showcases my ability to create intuitive, interactive learning tools that bridge the gap between theoretical knowledge and practical understanding.\n\nKey Features:\n1. Visual Representations: Offers dynamic, animated visualizations of various data structures (arrays, linked lists, trees, graphs) and algorithms (sorting, searching, graph traversal).\n2. Step-by-Step Walkthroughs: Users can progress through algorithms at their own pace, with detailed explanations at each step.\n3. Interactive Modifications: Allows users to modify data structures in real-time and observe how algorithms behave with different inputs.\n4. Complexity Analysis: Provides time and space complexity information for each algorithm, helping users understand performance implications.\n5. Code Implementation: Displays actual code implementations in multiple programming languages, bridging theory with practical coding skills.\n\nTechnical Highlights\n- Modular Architecture:\n- Responsive Animations\n- Accessibility"
  },
  {
    title: "AI-Powered Chatbot",
    description: "An intelligent chatbot leveraging natural language processing to provide customer support and information retrieval.",
    technologies: ["Python", "TensorFlow", "Flask", "React", "Docker"],
    image: "/placeholder.svg?height=400&width=600",
    demo: "https://demo-link-4.com",
    source: "https://github.com/yourusername/project-4",
    learnMore: "The AI-Powered Chatbot project represents a cutting-edge solution in automated customer support and information retrieval. This sophisticated system showcases my expertise in artificial intelligence, natural language processing, and full-stack development.\n\nKey Features:\n1. Natural Language Understanding: Utilizes advanced NLP techniques to comprehend user queries accurately, even with colloquialisms and typos.\n2. Context-Aware Responses: Maintains conversation history to provide contextually relevant answers, creating a more natural interaction.\n3. Multi-lingual Support: Capable of understanding and responding in multiple languages, broadening its accessibility.\n4. Integration with Knowledge Base: Connects to a comprehensive database of information, allowing it to provide detailed and accurate responses on a wide range of topics.\n5. Sentiment Analysis: Detects user sentiment to adjust its tone and escalate to human support when necessary.\n6. Continuous Learning: Implements machine learning algorithms to improve its responses over time based on user interactions.\n\nTechnical Highlights:\n- TensorFlow: Leverages TensorFlow for building and training the natural language processing models, demonstrating proficiency in working with advanced machine learning frameworks.\n- Flask Backend: Utilizes Flask to create a robust, scalable API that handles incoming requests and manages the chatbot's logic.\n- React Frontend: Implements a responsive, user-friendly interface using React, showcasing full-stack development capabilities.\n- Docker Containerization: Employs Docker for easy deployment and scaling, ensuring consistent performance across different environments.\n- Microservices Architecture: Designed with a microservices approach, allowing for independent scaling and maintenance of different components.\n\nThis project not only demonstrates my technical skills across a range of modern technologies but also showcases my ability to create practical AI solutions that can significantly enhance customer experience and operational efficiency. The AI-Powered Chatbot stands as a testament to my capability to leverage cutting-edge technologies in creating intelligent, scalable, and user-centric applications."
  },
  {
    title: "Mobile Fitness Tracker",
    description: "A cross-platform mobile app for tracking workouts, nutrition, and health metrics with data visualization and goal setting.",
    technologies: ["React Native", "Redux", "Firebase", "HealthKit", "Google Fit"],
    image: "/placeholder.svg?height=400&width=600",
    demo: "https://demo-link-5.com",
    source: "https://github.com/yourusername/project-5",
    learnMore: "The Mobile Fitness Tracker is a comprehensive health and wellness application designed to empower users in their fitness journey. This cross-platform mobile app showcases my ability to create user-centric, data-driven solutions in the health tech space.\n\nKey Features:\n1. Workout Tracking: Allows users to log various types of exercises, including strength training, cardio, and flexibility workouts.\n2. Nutrition Monitoring: Integrates a food database for easy meal logging and calorie tracking.\n3. Health Metrics Dashboard: Visualizes key health data such as heart rate, sleep patterns, and daily activity levels.\n4. Personalized Goal Setting: Enables users to set and track progress towards customized fitness and health goals.\n5. Social Features: Incorporates a community aspect where users can share achievements and participate in challenges.\n6. AI-Powered Recommendations: Utilizes machine learning to provide personalized workout and nutrition suggestions based on user data and goals.\n\nTechnical Highlights:\n- React Native: Demonstrates proficiency in cross-platform mobile development, creating a seamless experience for both iOS and Android users.\n- Redux State Management: Implements Redux for efficient state management, ensuring a smooth and responsive user experience.\n- Firebase Integration: Utilizes Firebase for real-time data synchronization, user authentication, and cloud storage.\n- HealthKit and Google Fit APIs: Integrates with native health platforms on iOS and Android for accurate health and activity data collection.\n- Data Visualization: Employs advanced charting libraries to create intuitive, interactive visualizations of user health data.\n- Offline Functionality: Implements local storage solutions to allow app functionality without constant internet connectivity.\n\nThis project not only demonstrates my technical skills in mobile app development and data management but also showcases my ability to create applications that can have a positive impact on users' daily lives. The Mobile Fitness Tracker represents my capability to work with sensitive health data, integrate with third-party APIs, and create engaging, personalized user experiences in the mobile health sector."
  },
  {
    title: "Smart Home IoT System",
    description: "An integrated IoT system for smart home automation, featuring energy management, security, and voice control capabilities.",
    technologies: ["Raspberry Pi", "Python", "MQTT", "Node-RED", "TensorFlow Lite"],
    image: "/placeholder.svg?height=400&width=600",
    demo: "https://demo-link-6.com",
    source: "https://github.com/yourusername/project-6",
    learnMore: "The Smart Home IoT System is a cutting-edge solution that transforms ordinary houses into intelligent, efficient, and secure living spaces. This project showcases my expertise in IoT technologies, embedded systems programming, and creating user-centric smart home solutions.\n\nKey Features:\n1. Centralized Control Hub: Utilizes a Raspberry Pi as the central controller, managing all connected devices and systems.\n2. Energy Management: Implements smart algorithms to optimize energy usage, integrating with smart thermostats, lighting systems, and appliances.\n3. Advanced Security System: Incorporates cameras with AI-powered facial recognition and anomaly detection for enhanced home security.\n4. Voice Control Integration: Seamlessly integrates with popular voice assistants for hands-free control of smart home features.\n5. Custom Automation Scenarios: Allows users to create complex, multi-device automation routines tailored to their lifestyle.\n6. Real-time Monitoring and Alerts: Provides instant notifications for security breaches, energy usage spikes, or other user-defined events.\n\nTechnical Highlights:\n- Raspberry Pi & Python: Demonstrates proficiency in embedded Linux systems and Python programming for IoT applications.\n- MQTT Protocol: Utilizes MQTT for efficient, low-latency communication between various IoT devices and the central hub.\n- Node-RED: Employs Node-RED for creating intuitive, visual programming interfaces for automation flows.\n- TensorFlow Lite: Implements on-device machine learning for tasks like facial recognition and anomaly detection, showcasing skills in edge computing and AI.\n- Scalable Architecture: Designs a modular system that can easily accommodate new devices and functionalities.\n- Security-First Approach: Implements robust encryption and authentication mechanisms to ensure the privacy and security of user data.\n\nThis project not only highlights my technical skills in IoT development and system integration but also demonstrates my ability to create practical, user-friendly solutions that enhance daily living. The Smart Home IoT System stands as a testament to my capability to work with diverse technologies, from low-level embedded systems to high-level cloud integrations, creating a cohesive and powerful smart home ecosystem."
  },
]

const skills = [
  { name: "HTML5", icon: FileCode },
  { name: "CSS3", icon: PenTool },
  { name: "JavaScript", icon: Code },
  { name: "React", icon: Globe },
  { name: "Python", icon: Puzzle },
  { name: "Java", icon: Coffee },
  { name: "C++", icon: Cpu },
  { name: "SQL", icon: Database },
  { name: "Figma", icon: Figma },
  { name: "UML", icon: Diagram },
]

export default function Home() {
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const projectsPerPage = 3;

  const nextProjects = () => {
    setCurrentPage((prev) => (prev + 1) % Math.ceil(projects.length / projectsPerPage));
  };

  const prevProjects = () => {
    setCurrentPage((prev) => (prev - 1 + Math.ceil(projects.length / projectsPerPage)) % Math.ceil(projects.length / projectsPerPage));
  };

  const handleLearnMore = (project) => {
    setSelectedProject(project);
  };

  const closePopup = () => {
    setSelectedProject(null);
  };

  const visibleProjects = projects.slice(currentPage * projectsPerPage, (currentPage +1) * projectsPerPage);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-20">
        {/* Home section */}
        <section id="home" className="min-h-screen flex flex-col justify-center items-center text-center space-y-10">
          <div className="animate-fade-in space-y-6">
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-500">
              Chris Bolton
            </h1>
            <p className="text-3xl text-gray-300">
              Computer Science Student at University of Windsor
            </p>
            <Button 
              className="bg-teal-500 hover:bg-teal-600 text-white text-xl py-6 px-10 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Discover My Journey
            </Button>
          </div>
        </section>

        {/* About section */}
        <section id="about" className="py-20 space-y-32">
          <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-500 mb-10">
            About Me
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            I'm Chris Bolton, a passionate Computer Science student at the University of Windsor, set to graduate in 2026. 
            My journey in tech is driven by a deep enthusiasm for creating impactful digital experiences and solving real-world problems through code.
          </p>
          <div className="space-y-16">
            <h3 className="text-4xl font-semibold text-center text-teal-400 mb-10">Interests</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <Card className="bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-teal-400">Front-End Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">
                    I love crafting intuitive and visually appealing user interfaces. My focus is on creating responsive, 
                    accessible, and performant web applications using modern frameworks and best practices.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-teal-400">Full-Stack Development</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">
                    I'm passionate about building end-to-end solutions. From designing robust back-end systems to 
                    implementing seamless front-end experiences, I enjoy the challenge of full-stack development.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 hover:border-teal-500 transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-3xl font-semibold text-teal-400">Creating Meaningful Web Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-lg">
                    My goal is to develop web applications that make a difference. I'm driven by the opportunity to create 
                    solutions that solve real problems, enhance user experiences, and contribute positively to people's lives 
                    through technology.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="space-y-20 mt-32">
            <h3 className="text-4xl font-semibold text-center text-teal-400 mb-10">Skills</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center space-y-2 bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                  <skill.icon className="w-12 h-12 text-teal-400" />
                  <span className="text-gray-300 text-lg">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className="py-20 space-y-12">
          <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-500 mb-10">
            My Projects
          </h2>
          <div className="relative">
            <div className="flex justify-between items-center mb-6">
              <Button
                onClick={prevProjects}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 shadow-lg"
                aria-label="Previous projects"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                onClick={nextProjects}
                className="bg-teal-500 hover:bg-teal-600 text-white rounded-full p-2 shadow-lg"
                aria-label="Next projects"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {visibleProjects.map((project, index) => (
                <div key={index} className="bg-gray-800 border border-gray-700 hover:border-teal-500 transition-all duration-300 rounded-lg overflow-hidden">
                  <Card className="w-full h-full bg-transparent border-0">
                    <div className="relative pt-[56.25%]">
                      <Image
                        src={project.image}
                        alt={project.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-t-lg"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl font-bold text-teal-400">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-gray-300 text-sm mb-4">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className="bg-teal-600/20 text-teal-400 text-xs px-2 py-1 rounded-full border border-teal-500/50">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-4 p-6">
                      <Button asChild variant="outline" size="lg" className="w-full bg-teal-500/10 text-teal-400 border-teal-500/50 hover:bg-teal-500 hover:text-white transition-colors duration-300">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">Demo</a>
                      </Button>
                      <Button asChild variant="outline" size="lg" className="w-full bg-teal-500/10 text-teal-400 border-teal-500/50 hover:bg-teal-500 hover:text-white transition-colors duration-300">
                        <a href={project.source} target="_blank" rel="noopener noreferrer">Source</a>
                      </Button>
                      <Button variant="outline" size="lg" className="w-full bg-teal-500/10 text-teal-400 border-teal-500/50 hover:bg-teal-500 hover:text-white transition-colors duration-300" onClick={() => handleLearnMore(project)}>
                        Learn More
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="py-20 space-y-32">
          <h2 className="text-5xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-sky-500 mb-10">
            Contact Me
          </h2>
          <form className="space-y-8 max-w-md mx-auto">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">Name</Label>
              <Input
                type="text"
                id="name"
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-300">Email</Label>
              <Input
                type="email"
                id="email"
                required
                className="bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="text-gray-300">Message</Label>
              <Textarea
                id="message"
                required
                rows={4}
                className="bg-gray-700 border-gray-600 text-white focus:ring-teal-500 focus:border-teal-500"
              />
            </div>
            <Button type="submit" className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 rounded-full transition-all duration-300 transform hover:scale-105">
              Send Message
            </Button>
          </form>
          <div className="mt-12 flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Linkedin className="w-8 h-8" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Github className="w-8 h-8" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:your.email@example.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <Mail className="w-8 h-8" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </section>
      </main>
      {selectedProject && (
        <ProjectPopup project={selectedProject} onClose={closePopup} />
      )}
    </div>
  )
}

