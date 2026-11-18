import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

function Card({title, description, link, status, demoLink, demoLabel = "View Demo", linkLabel = "View Code"}) {
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
              className="bg-white/5 backdrop-blur-sm p-8 rounded-xl shadow-xl min-h-[450px] h-full flex flex-col relative"
            >
        <div className="flex items-start justify-between mb-6">
          <h1 className="font-bold text-xl md:text-2xl text-white">{title}</h1>
                    {status && (
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                            {status}
                        </span>
                    )}
                </div>
                <p className="text-gray-300 text-base md:text-lg flex-grow leading-relaxed">{description}</p>
                <div className="flex gap-1 flex-col">
                {demoLink && (
                  <motion.a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    className="m-2 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-6 py-1 rounded-lg text-center hover:shadow-lg transition-all whitespace-nowrap mt-auto self-end"
                  >
                    {demoLabel}
                  </motion.a>
                )}
                {link && (
                  <motion.a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="m-2 inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 md:px-6 py-1 rounded-lg text-center hover:shadow-lg transition-all whitespace-nowrap mt-auto self-end"
                  >
                    {linkLabel}
                  </motion.a>
                )}
                </div>
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
            description="Tracks daily actions against the UN Sustainable Development Goals, with charts, streaks and a leaderboard. Includes a recommendation engine built on MongoDB Vector Search. Presented at UNGA80, 2025. Built with Next.js and MongoDB."
            link="https://github.com/TejasKakani/sdg-buddy"
            status="Featured"
            demoLink="https://sdgbuddy.app/"
            demoLabel="Live Site"
          />
          <Card
            title="Appointment Management System"
            description="Doctors register and publish free time slots; patients book and reschedule appointments, and both sides can review each other. Built with Next.js, MongoDB and JWT authentication."
            link="https://github.com/TejasKakani/Appointment-Management-System"
          />
          <Card
            title="Weighted Stream Cache Engine"
            description="A C++20 cache engine that models seven-slot cache reuse as a minimum-cost flow problem to find an offline-optimal caching strategy, checked against an independent Python verifier."
            link="https://github.com/TejasKakani/weighted-stream-cache"
          />
          <Card
            title="Multi Item Clipboard"
            description="A free Windows 10/11 clipboard manager published on the Microsoft Store. It saves everything you copy and pastes any item in one click. Built in C++ with the native Windows API; data stays on your device."
            status="Microsoft Store"
            demoLink="https://lnkd.in/d5BfvS52"
            demoLabel="Get it on the Store"
          />
          <Card
            title="Wordlists & Cybersecurity"
            description="An educational wordlist generator built for security awareness and defensive testing."
            link="https://github.com/TejasKakani/Wordlists-and-Cybersecurity"
          />
        </div>
      </div>
      </div>
    </>
  );
}

export default Projects;