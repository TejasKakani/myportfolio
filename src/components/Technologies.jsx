import {BiLogoTypescript} from 'react-icons/bi';
import {BiLogoJava} from 'react-icons/bi';
import { BiLogoNodejs } from 'react-icons/bi';
import { BiLogoCPlusPlus } from 'react-icons/bi';
import { BiLogoReact } from 'react-icons/bi';
import { BiLogoMongodb } from 'react-icons/bi';
import { BiLogoJavascript } from 'react-icons/bi';
import { motion } from 'framer-motion';

function Effect({children}){
    return(
        children.map((child, index) => (
            <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            whileDrag={{ scale: 0.9, rotate: 10 }}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.7}
            >
                {child}
            </motion.div>
        ))
    );
}

function Technologies() {
  return (
    <div id="technologies" className="h-screen flex flex-col justify-center items-center">
      <h1 className=" justify-self-center text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Technologies</h1>
        <div className="flex p-40 gap-4 overflow-x-auto w-screen justify-around ">
        <Effect>
            <BiLogoCPlusPlus className="text-9xl text-blue-500" />
            <BiLogoJavascript className="text-9xl text-yellow-500" />
            <BiLogoTypescript className="text-9xl text-blue-500" />
            <BiLogoJava className="text-9xl text-red-500" />
            <BiLogoNodejs className="text-9xl text-green-500" />
            <BiLogoReact className="text-9xl text-blue-500" />
            <BiLogoMongodb className="text-9xl text-green-500" />
        </Effect>
        </div>
    </div>
  );
}

export default Technologies;