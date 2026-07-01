

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">

        <h1 className="text-5xl font-bold mb-4">
          Hi, I'm Harsh Dubey
        </h1>

        <TypeAnimation
          sequence={[
            "Full Stack Developer",
            2000,
            "AI Enthusiast",
            2000,
            "Data Analyst",
            2000,
          ]}
          wrapper="h2"
          speed={50}
          repeat={Infinity}
          className="text-2xl md:text-3xl text-gray-300 mt-4 font-semibold"
        />

        <p className="max-w-xl text-gray-300 mt-6 mb-8">
          I build responsive and modern web applications using React,
          Tailwind CSS and backend technologies.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="bg-blue-500 px-6 py-3 rounded-xl">
            Hire Me
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Projects
          </button>
        </div>

      </div>
    </section>
  );
}

export default Hero;