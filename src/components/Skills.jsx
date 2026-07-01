

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
} from "react-icons/fa6";

import {
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiPandas,
  SiNumpy,
} from "react-icons/si";


function Skills() {
  const skills = [
     { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
  { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400 text-5xl" /> },
  { name: "Python", icon: <FaPython className="text-yellow-500 text-5xl" /> },
  { name: "Java", icon: <FaJava className="text-red-500 text-5xl" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600 text-5xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-500 text-5xl" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400 text-5xl" /> },
  { name: "Pandas", icon: <SiPandas className="text-white text-5xl" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-300 text-5xl" /> },
  ];

  return (
    <section id="skills" className="bg-slate-950 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Technologies I use to build modern web applications.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {skills.map((skill, index) => (
  <div
    key={index}
   className="bg-slate-800 p-6 rounded-2xl text-center border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
  >
    <div className="flex justify-center mb-4">
      {skill.icon}
    </div>

    <h3 className="text-white font-semibold text-xl">
      {skill.name}
    </h3>
  </div>
))}

        </div>

      </div>
    </section>
  );
}

export default Skills;