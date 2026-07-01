function Certification() {
  const certificates = [
    
 {
  title: "ServiceNow Certified Implementation Specialist",
  company: "ServiceNow",
  year: "2026",
  file: "/certificates/servicenow.png",
},
    {
  title: "SAP Certified - Database Administrator",
  company: "SAP",
  year: "2026",
  file: "/certificates/SAP.png",
},
   {
  title: "Prompt Engineering",
  company: "Infosys Springboard",
  year: "2025",
  file: "/certificates/prompt-engineering.png",

},
   {
  title: "Python Internship",
  company: "Ramraj Tech",
  year: "2023",
  file: "/certificates/python-internship.png",
},
   {
  title: "Microsoft Azure Internship",
  company: "Ramraj Tech",
  year: "2024",
  file: "/certificates/azure-internship.png",
},
    {
  title: "Programming using Java",
  company: "Infosys Springboard",
  year: "2025",
  file: "/certificates/java-programming.png",
},
  ];

  return (
    <section id="certifications" className="bg-slate-950 py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-white">
          My <span className="text-blue-500">Certifications</span>
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Professional certifications and internship achievements.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {certificates.map((cert, index) => (

            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300"
            >

              <h3 className="text-xl font-bold text-blue-500">
                🏆 {cert.title}
              </h3>

              <p className="text-gray-300 mt-4">
                {cert.company}
              </p>

              <p className="text-gray-400 mt-2">
                {cert.year}
              </p>

             <a
  href={cert.file}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-6 inline-block bg-blue-600 px-5 py-3 rounded-xl hover:bg-blue-700 transition"
>
  📄 View Certificate
</a>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certification;