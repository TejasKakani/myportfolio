import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Card({title, description, link}) {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["0 1", "1.1 1"]
    });
    return (
        <motion.div
          ref={ref}
          style={{
              scale: scrollYProgress,
              opacity: scrollYProgress,
          }}
          className="flex-shrink-0 w-[300px] md:w-[350px]"
        >
            <motion.div 
              whileHover={{ scale: 1.03 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl shadow-xl h-[400px] flex flex-col"
            >
                <h1 className="font-bold text-2xl text-white mb-4">{title}</h1>
                <p className="text-gray-300 text-lg flex-grow">{description}</p>
                {link && (
                  <motion.a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="mt-4 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg text-center hover:shadow-lg transition-all"
                  >
                    View Project
                  </motion.a>
                )}
            </motion.div>
        </motion.div>
    );
}

function Projects() {

  return (
    <>
    <div id="projects" className="min-h-screen flex flex-col justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-200 mb-4">My Work</h2>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Featured Projects</h1>
      </motion.div>
      <div className="w-full overflow-hidden px-4 md:px-8 pb-8">
        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar min-w-full">
          <Card 
            title="Appointment Management System" 
            description="A sophisticated platform for scheduling medical appointments. Features real-time availability, automated notifications, and intuitive interface." 
            link="https://github.com/TejasKakani/Appointment-Management-System"
          />
          <Card 
            title="Cybersecurity Tools" 
            description="Suite of security tools including custom wordlist generator and penetration testing lab. Built with focus on security best practices." 
            link="https://github.com/TejasKakani/Wordlists-and-Cybersecurity"
          />
          <Card 
            title="Gaming Projects" 
            description="Collection of games including Hangman (C++) and Ping Pong (C++ with SFML). Demonstrates strong fundamentals in game development." 
            link="https://github.com/TejasKakani/HangMan"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;