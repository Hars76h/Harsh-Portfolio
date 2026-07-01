function Contact() {
  return (
    <section id="contact" className="bg-slate-950 py-24">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          Contact <span className="text-blue-500">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-12">
          Feel free to connect with me for jobs, internships or collaborations.
        </p>

        <div className="bg-slate-800 rounded-2xl p-10">

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Your Name"
              className="bg-slate-900 p-4 rounded-xl outline-none text-white"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="bg-slate-900 p-4 rounded-xl outline-none text-white"
            />

          </div>

          <textarea
            rows="6"
            placeholder="Your Message"
            className="bg-slate-900 p-4 rounded-xl outline-none text-white w-full mt-6"
          ></textarea>

          <button className="mt-8 bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700 transition">
            Send Message
          </button>

        </div>

      </div>
    </section>
  );
}

export default Contact;