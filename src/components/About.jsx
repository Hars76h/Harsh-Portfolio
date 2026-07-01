function About() {
  return (
    <section id="about" className="bg-slate-900 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          About <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-3xl mx-auto">
          I am a passionate Computer Science Engineering graduate with
          a strong interest in Full Stack Development, Artificial Intelligence,
          and Data Analytics.
        </p>

        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {/* Left Card */}
          <div className="bg-slate-800 rounded-2xl p-8 shadow-xl">

            <h3 className="text-3xl font-bold text-blue-500 mb-6">
              Who am I?
            </h3>

            <p className="text-gray-300 leading-8">
              I enjoy building modern web applications using React.js,
              JavaScript, FastAPI and MongoDB. I love solving real-world
              problems and continuously learning new technologies.
            </p>

          </div>

          {/* Right Card */}
          <div className="grid grid-cols-2 gap-6">

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h4 className="text-blue-500 text-xl font-bold">
                🎓 Education
              </h4>

              <p className="text-gray-300 mt-4">
                B.Tech (CSE)
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h4 className="text-blue-500 text-xl font-bold">
                💻 Experience
              </h4>

              <p className="text-gray-300 mt-4">
                Fresher
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h4 className="text-blue-500 text-xl font-bold">
                🚀 Projects
              </h4>

              <p className="text-gray-300 mt-4">
                3+ Projects
              </p>
            </div>

            <div className="bg-slate-800 p-6 rounded-2xl">
              <h4 className="text-blue-500 text-xl font-bold">
                📍 Location
              </h4>

              <p className="text-gray-300 mt-4">
                India
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;