import { motion } from 'framer-motion';

function About() {
    return (
      <div id="about" className="min-h-screen flex flex-col justify-center items-center py-20 px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-gray-200 mb-4">Who I Am</h2>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">About Me</h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 md:p-8 shadow-xl">
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed space-y-4">
                I am a passionate developer with a strong interest in cybersecurity and low-level development. I enjoy solving complex problems, whether it's building a robust packet sniffer, exploring advanced techniques in red teaming, or designing algorithms to generate wordlists for penetration testing.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                My experience spans across several technologies, including Node.js, C++, and MongoDB, with a focus on building efficient, console-based applications and integrating various systems for optimal performance.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                Currently, I am working on a project that combines my love for wordlists and cybersecurity, developing a tool to generate custom wordlists based on clues.
              </p>
              
              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200"
                >
                  🔒 Cybersecurity
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200"
                >
                  💻 Low-level Development
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200"
                >
                  🛠 System Integration
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200"
                >
                  🌐 Full-Stack Development
                </motion.div>
              </div>
            </div>
          </motion.div>
      </div>
    );
  }

  export default About;