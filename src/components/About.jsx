import { motion } from 'framer-motion';

const highlights = [
  "Full-Stack Development",
  "Speaker, UNGA80 Science Summit",
  "Competitive Programming",
  "AI / LLM Evaluation",
];

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
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
            I'm a Computer Engineering graduate (SNJB College of Engineering, SPPU, 2026) and a full-stack developer. I build web applications with React, Next.js, Node.js, TypeScript and MongoDB, and I'm looking for remote software developer roles.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
            My main project, SDG Buddy, helps people align their daily actions with the UN Sustainable Development Goals and includes a recommendation engine built on MongoDB Vector Search. I presented it at the Science Summit at the UN General Assembly (UNGA80) in 2025. I've also built an appointment platform for doctors and patients, and shipped a C++ clipboard app to the Microsoft Store.
          </p>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed mt-4">
            I compete on Codeforces, which keeps my data structures and problem solving sharp. I also work as a freelance AI trainer, writing prompts and verifying code outputs to evaluate large language models for accuracy and reasoning.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            {highlights.map((item) => (
              <motion.div
                key={item}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default About;
