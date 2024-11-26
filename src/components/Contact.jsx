import {motion} from 'framer-motion';

function Contact() {
  return (
    <div id="contact" className="h-screen justify-items-center">
        <h1 className="pt-28 text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Get In Touch</h1>
        <p className="text-white m-10">Want to Chat? Send me an email through this button and I'll respond Whenever I can. Thank you</p>
        <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="inline-flex"
        >
        <a href="mailto:tejaskakani.official@gmail.com" className="text-white justify-self-center m-5 bg-gradient-to-r from-blue-800 to-indigo-900 p-3 rounded-lg font-bold leading-8">
            Contact Me
        </a>
        </motion.div>
    </div>
  );
}

export default Contact;