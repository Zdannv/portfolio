'use client'

import { motion } from 'framer-motion'
import { FiAward, FiTarget } from 'react-icons/fi'

const Education = () => {
  const education = {
    school: "Electronic Engineering Polytechnic Institute of Surabaya",
    location: "Surabaya",
    period: "July 2023 - Now",
    degree: "Informatics Engineering student",
    gpa: "3.76 / 4.00",
    achievements: [
      "Entered the Ranks of Top Scorers (20 out of 320 students), 89.21 / 100",
      "ITS Manifest, 3rd Place in Business Plan Competition category",
      "ITS Schematics, National Logic Competition Top 16 out of 1000++ participants",
      "Top 5 Duta Pelajar Putra, JawaPos SMA Award 2023"
    ],
    honors: [
      "Student Company SMA Negeri 1 Waru - Vice President",
      "Launched an F&B business during COVID-19, achieving a 250% profit margin",
      "3rd Runner Up Business and StartUp Competitions KEMENKEU 2022"
    ]
  }

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{education.school}</h3>
              <p className="text-gray-600 dark:text-gray-300">{education.location} | {education.period}</p>
            </div>

            <div className="mb-6">
              <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">{education.degree}</p>
              <p className="text-gray-600 dark:text-gray-300">Current GPA: {education.gpa}</p>
            </div>

            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiAward className="mr-2" />
                Academic Achievements
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {education.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <FiTarget className="mr-2" />
                Honors & Awards
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                {education.honors.map((honor, index) => (
                  <li key={index}>{honor}</li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 