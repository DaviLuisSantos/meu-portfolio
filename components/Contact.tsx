// components/Contact.tsx

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

    // Aqui você pode implementar a lógica para enviar os dados para uma API ou serviço de e-mail.
    // Por enquanto, vamos apenas exibir um sucesso fictício.

    if (formData.name && formData.email && formData.message) {
      setIsSubmitted(true);
      setIsError(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      setIsError(true);
    }
  };

  return (
    <section className="py-16 bg-white" id="contato">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-8">Contato</h2>
        {isSubmitted && !isError && (
          <div className="bg-green-200 text-green-800 p-4 mb-4 rounded">
            Sua mensagem foi enviada com sucesso! Eu entrarei em contato em
            breve.
          </div>
        )}
        {isError && (
          <div className="bg-red-200 text-red-800 p-4 mb-4 rounded">
            Preencha todos os campos obrigatórios!
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
                placeholder="Seu nome"
                className="w-full p-4 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Seu e-mail"
                className="w-full p-4 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Assunto"
                className="w-full p-4 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Sua mensagem"
                className="w-full p-4 border border-gray-300 rounded-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
              >
                Enviar Mensagem
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
