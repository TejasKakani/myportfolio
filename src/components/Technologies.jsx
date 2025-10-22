import {BiLogoTypescript} from 'react-icons/bi';
import {BiLogoJava} from 'react-icons/bi';
import { BiLogoNodejs } from 'react-icons/bi';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoMongodb } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { motion } from 'framer-motion';

function TechCard({ icon, name, level, color }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all"
    >
      <div className={`text-${color}-500`}>{icon}</div>
      <div className="text-center">
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{level}</p>
      </div>
    </motion.div>
  );
}

function Technologies() {
  return (
    <div id="technologies" className="min-h-screen flex flex-col justify-center items-center py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-gray-200 mb-4">What I Work With</h2>
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Technologies & Skills</h1>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto px-4">
        <TechCard icon={<BiLogoCPlusPlus className="text-6xl" />} name="C++" level="Advanced" color="blue" />
        <TechCard icon={<BiLogoJavascript className="text-6xl" />} name="JavaScript" level="Expert" color="yellow" />
        <TechCard icon={<BiLogoTypescript className="text-6xl" />} name="TypeScript" level="Advanced" color="blue" />
        <TechCard icon={<BiLogoJava className="text-6xl" />} name="Java" level="Intermediate" color="red" />
        <TechCard icon={<BiLogoNodejs className="text-6xl" />} name="Node.js" level="Advanced" color="green" />
        <TechCard icon={<BiLogoReact className="text-6xl" />} name="React" level="Expert" color="blue" />
        <TechCard icon={<BiLogoMongodb className="text-6xl" />} name="MongoDB" level="Intermediate" color="green" />
      </div>
    </div>
  );
}

export default Technologies;