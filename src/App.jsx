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
    <div>
        <video src="background.mp4" loop autoPlay muted className="fixed top-0 left-0 object-cover -z-10 w-full h-full" />
        <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-2 bg-blue-500 origin-left"
        />
        <Header />
        <Hero />
        <Technologies />
        <Projects />
        <About />
        <Contact />
    </div>
  )
}

export default App;
