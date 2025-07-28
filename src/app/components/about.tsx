"use client"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="py-12 px-4 text-center overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-bold mb-4"
      >
        Welcome to <span className="text-red-700">Klare Academy</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto mb-10"
      >
        We help students succeed in exams like WAEC, IGCSE, and GCSE with focused ICT and Computer Science prep. We also offer coding lessons in Python, Java, Pseudocode, and Algorithms for all grade levels—taught through engaging online sessions.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md p-4 rounded-xl"
        >
          <h4 className="font-semibold text-lg">🎯 Exam-Focused</h4>
          <p className="text-sm text-gray-600">Targeted prep for WAEC, IGCSE, and GCSE success.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md p-4 rounded-xl"
        >
          <h4 className="font-semibold text-lg">💻 Real Coding</h4>
          <p className="text-sm text-gray-600">Hands-on with Python, Java, Pseudocode & Algorithms.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md p-4 rounded-xl"
        >
          <h4 className="font-semibold text-lg">🧠 Smart Learning</h4>
          <p className="text-sm text-gray-600">Concepts made simple with a student-first approach.</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.5 }}
          transition={{duration: 0.5, delay: 0.2 }}
          className="bg-white shadow-md p-4 rounded-xl"
        >
          <h4 className="font-semibold text-lg">🌐 Online Access</h4>
          <p className="text-sm text-gray-600">Join our virtual classes from anywhere in the world.</p>
        </motion.div>
      </div>
    </section>
  )
}
