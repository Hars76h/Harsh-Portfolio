function Footer() {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-2xl font-bold text-blue-500">
          Harsh Dubey
        </h2>

        <p className="text-gray-400 mt-3">
          Full Stack Developer | AI & Data Analytics Enthusiast
        </p>

        <div className="flex justify-center gap-6 mt-6">

          <a
            href="https://github.com/Hars76h"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/harsh-kr-dubey-3576a226a"
            target="_blank"
            rel="noreferrer"
            className="text-gray-300 hover:text-blue-500"
          >
            LinkedIn
          </a>

          <a
            href="mailto:harshkrdubey569@gmail.com"
            className="text-gray-300 hover:text-blue-500"
          >
            Email
          </a>

        </div>

        <p className="text-gray-500 mt-8 text-sm">
          © 2026 Harsh Dubey. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;