import { motion } from "framer-motion";

function Hero() {

  return (
    <div id="hero" className="flex flex-col md:flex-row justify-center items-center min-h-screen gap-8 px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 md:p-20 text-center md:text-left"
        >
            <h2 className="text-xl text-gray-200 mb-4">Hello, I'm</h2>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">Tejas Kakani</h1>
            <h2 className="text-2xl md:text-3xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-6">Software Developer</h2>
            <p className="text-gray-300 max-w-md mb-8">Passionate about creating innovative solutions and turning complex problems into elegant code.</p>
            <motion.a
              href="https://github.com/TejasKakani"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all cursor-pointer"
            >
              View My Work
            </motion.a>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden md:block"
        >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 rounded-full blur-lg opacity-50"></div>
              <img 
                src="tejas.jpg" 
                className="rounded-full w-64 h-64 object-cover border-4 border-white/10 relative z-10" 
                alt="Tejas Kakani" 
              />
            </motion.div>
        </motion.div>
    </div>
  );
}

export default Hero;