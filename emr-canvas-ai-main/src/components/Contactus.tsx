import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaStethoscope,
  FaHeartbeat,
  FaMicroscope,
  FaUserMd,
  FaHospital,
  FaNotesMedical,
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
        "odPZ_sAGLJDzjtuCi",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
      className='w-full bg-gradient-to-br from-white via-green-50/20 to-blue-50/10 py-20 md:py-28 relative overflow-hidden'
    >
      {/* Medical-themed floating icons */}
      <div className='absolute inset-0 pointer-events-none'>
        <div className='absolute top-20 left-10 w-96 h-96 bg-green-50 rounded-full blur-3xl opacity-40'></div>
        <div className='absolute bottom-20 right-10 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-30'></div>

        {/* Healthcare logo patterns */}
        <FaStethoscope className='absolute top-32 right-16 text-green-200 text-4xl animate-pulse opacity-40' />
        <FaHeartbeat className='absolute bottom-40 left-20 text-green-300 text-3xl animate-bounce opacity-30' />
        <FaMicroscope className='absolute top-1/2 left-1/3 text-green-200 text-5xl animate-pulse opacity-20' />
        <FaUserMd className='absolute top-1/4 right-1/4 text-green-150 text-3xl opacity-25 animate-bounce delay-500' />
        <FaHospital className='absolute bottom-1/3 right-1/5 text-green-100 text-4xl opacity-20 animate-pulse delay-700' />
        <FaNotesMedical className='absolute top-3/4 left-1/5 text-green-200 text-3xl opacity-25 animate-bounce delay-300' />
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
            <div className='inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6'>
              <div className='w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse'></div>
              <span className='text-sm font-semibold text-green-700'>Let's Connect</span>
            </div>
            <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-4'>
              <span className='bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent'>
                Get in
              </span>{" "}
              <span className='bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent'>
                Touch
              </span>
            </h2>
            <div className='w-20 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6'></div>
            <p className='text-base md:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              Ready to transform your healthcare practice with innovative
              technology? Let's discuss how our solutions can help you deliver
              better patient care.
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
                className='group relative'
              >
                <div className='bg-white rounded-3xl p-6 md:p-7 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden'>
                  {/* Gradient Background on Hover */}
                  <div className='absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
                  
                  {/* Top Accent Line */}
                  <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 to-blue-600'></div>

                  <div className='flex items-start gap-5 relative z-10'>
                    {/* Icon */}
                    <div className='relative flex-shrink-0'>
                      <div className='w-16 h-16 rounded-2xl bg-gradient-to-br from-green-600 to-blue-600 flex items-center justify-center text-white text-2xl shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500'>
                        {info.icon}
                      </div>
                      {/* Badge */}
                      <div className='absolute -top-2 -right-2 bg-white rounded-full px-2 py-1 shadow-md border border-gray-100'>
                        <span className='text-xs font-bold text-gray-700'>{String(i + 1).padStart(2, '0')}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className='flex-1 pt-1'>
                      <h3 className='text-xl font-bold text-gray-900 mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-green-600 group-hover:to-blue-600 transition-all duration-300'>
                        {info.title}
                      </h3>
                      <p className='text-sm text-gray-500 mb-3'>{info.subtitle}</p>
                      <p className={`text-base font-semibold ${
                        info.isEmail ? 'text-green-600' : 'text-gray-900'
                      }`}>
                        {info.value}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className='relative'
          >
            <div className='bg-white rounded-3xl p-8 md:p-10 border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 relative overflow-hidden'>
              {/* Top Accent Line */}
              <div className='absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-blue-600 to-purple-600'></div>
              
              {/* Gradient Background */}
              <div className='absolute inset-0 bg-gradient-to-br from-green-50/30 to-blue-50/20 opacity-50'></div>
              
              <h3 className='text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2 relative z-10'>
                Send us a Message
              </h3>
              <p className='text-sm text-gray-600 mb-8 relative z-10'>We'll respond within 24 hours</p>

              <form
                onSubmit={handleSubmit}
                className='space-y-5 relative z-10'
              >
                <div>
                  <label
                    htmlFor='name'
                    className='block text-sm font-bold text-gray-900 mb-2'
                  >
                    Your Name
                  </label>
                  <input
                    type='text'
                    id='name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-200 focus:border-green-600 focus:ring-4 focus:ring-green-600/10 outline-none transition-all text-gray-900 placeholder:text-gray-400'
                    placeholder='Dr. John Doe'
                  />
                </div>

                <div>
                  <label
                    htmlFor='email'
                    className='block text-sm font-bold text-gray-900 mb-2'
                  >
                    Email Address
                  </label>
                  <input
                    type='email'
                    id='email'
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-200 focus:border-green-600 focus:ring-4 focus:ring-green-600/10 outline-none transition-all text-gray-900 placeholder:text-gray-400'
                    placeholder='doctor@hospital.com'
                  />
                </div>

                <div>
                  <label
                    htmlFor='message'
                    className='block text-sm font-bold text-gray-900 mb-2'
                  >
                    Message
                  </label>
                  <textarea
                    id='message'
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className='w-full px-4 py-3.5 rounded-xl bg-white border-2 border-gray-200 focus:border-green-600 focus:ring-4 focus:ring-green-600/10 outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400'
                    placeholder='Tell us about your healthcare practice...'
                  />
                </div>

                {submitStatus.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl font-semibold ${
                      submitStatus.type === "success"
                        ? "bg-green-50 text-green-700 border-2 border-green-200"
                        : "bg-red-50 text-red-700 border-2 border-red-200"
                    }`}
                  >
                    {submitStatus.message}
                  </motion.div>
                )}

                <button
                  type='submit'
                  disabled={isSubmitting}
                  className='w-full bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white text-base md:text-lg font-bold py-4 rounded-xl hover:shadow-2xl hover:scale-[1.02] disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed shadow-lg transition-all duration-300'
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
