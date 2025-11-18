import {
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function ContactSection() {
  return (
    <section
      id='contact'
      className='w-full bg-gray-50 py-20 md:py-24'
    >
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Heading */}
        <div className='text-center mb-12 md:mb-16'>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6'>
            Get in <span className='text-green-600'>Touch</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed'>
            Have questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </div>

        {/* Content Grid */}
        <div className='grid md:grid-cols-2 gap-12 md:gap-16'>
          {/* LEFT SIDE - Contact Info */}
          <div className='space-y-8'>
            {/* WhatsApp */}
            <div className='bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center'>
                  <FaWhatsapp className='text-green-600 text-3xl' />
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                    WhatsApp
                  </h3>
                  <p className='text-base text-gray-600'>
                    Chat with us instantly
                  </p>
                </div>
              </div>
              <p className='text-lg font-semibold text-gray-900'>
                +977-9703895325
              </p>
            </div>

            {/* Phone */}
            <div className='bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center'>
                  <FaPhone className='text-green-600 text-3xl' />
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                    Phone
                  </h3>
                  <p className='text-base text-gray-600'>Call us anytime</p>
                </div>
              </div>
              <p className='text-lg font-semibold text-gray-900'>
                +977-9703895325
              </p>
            </div>

            {/* Email */}
            <div className='bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center'>
                  <FaEnvelope className='text-green-600 text-3xl' />
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                    Email
                  </h3>
                  <p className='text-base text-gray-600'>Send us a message</p>
                </div>
              </div>
              <p className='text-lg font-semibold text-green-600'>
                daignosislab@gmail.com
              </p>
            </div>

            {/* Location */}
            <div className='bg-white rounded-2xl p-6 md:p-8 shadow-md border border-gray-100'>
              <div className='flex items-center gap-4 mb-4'>
                <div className='w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center'>
                  <FaMapMarkerAlt className='text-green-600 text-3xl' />
                </div>
                <div>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-900'>
                    Location
                  </h3>
                  <p className='text-base text-gray-600'>Visit our office</p>
                </div>
              </div>
              <p className='text-lg font-semibold text-gray-900'>
                Kathmandu, Nepal
              </p>
            </div>
          </div>

          {/* RIGHT SIDE - Contact Form */}
          <div className='bg-white rounded-2xl p-8 md:p-10 shadow-md border border-gray-100'>
            <h3 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
              Send us a Message
            </h3>

            <form className='space-y-6'>
              <div>
                <label
                  htmlFor='name'
                  className='block text-base font-semibold text-gray-900 mb-2'
                >
                  Your Name
                </label>
                <input
                  type='text'
                  id='name'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all'
                  placeholder='John Doe'
                />
              </div>

              <div>
                <label
                  htmlFor='email'
                  className='block text-base font-semibold text-gray-900 mb-2'
                >
                  Email Address
                </label>
                <input
                  type='email'
                  id='email'
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all'
                  placeholder='john@example.com'
                />
              </div>

              <div>
                <label
                  htmlFor='message'
                  className='block text-base font-semibold text-gray-900 mb-2'
                >
                  Message
                </label>
                <textarea
                  id='message'
                  rows={5}
                  className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 outline-none transition-all resize-none'
                  placeholder='Your message here...'
                />
              </div>

              <button
                type='submit'
                className='w-full bg-green-600 text-white text-lg font-semibold py-4 rounded-lg hover:bg-green-700 transition-colors duration-300'
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
