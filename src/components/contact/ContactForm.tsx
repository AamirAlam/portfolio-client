import { motion } from 'framer-motion';

export function ContactForm() {
  return (
    <form className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Name"
          className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="email"
          placeholder="Email"
          className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <motion.input
        whileFocus={{ scale: 1.02 }}
        type="text"
        placeholder="Subject"
        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <motion.textarea
        whileFocus={{ scale: 1.02 }}
        placeholder="Message"
        rows={4}
        className="w-full px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        type="submit"
        className="w-full px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-colors"
      >
        Send Message
      </motion.button>
    </form>
  );
}