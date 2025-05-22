'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const About = () => {
  const images = [
    {
      src: '/images/casual-photo.jpg',
      alt: 'Casual photo at tourist destination'
    },
    {
      src: '/images/formal-event.jpg',
      alt: 'At a formal event'
    },
    {
      src: '/images/presentation.jpg',
      alt: 'Giving a presentation'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-gray-100 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I am a passionate Informatics Engineering student at the Electronic Engineering Polytechnic Institute of Surabaya
(PENS), with a strong interest in software development, computer networks, and cybersecurity. My academic
background is complemented by active involvement in organizational activities, where I have taken on leadership
roles, conducted technical training, and represented communities at various events.<br></br><br />
With experience in both technical and non-technical domains, I bring strong skills in programming, public speaking,
and team coordination. I enjoy sharing knowledge particularly in Linux, networking, and security and continuously
seek opportunities to grow through hands-on projects and community contributions. I am eager to apply my skills and
learn within collaborative, forward-thinking teams.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Vision</h3>
                <p className="text-gray-600 dark:text-gray-300">To become a leading innovator in technology and community development</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Mission</h3>
                <p className="text-gray-600 dark:text-gray-300">Continuously learning and contributing to meaningful technological solutions</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {images.map((image, index) => (
              <motion.div
                key={index}
                className={`relative rounded-xl overflow-hidden ${
                  index === 2 ? 'col-span-2' : ''
                } aspect-[4/3]`}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About 