import { Github, Linkedin, Twitter } from "lucide-react"
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const communityMembers = [
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "XYZ",
    role: "XYZ",
    imageUrl: "https://placehold.co/400x400/1f2937/a1a1aa?text=XYZ",
    github: "#",
    linkedin: "#",
    twitter: "#",
  },
];

export default function TeamPage() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND (Z-0 BEHIND EVERYTHING) */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[#c8eec3]" />
        <div className="absolute top-0 right-0 h-[70%] w-[60%] bg-[#b9e6b1] rotate-2 origin-bottom-right" />
      </div>

      {/* FOREGROUND CONTENT (Z-10 ABOVE BACKGROUND) */}
      <div className="relative z-10">

        
        <Navigation />

        {/* Heading */}
        <h1 className="text-center text-7xl font-bold pt-40 py-20">
          <span className="text-black">Our </span>
          <span className="text-green-600">Team</span>
        </h1>

        {/* Cards */}
        <div className="container mx-auto px-4 pb-20">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {communityMembers.map((m, i) => (
              <div
                key={i}
                className="bg-white/60 backdrop-blur-lg border border-black/10 
                           rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl 
                           transition hover:scale-[1.02]"
              >
                <img
                  src={m.imageUrl}
                  className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-white"
                />

                <h3 className="text-xl font-bold">{m.name}</h3>
                <p className="text-green-700 mb-6">{m.role}</p>

                <div className="flex justify-center gap-4 text-black">
                  <Github />
                  <Linkedin />
                  <Twitter />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </section>
  );
}
