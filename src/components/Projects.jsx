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
            opacity: scrollYProgress
        }}
        >
            <div className="bg-white p-4 rounded-lg shadow-lg h-96 w-80">
                <h1 className="font-bold text-xl text-center">{title}</h1>
                <p className="text-center text-wrap overflow-hidden">{description}</p>
                <a href={link} className="text-blue-500">Read More</a>
            </div>
        </motion.div>
    );
}

function Projects() {

  return (
    <>
    <div id="projects" className="h-screen ">
      <h1 className="pt-28 justify-self-center text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Projects</h1>
        <div className="flex p-20 gap-4 overflow-x-auto">
            <Card title="Project 1" description="This is a project description" link="https://www.google.com" />
            <Card title="Project 2" description="This is a project description" link="https://www.google.com" />
            <Card title="Project 3" description="This is a project description" link="https://www.google.com" />
            <Card title="Project 4" description="This is a project description" link="https://www.google.com" />
            <Card title="Project 5" description="This is a project description" link="https://www.google.com" />
        </div>
    </div>
    </>
  );
}

export default Projects;