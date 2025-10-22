import Header from "./components/Header"
import Hero from "./components/Hero"
import Projects from "./components/Projects";
import About from "./components/About";
import { motion, useScroll, useSpring } from "framer-motion";
import Contact from "./components/Contact";
import Technologies from "./components/Technologies";

function App() {

  const {scrollYProgress} = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-gradient-to-b from-gray-900 to-black min-h-screen text-white">
        {/* Animated gradient background */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(76,29,149,0.15),rgba(0,0,0,0))]"></div>
          <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
        </div>
        
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 origin-left z-[60]"
        />
        
        <div className="max-w-7xl mx-auto">
          <Header />
          <Hero />
          <Technologies />
          <Projects />
          <About />
          <Contact />
        </div>
    </div>
  )
}

export default App;
