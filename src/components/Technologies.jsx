import { BiLogoTypescript, BiLogoJava, BiLogoNodejs, BiLogoCPlusPlus, BiLogoReact, BiLogoMongodb, BiLogoJavascript, BiLogoGithub, BiData } from 'react-icons/bi';
import { SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';

function TechCard({ icon, name, category }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-white/10 transition-all"
    >
      <div className="text-purple-400">{icon}</div>
      <div className="text-center">
        <h3 className="text-white font-semibold">{name}</h3>
        <p className="text-sm text-gray-400">{category}</p>
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
        <TechCard icon={<BiLogoReact className="text-6xl" />} name="React" category="Frontend" />
        <TechCard icon={<SiNextdotjs className="text-6xl" />} name="Next.js" category="Full-stack framework" />
        <TechCard icon={<BiLogoNodejs className="text-6xl" />} name="Node.js" category="Backend" />
        <TechCard icon={<BiLogoTypescript className="text-6xl" />} name="TypeScript" category="Language" />
        <TechCard icon={<BiLogoJavascript className="text-6xl" />} name="JavaScript" category="Language" />
        <TechCard icon={<BiLogoCPlusPlus className="text-6xl" />} name="C / C++" category="Language" />
        <TechCard icon={<BiLogoJava className="text-6xl" />} name="Java" category="Language" />
        <TechCard icon={<BiLogoMongodb className="text-6xl" />} name="MongoDB" category="Database, Atlas Vector Search" />
        <TechCard icon={<BiData className="text-6xl" />} name="SQL" category="Database" />
        <TechCard icon={<BiLogoGithub className="text-6xl" />} name="Git & GitHub" category="Version control" />
      </div>
    </div>
  );
}

export default Technologies;
