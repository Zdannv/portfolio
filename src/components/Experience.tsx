'use client'

import { motion } from 'framer-motion'
import { FiBriefcase, FiUsers, FiCode, FiShield } from 'react-icons/fi'
import Image from 'next/image'

const Experience = () => {
  const experiences = [
    {
      title: "Open Source Community",
      organization: "Electronic Engineering Polytechnic Institute of Surabaya",
      position: "Vice President",
      description: [
        "Help the community to active",
        "Contribute in community discussion",
        "Make an event for the community"
      ],
      icon: FiUsers,
      image: '/images/team-photo.jpg'
    },
    {
      title: "Instructor Committee",
      organization: "Ospek Jurusan teknik informatika",
      position: "Committee Member",
      description: [
        "Electronic Engineering Polytechnic Institute of Surabaya"
      ],
      icon: FiBriefcase
    },
    {
      title: "Marketing Team",
      organization: "Cleanova",
      position: "Team Member",
      description: [
        "Part of the marketing team"
      ],
      icon: FiCode
    },
    {
      title: "Cyber Security Competitions",
      organization: "Various Competitions",
      position: "Participant",
      description: [
        "Participant in Cyber Security competition (capture the flag) compfest, gemastik",
        "32 besar Cyber Security competition (capture the flag) Technofair"
      ],
      icon: FiShield
    }
  ]

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {exp.image && (
                <div className="relative h-80 w-full">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                    className="hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-600/10 rounded-lg mr-4">
                    <exp.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{exp.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-200 font-medium mb-4">{exp.organization}</p>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="h-6 flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience 