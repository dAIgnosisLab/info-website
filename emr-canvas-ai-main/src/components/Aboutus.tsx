import { motion } from "framer-motion";

const aboutItems = [
  {
    title: "Beyond Automation",
    description:
      "We don't just automate documentation; we create AI-powered ecosystems where accuracy, speed, and reliability coexist.",
  },
  {
    title: "Reliable by Design",
    description:
      "Our architecture adapts to noise, accent variations, and real clinical scenarios—ensuring consistent quality.",
  },
  {
    title: "AI at the Core",
    description:
      "Intelligence is embedded in everything we build—from EMR generation to decision-support workflows.",
  },
  {
    title: "Healthcare Focused",
    description:
      "Built with clinicians, designed for real medical settings, ensuring compliance and accuracy.",
  },
  {
    title: "People Who Lead Change",
    description:
      "A team of innovators, ML engineers, and researchers shaping the future of healthcare documentation.",
  },
  {
    title: "Proven Accuracy",
    description:
      "Our AI systems deliver high accuracy even in noisy, real-world patient-doctor conversations.",
  },
];

export default function AboutUsSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Why <span className="text-primary">dAIgnosisLab</span>?
        </h2>

        <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-16">
          We don't just automate documentation—we build healthcare ecosystems
          where innovation and precision coexist.
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 text-left shadow-sm border border-border hover:shadow-lg hover:border-primary/50 transition-all"
            >
              <h3 className="text-xl font-semibold text-card-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
