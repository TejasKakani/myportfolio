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
                I am an Final Year Computer Engineering student passionate about coding, programming, and software development. With expertise in software programming and development, I specialize in crafting dynamic web applications using HTML, CSS, JavaScript, TypeScript, and the MERN stack, which includes MongoDB, ExpressJS, ReactJS, and NodeJS.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                 I have engaged in diverse projects such as developing a Hangman Game in C++, a cybersecurity Wordlist Generation Tool, and an Appointment Management System for healthcare, all showcasing my technical skills and creative problem-solving abilities.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                 Additionally, I am currently working on a sustainable development project titled SDG Buddy. It is a sustainable tracker which is designed to help individuals in aligning their daily actions with the United Nation Sustainable Development Goals.
              </p>
              <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
                Other than that, I have a deep appreciation for mathematics, and I believe in asking precise, logical questions and then representing the entire thought process through mathematical reasoning is the most effective way to learn, understand, and solve problems. It provides not just answers, but a structured pathway of thinking where every step, every assumption, and every conclusion can be justified and explored.
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