import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you can implement the logic to send the data to an API or email service.
    // For now, we'll just display a fictitious success message.

    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setIsError(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setIsError(true);
    }
  };

  return (
    <section className="py-16 text-white bg-background" id="contact">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-white mb-8">Contact</h2>
        {isSubmitted && !isError && (
          <div className="bg-green-700 text-green-200 p-4 mb-4 rounded">
            Your message has been sent successfully! I will get in touch soon.
          </div>
        )}
        {isError && (
          <div className="bg-red-700 text-red-200 p-4 mb-4 rounded">
            Please fill in all required fields!
          </div>
        )}
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-lg"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                className="w-full p-4 border border-gray-700 bg-gray-800 text-white rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
