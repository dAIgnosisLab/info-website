import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const result = await emailjs.send(
        "service_oi5di3a",
        "template_qf42gdl",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "daignosislab@gmail.com",
        },
        "odPZ_sAGLJDzjtuCi"
      );

      if (result.status === 200) {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message:
          "Failed to send message. Please try again or contact us directly.",
      });
      console.error("EmailJS Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const contactInfo = [
    {
      icon: <FaWhatsapp />,
      title: "WhatsApp",
      subtitle: "Chat with us instantly",
      value: "+977-9745956296",
      color: "green",
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      subtitle: "Call us anytime",
      value: "+977-9745956296",
      color: "green",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      subtitle: "Send us a message",
      value: "daignosislab@gmail.com",
      color: "green",
      isEmail: true,
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      subtitle: "Visit our office",
      value: "Kathmandu, Nepal",
      color: "green",
    },
  ];

  return (
    <section
      id='contact'
      className='w-full bg-white py-20 md:py-28 relative overflow-hidden'
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30'></div>
      </div>

      <div className='max-w-7xl mx-auto px-6 lg:px-8 relative z-10'>
        {/* Heading */}
        <div className='text-center mb-16 md:mb-20'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4'>
              Get in <span className='text-green-600'>Touch</span>
            </h2>
            <div className='w-20 h-1 bg-green-600 mx-auto mb-6'></div>
            <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Have questions? We'd love to hear from you. Send us a message and
              we'll respond as soon as possible.
            </p>
          </motion.div>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
          {/* LEFT SIDE - Contact Info */}
          <div className='space-y-6'>
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className='group bg-gray-50 rounded-2xl p-6 md:p-7 border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300'
              >
                <div className='flex items-center gap-4 mb-3'>
                  <div className='relative'>
                    <div className='w-14 h-14 bg-green-600 rounded-xl flex items-center justify-center text-white text-2xl shadow-sm group-hover:scale-110 transition-transform duration-300'>
                      {info.icon}
                    </div>
                    {/* Decorative dot */}
                    <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                  </div>
                  <div>
                    <h3 className='text-lg md:text-xl font-bold text-gray-900'>
                      {info.title}
                    </h3>
                    <p className='text-sm text-gray-600'>{info.subtitle}</p>
                  </div>
                </div>
                <p
                  className={`text-base md:text-lg font-semibold ${
                    info.isEmail ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {info.value}
                </p>
                {/* Bottom accent line */}
                <div className='mt-4 h-1 w-0 bg-gradient-to-r from-green-500 to-green-600 group-hover:w-full transition-all duration-500'></div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='bg-gray-50 rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm'
          >
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
              Send us a Message
            </h3>

            <form
              onSubmit={handleSubmit}
              className='space-y-6'
            >
              <div>
                <label
                  htmlFor='name'
                  className='block text-sm font-semibold text-gray-900 mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-sm font-semibold text-gray-900 mb-2'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-sm font-semibold text-gray-900 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='w-full px-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all resize-none'
                  placeholder='Your message here...'
                />
              </div>

              {submitStatus.type && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              <button
                type='submit'
                disabled={isSubmitting}
                className='w-full bg-green-600 text-white text-base md:text-lg font-semibold py-4 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed shadow-sm hover:shadow-md transition-all duration-300'
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
