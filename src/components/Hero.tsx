'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-xl text-blue-600 dark:text-blue-400 font-semibold mb-4">Hello, I am</h2>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Muhammad Zaidan<br />
              <span className="text-blue-600 dark:text-blue-400">Zhafiz Satrianto</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Informatics Engineering Student
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="mailto:zaidanzhafifsatrianto@gmail.com"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiMail className="w-5 h-5" />
                <span>zaidanzhafifsatrianto@gmail.com</span>
              </a>
              <a
                href="tel:+6287855310680"
                className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiPhone className="w-5 h-5" />
                <span>+6287855310680</span>
              </a>
            </div>
            <div className="flex gap-4">
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors"
              >
                Contact Me
              </motion.a>
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white transition-colors"
              >
                View Projects
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl transform rotate-6"></div>
            <div className="absolute inset-0 bg-blue-600/20 rounded-3xl transform -rotate-6"></div>
            <div className="relative rounded-2xl overflow-hidden w-full h-full">
              <Image
                src="/formal-photo.jpg"
                alt="Muhammad Zaidan Zhafiz Satrianto"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
                className="rounded-2xl"
                priority
              />
            </div>
            
            <div className="absolute -bottom-6 -right-6 flex gap-4 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-lg">
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <FiLinkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 