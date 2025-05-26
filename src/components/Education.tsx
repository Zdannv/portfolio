'use client'

import { motion } from 'framer-motion'
import { FiAward, FiTarget } from 'react-icons/fi'

interface School {
  name: string;
  location: string;
  period: string;
  degree?: string;
  gpa?: string;
  transcript?: string;
}

const Education = () => {
  const education = {
    schools: [
      {
        name: "Electronic Engineering Polytechnic Institute of Surabaya",
        location: "Surabaya",
        period: "July 2023 - Now",
        degree: "Informatics Engineering student",
        gpa: "3.68 / 4.00",
        transcript: "Transkip_zaidan.pdf"
      }
    ] as School[],
    achievements: [
      "3rd Winner – JA Titan Business Competition, Prestasi Junior Indonesia",
      "Harapan 3 – Business and Startup Competition, KEMENKEU 2022",
      "Top 16 – ITS Schematics National Logic Competition",
      "Top 5 Finalist – Duta Pelajar Putra, JawaPos SMA Awards 2023",
      "Gemastik 2024 – Cyber Security CTF",
      "Compfest 2024 – Cyber Security CTF",
      "Technofair 2024 – Capture The Flag",
      "DTS TSA Cyber Champion 2024 – CTF",
      "Fasilkom UI/UX Competition 2024"
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
          className="max-w-4xl mx-auto space-y-8"
        >
          {education.schools.map((school, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{school.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{school.location} | {school.period}</p>
              </div>

              {school.degree && (
                <div className="mb-6">
                  <p className="text-lg text-gray-700 dark:text-gray-200 mb-2">{school.degree}</p>
                  {school.gpa && <p className="text-gray-600 dark:text-gray-300">Current GPA: {school.gpa}</p>}
                  {school.transcript && (
                    <a 
                      href={school.transcript}
                      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Transcript
                    </a>
                  )}
                </div>
              )}
            </div>
          ))}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <FiAward className="mr-2" />
              Achievements & Competitions
            </h4>
            <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
              {education.achievements.map((achievement, index) => (
                <li key={index}>{achievement}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education 