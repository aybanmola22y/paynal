'use client';

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full px-8 py-24 bg-gray-50 text-gray-800 flex flex-col items-center"
    >
      <h3 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
        Contact Me
      </h3>
      <p className="text-center max-w-2xl mb-12 text-gray-600 text-lg">
        Have a project in mind, or just want to say hi? I&apos;d love to hear from you.
        Fill out the form and I&rsquo;ll get back to you as soon as possible.
      </p>

      <form
  action="https://formspree.io/f/mkgrepkg" // replace with your actual Formspree form ID
  method="POST"
  className="w-full max-w-xl bg-white rounded-xl shadow-md p-8 space-y-6"
>
  <div>
    <label htmlFor="name" className="block mb-1 font-medium text-gray-700">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="email" className="block mb-1 font-medium text-gray-700">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>

  <div>
    <label htmlFor="message" className="block mb-1 font-medium text-gray-700">
      Message
    </label>
    <textarea
      id="message"
      name="message"
      rows={5}
      required
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    ></textarea>
  </div>

  <button
    type="submit"
    className="w-full py-3 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 shadow-md hover:shadow-lg transition"
  >
    Send Message
  </button>
</form>
    </section>
  );
}
