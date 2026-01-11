'use client';

import { motion } from 'framer-motion';

export default function ClientTitle() {
  return (
    <motion.div
      className="text-center mb-6"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent mb-4"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.2,
          type: 'spring',
          stiffness: 100,
        }}
      >
        Premium English
      </motion.h1>

      <motion.div
        className="h-1 w-24 mx-auto bg-gradient-to-r from-primary to-blue-600 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: 96 }}
        transition={{
          duration: 1,
          delay: 0.8,
          ease: 'easeOut',
        }}
      />
    </motion.div>
  );
}
