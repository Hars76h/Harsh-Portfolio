import Certification from "./components/Certification.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";


import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      {/* Hero Section */}
      <section
      id="home" 
      className="max-w-7xl mx-auto px-6 pt-32 pb-20 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
       {/* <About />  */}
        {/* Left Side */}
        <div className="md:w-1/2">
          <p className="text-blue-400 text-lg">👋 Hello, I'm</p>

          <h1 className="text-5xl md:text-7xl font-bold mt-3">
            Harsh Dubey
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mt-4">
            Full Stack Developer <br />
            AI & Data Analytics Enthusiast
          </h2>

          <p className="text-gray-400 mt-6 max-w-lg">
            Passionate about building modern web applications,
            AI-powered solutions, and solving real-world
            problems through technology.
          </p>

 <div className="mt-8 flex flex-wrap gap-4">

  <a
    href="/resume.pdf"
    download
    className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700 transition flex items-center gap-2"
  >
    <HiDownload size={20} />
    Resume
  </a>

  <a
    href="https://github.com/Hars76h"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-white px-6 py-3 rounded-xl hover:bg-white hover:text-black transition flex items-center gap-2"
  >
    <FaGithub size={20} />
    GitHub
  </a>

  <a
    href="https://www.linkedin.com/in/harsh-kr-dubey-3576a226a"
    target="_blank"
    rel="noopener noreferrer"
    className="border border-blue-500 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition flex items-center gap-2"
  >
    <FaLinkedin size={20} />
    LinkedIn
  </a>
  <a
  href="#projects"
  className="border border-blue-500 text-blue-500 px-6 py-3 rounded-xl hover:bg-blue-500 hover:text-white transition flex items-center gap-2"
>
  📂 View Projects
</a>

</div>
        </div>

        {/* Right Side */}
       <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
  <div className="w-[360px] h-[450px] rounded-3xl overflow-hidden border-4 border-blue-500 shadow-2xl">
    <img
      src="/harsh.jpg"
      alt="Harsh"
      className="w-full h-full object-cover object-top"
    />
  </div>
</div>
      </section>
      
      <About />
      <Skills />
      <Certification />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;