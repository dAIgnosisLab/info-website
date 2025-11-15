export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Record Audio",
      desc: "Doctors record patient conversations or upload handwritten notes.",
    },
    {
      step: "02",
      title: "AI Processes the Data",
      desc: "Our AI engine converts raw data into structured medical information.",
    },
    {
      step: "03",
      title: "Generate EMR Report",
      desc: "A clean, accurate EMR report is generated instantly.",
    },
  ];

  return (
    <section className="py-24 bg-gray-50" id="how-it-works">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-7xl font-bold text-center mb-4">
          How <span className="text-green-500">It Works</span>
        </h2>

        <p className="text-center text-gray-600 mb-16 max-w-xl mx-auto">
          A simple and fast workflow built for doctors and healthcare teams.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((s, index) => (
            <div 
              key={index}
              className="bg-white shadow-sm p-8 rounded-2xl border border-gray-200 hover:shadow-md transition"
            >
              <div className="text-6xl font-bold text-green-300 mb-4">{s.step}</div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
