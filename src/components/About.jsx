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
                I am a final-year Computer Engineering student passionate about coding, programming, and software development. With deep technical expertise in software programming, I specialize in crafting high-performance, dynamic web applications utilizing HTML, CSS, JavaScript, TypeScript, and the MERN stack (MongoDB, ExpressJS, ReactJS, NodeJS).
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                 Driven by rigorous logical reasoning, I am an active competitive programmer on Codeforces, where I frequently participate in timed rounds and algorithmic contests. This rigorous training has honed my ability to translate complex problems into optimal mathematical frameworks, specializing in advanced data structures, complexity optimization, and algorithmic efficiency.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                 My project portfolio reflects a balance between technical depth and creative problem-solving. Key milestones include:
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                SDG Buddy: A holistic sustainable tracking framework designed to help individuals align their daily actions with the United Nations Sustainable Development Goals.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                Healthcare Appointment Management System: A structured digital platform optimizing medical scheduling and patient workflows.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
              Cybersecurity Wordlist Generation Tool: A targeted utility built for educational security awareness and defensive development testing.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                Hangman Game: A classic logic implementation engineered in C++.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                In addition to building scalable applications, I leverage my rigorous engineering background as an AI Data Trainer, where I evaluate complex code outputs, perform precise code verification, and fine-tune large language models (LLMs) to ensure technical accuracy and optimal performance.
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