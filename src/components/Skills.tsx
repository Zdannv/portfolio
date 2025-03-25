'use client'

import { motion } from 'framer-motion'
import { FiCode, FiGlobe, FiMessageSquare } from 'react-icons/fi'

const Skills = () => {
  const technicalSkills = [
    { name: "C, C++, JAVA", level: "Intermediate" },
    { name: "Flutter, Laravel, Next JS, React", level: "Intermediate" },
    { name: "Python", level: "Intermediate" },
    { name: "Data Visualization with Tableau", level: "Intermediate" },
    { name: "Video Editing", level: "Intermediate" },
    { name: "Computer Network Skills", level: "Intermediate" },
    { name: "Design & UI/UX", level: "Advanced" },
    { name: "Cyber Security", level: "Intermediate" },
    { name: "Frontend Development", level: "Advanced" }
  ]

  const languages = [
    { name: "English", level: "Intermediate" },
    { name: "Japanese", level: "Beginner" }
  ]

  const otherSkills = [
    "Advance Speech and Presentation"
  ]

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Skills</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FiCode className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Technical Skills</h3>
            </div>
            <div className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{skill.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FiGlobe className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Languages</h3>
            </div>
            <div className="space-y-4">
              {languages.map((language, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300">{language.name}</span>
                  <span className="text-sm text-blue-600 dark:text-blue-400">{language.level}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Other Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
          >
            <div className="flex items-center mb-6">
              <FiMessageSquare className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Other Skills</h3>
            </div>
            <div className="space-y-4">
              {otherSkills.map((skill, index) => (
                <div key={index} className="flex items-center">
                  <span className="text-gray-700 dark:text-gray-300">{skill}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Skills 