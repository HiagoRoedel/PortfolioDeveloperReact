"use client";

import { useState } from "react";

export default function SendEmail() {
  const [formData, setFormData] = useState({ email: "", menssage: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_HIAGO}/contact/send-email`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          console.log('API ------------->', process.env.NEXT_PUBLIC_API_HIAGO)
          
      if (!response.ok) throw new Error("Erro ao enviar o contato!");

      setMessage("Mensagem enviada com sucesso!");
      setFormData({ email: "", menssage: "" });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setMessage("Falha ao enviar a mensagem.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden bg-black h-[100vh] flex items-center justify-center">
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center text-white px-4 sm:px-0">
          <h1 className="text-3xl font-bold mb-4 text-center">Entre em contato:</h1>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-lg space-y-4 bg-white p-6 rounded-lg shadow-lg"
          >
            <input
              type="email"
              name="email"
              placeholder="Seu email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg text-black"
            />
            <textarea
              name="menssage"
              placeholder="Sua mensagem"
              required
              value={formData.menssage}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg h-32 text-black"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
            >
              {isSubmitting ? "Enviando..." : "Enviar"}
            </button>
          </form>

          {message && <p className="mt-4 text-white">{message}</p>}
        </div>
      </div>

      {/* Bola na lateral direita */}
      <div className="absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500 rounded-full opacity-50 sm:w-[1000px] sm:h-[1000px] md:w-[1200px] md:h-[1200px] lg:w-[1700px] lg:h-[1200px]"></div>
    </div>
  );
}
