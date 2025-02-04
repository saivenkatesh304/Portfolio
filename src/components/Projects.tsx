import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github } from 'lucide-react';

// Import images
import gym1 from './gym1.png'; // Adjust the path as needed
import face from './face.png'; // Adjust the path as needed
import agro from './Agro.png'; // Adjust the path as needed

const projects = [
  {
    title: "Fit-Formulas Website",
    category: "Web Development",
    description: "Developed a fitness website offering workout plans, user registration, and login functionality. Created responsive web pages with HTML, CSS, and JavaScript, enhancing user experience and engagement.",
    image: gym1, // Use the imported image
    github: "https://github.com/saivenkatesh304/Fit-Formulas"
  },
  {
    title: "Face Recognition Attendance System",
    category: "Computer Vision",
    description: "Developed a solution that automates attendance tracking using facial recognition technology. It captures and processes facial images to identify individuals and mark their attendance in real time. This system enhances security, eliminates proxy attendance, and reduces manual errors",
    image: face, // Use the imported image
    github: "https://github.com/saivenkatesh304/Face-Recognition-Attendance-System.git"
  },
  {
    title: "Agro-Vision",
    category: "Machine Learning",
    description: "Built a solution for real-time crop prediction, crop recommendation, and yield prediction using machine learning models. Implemented using Python, Flask, NumPy, and pickle for data handling and model storage",
    image: agro, // Use the imported image
    github: "https://github.com/saivenkatesh304/Agro_Vision"
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedProject(project)}
              className="bg-gray-900 rounded-lg overflow-hidden cursor-pointer"
            >
              <img
                src={project.image} // Use the imported image
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.category}</p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-purple-500 hover:text-purple-400"
                >
                  <Github className="w-5 h-5 mr-2" />
                  View on GitHub
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gray-900 p-8 rounded-lg max-w-2xl w-full"
              >
                <img
                  src={selectedProject.image} // Use the imported image
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4 text-white">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-purple-500">{selectedProject.category}</span>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-purple-500 text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    View Project
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Projects;