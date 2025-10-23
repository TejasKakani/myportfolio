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
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <motion.a
                href="https://github.com/TejasKakani"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 h-14 rounded-full hover:shadow-lg transition-all cursor-pointer text-base font-medium"
                style={{ minWidth: '150px' }}
              >
                View My Work
              </motion.a>
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/10 overflow-hidden">
                <motion.a
                  href="/myportfolio/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-8 py-3 flex items-center gap-2 hover:bg-white/20 transition-all cursor-pointer text-base font-medium"
                  style={{ borderTopLeftRadius: '9999px', borderBottomLeftRadius: '9999px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Resume
                </motion.a>
                <span className="w-px h-8 bg-white/20 mx-1"></span>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="w-14 h-14 flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all cursor-pointer rounded-full relative"
                  title="Go to Contact to Download Resume"
                  style={{ borderTopRightRadius: '9999px', borderBottomRightRadius: '9999px' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v4m0 0l-2-2m2 2l2-2m5 6H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">Go to Contact</span>
                </motion.button>
              </div>
            </div>
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