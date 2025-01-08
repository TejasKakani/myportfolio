function About() {
    return (
      <div id="about" className="h-screen flex flex-col justify-center items-center">
          <h1 className=" justify-self-center text-4xl font-bold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent">About</h1>
            <p className="text-white justify-self-center p-10 leading-8">
            I am a passionate developer with a strong interest in cybersecurity and low-level development. I enjoy solving complex problems, whether it’s building a robust packet sniffer, exploring advanced techniques in red teaming, or designing algorithms to generate wordlists for penetration testing. My experience spans across several technologies, including Node.js, C++, and MongoDB, with a focus on building efficient, console-based applications and integrating various systems for optimal performance.
            Currently, I am working on a project that combines my love for wordlists and cybersecurity, developing a tool to generate custom wordlists based on clues.
            </p>
      </div>
    );
  }

  export default About;