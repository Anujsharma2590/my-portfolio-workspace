"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className=" flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16">
      {/* Content Section */}
      <div className="text-center md:text-left md:w-1/2">
        {/* Animated Heading */}
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi <span className="text-blue-500">Anuj Sharma</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="mt-4 text-lg text-gray-600"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          A passionate Frontend Developer building interactive and responsive
          web applications.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          href="#about"
          className="inline-block mt-6 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Learn More
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Image
          src="/profile.png"
          alt="Anuj Sharma"
          width={700}
          height={700}
          className="object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
