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
        >
            <div className="bg-white p-4 rounded-lg shadow-lg h-96 w-80">
                <h1 className="font-bold text-xl text-center">{title}</h1>
                <p className="text-center text-wrap overflow-hidden">{description}</p>
            </div>
        </motion.div>
    );
}

function Projects() {

  return (
    <>
    <div id="projects" className="h-screen flex flex-col justify-center items-center">
      <h1 className="pt-28 justify-self-center text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Projects</h1>
        <div className="flex p-20 gap-4 overflow-x-auto">
            <Card title="Voicer ( In Progress )" description="A Testimonial gathering website for businesses." />
            <Card title="Wordlists and Cybersecurity" description="Generating fully customized wordlists for password based penetration testing." />
            <Card title="Cybersecurity Pentesting Lab" description="Setup an Environment for learning and testing the vulnerabilities, scanning and exploiting them by penetrating into it." />
            <Card title="Hangman Game" description="Console based word guessing Game written in C++." />
            <Card title="Ping Poll Game" description="Graphical based Game written in C++ using SFML library." />
            <Card title="Admin Dashboard" description="A Dashboard for managing the users and their data written in Typescript and NodeJS." />
        </div>
    </div>
    </>
  );
}

export default Projects;