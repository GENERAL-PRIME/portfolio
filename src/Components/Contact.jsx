import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-gradient-to-b from-gray-800 via-gray-900 to-black text-white py-16 px-8"
    >
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-lg text-gray-300 mb-8">
          Feel free to reach out to me via any of the platforms below!
        </p>

        <div className="space-y-6">
          {/* Phone */}
          <motion.a
            href="tel:+91 7980834697" // Replace with your actual phone number
            className="flex items-center justify-center gap-3 text-lg hover:text-indigo-400 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Phone className="w-6 h-6" /> +91 79808-34697
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:amborish.sen.work@gmail.com" // Replace with your email
            className="flex items-center justify-center gap-3 text-lg hover:text-indigo-400 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Mail className="w-6 h-6" /> amborish.sen.work@gmail.com
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/amborish-sen-0775b8202/" // Replace with your LinkedIn
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-lg hover:text-indigo-400 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Linkedin className="w-6 h-6" /> linkedin.com/in/amborish-sen
          </motion.a>

          {/* GitHub */}
          <motion.a
            href="https://github.com/GENERAL-PRIME" // Replace with your GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 text-lg hover:text-indigo-400 transition"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Github className="w-6 h-6" /> github.com/GENERAL-PRIME
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
