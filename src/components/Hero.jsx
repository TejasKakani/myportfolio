import { motion } from "framer-motion";

function Hero() {

  return (
    <div id="hero" className="flex justify-evenly py-40 h-screen w-full min-h-screen ">
        <div className="p-20">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Tejas Kakani</h1>
            <h2 className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Software Developer</h2>
        </div>
        <div className="hidden md:block">
            <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
            dragSnapToOrigin={true}
            >
            <img src="tejas.jpg" className="rounded-full" alt="Tejas Kakani" />
            </motion.div>
        </div>
    </div>
  );
}

export default Hero;