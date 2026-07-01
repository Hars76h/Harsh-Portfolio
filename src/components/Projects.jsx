function Projects() {

  const projects = [
  {
    title: "AI Mock Interview System",
    tech: "React.js • FastAPI • MongoDB",
    desc: "AI-powered platform that generates interview questions and provides personalized feedback.",
    github: "",
    live: "",
    status: "coming",
  },

  {
    title: "AI Chatbot",
    tech: "HTML • CSS • JavaScript",
    desc: "Responsive chatbot capable of answering user queries using REST APIs.",
    github: "https://github.com/Hars76h/ChatBot-AI",
    live: "",
    status: "completed",
  },

  {
    title: "Personal Portfolio",
    tech: "React • Tailwind CSS",
    desc: "Modern responsive portfolio website showcasing skills, projects and contact details.",
    github: "",
    live: "",
    status: "building",
  },
];
  return (
    <section id="projects" className="bg-slate-900 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          My <span className="text-blue-500">Projects</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Some of my recent work.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              <h3 className="text-2xl font-bold text-blue-500">
                {project.title}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.tech}
              </p>

              <p className="text-gray-300 mt-6">
                {project.desc}
              </p>

             <div className="mt-8 flex gap-3 flex-wrap">

  {project.status === "coming" && (
    <button
      className="bg-yellow-500 text-black px-5 py-3 rounded-xl cursor-not-allowed"
      disabled
    >
      🚧 Coming Soon
    </button>
  )}

  {project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition"
    >
      GitHub
    </a>
  )}

</div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;