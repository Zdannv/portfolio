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
              A proactive and dedicated individual with a strong foundation in informatics engineering and a genuine passion for human resources,
              technology, and design. Driven by a commitment to education and community development, I seek to leverage my skills in a dynamic
              environment to contribute meaningfully to organizational goals and foster innovation.
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