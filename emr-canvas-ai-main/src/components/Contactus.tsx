import { FaWhatsapp } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-gray-50 py-20 border-t border-gray-200"
    >
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="flex flex-col items-start gap-8">
          
          {/* CENTERED CONTACT US TITLE */}
          <h2 className="text-6xl md:text-7xl font-bold text-center md:text-left w-full">
            <span className="text-black">Contact </span>
            <span className="text-[#27B15A]">Us</span>
          </h2>

          {/* WhatsApp Row */}
          <div className="flex items-center gap-4 mt-2">
            <FaWhatsapp className="text-[#27B15A] w-14 h-14" />
            <p className="text-xl font-semibold text-gray-700">
              WhatsApp Support Available
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-center gap-6 max-w-md">
          <h3 className="text-4xl md:text-5xl font-semibold text-gray-800">
            Contact Details
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed">
            For business, advertising, or partnership inquiries, feel free to reach out.
            Our team will get in touch as soon as possible.
          </p>

          <div className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center gap-2">
            📞 +977-98XXXXXXXX
          </div>

          <p className="text-gray-700 text-lg">
            Email:{" "}
            <span className="text-[#27B15A] font-medium">yourmail@gmail.com</span>
          </p>
        </div>

      </div>
    </section>
  );
}
