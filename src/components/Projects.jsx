import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Card({title, description, link, status}) {
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
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl h-[450px] flex flex-col relative"
            >
                <div className="flex items-start justify-between mb-6">
                    <h1 className="font-bold text-2xl text-white">{title}</h1>
                    {status && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {status}
                        </span>
                    )}
                </div>
                <p className="text-gray-300 text-lg flex-grow leading-relaxed">{description}</p>
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
  const containerRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    
    const container = containerRef.current;
    const containerWidth = container.offsetWidth;
    const mouseX = e.clientX;
    const containerRect = container.getBoundingClientRect();
    const containerLeft = containerRect.left;
    const scrollWidth = container.scrollWidth;
    
    // Calculate the scroll position based on mouse position
    const scrollZone = 0.2; // 20% of the container width on each side
    const zoneWidth = containerWidth * scrollZone;
    
    if (mouseX < containerLeft + zoneWidth) {
      // Scroll left when mouse is in the left zone
      const scrollSpeed = (1 - (mouseX - containerLeft) / zoneWidth) * 15;
      container.scrollLeft -= scrollSpeed;
    } else if (mouseX > containerLeft + containerWidth - zoneWidth) {
      // Scroll right when mouse is in the right zone
      const scrollSpeed = (1 - (containerLeft + containerWidth - mouseX) / zoneWidth) * 15;
      container.scrollLeft += scrollSpeed;
    }
  };

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
      <div 
        className="w-full overflow-hidden px-4 md:px-8 pb-8"
        onMouseMove={handleMouseMove}
      >
         <div 
           ref={containerRef}
           className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar min-w-full scroll-smooth">
          <Card 
            title="SDG Buddy" 
            description="A sustainability tracking app that gamifies eco-friendly actions. Rewards users for sustainable behaviors aligned with UN SDGs. Features real-time tracking and an innovative reward system." 
            link="https://github.com/TejasKakani/SDG-Buddy"
            status="In Progress"
          />
          <Card 
            title="Appointment Management System" 
            description="A sophisticated platform for scheduling medical appointments. Features real-time availability and intuitive interface." 
            link="https://github.com/TejasKakani/Appointment-Management-System"
          />
          <Card 
            title="Cybersecurity Tools" 
            description="Security tools including custom wordlist generator. Built with focus on security best practices." 
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