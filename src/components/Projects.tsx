'use client'

import { motion } from 'framer-motion'
import { FiAward, FiTarget, FiVideo } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      title: "Duta Pelajar Putra",
      description: "Top 5 Duta Pelajar Putra, JawaPos SMA Award 2023",
      link: "https://youtu.be/w_ULh5nufSI?si=u7DTl5aWn8iRZ1pR",
      icon: FiVideo,
      category: "Achievement"
    },
    {
      title: "ITS Manifest",
      description: "3rd Place in Business Plan Competition category",
      icon: FiAward,
      category: "Competition"
    },
    {
      title: "ITS Schematics",
      description: "National Logic Competition Top 16 out of 1000++ participants",
      icon: FiTarget,
      category: "Competition"
    },
    {
      title: "KEMENKEU Competition",
      description: "3rd Runner Up Business and StartUp Competitions KEMENKEU 2022",
      icon: FiAward,
      category: "Competition"
    }
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Projects & Achievements</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <project.icon className="w-6 h-6 text-blue-600 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-blue-600 dark:text-blue-400">{project.category}</span>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Watch Video →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 