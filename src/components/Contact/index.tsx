"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!form.name || !form.email || !form.message) {
      setStatus("Please fill out all fields.");
      return;
    }

    setStatus("Sending...");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      setStatus("An error occurred. Please try again later.");
    }
  };

  const isFormValid = form.name && form.email && form.message;

  return (
    <motion.div className="border border-[#232323] p-6 sm:p-8 md:p-10 rounded-3xl mx-auto">
      <div className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Let&apos;s have a Chat!
      </div>
      <div className="mb-6 text-center text-sm sm:text-base">
        Enter your details below, and I&apos;ll get back to you as soon as
        possible.
      </div>
      <motion.form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm text-secondary">
            Please enter your name
          </label>
          <motion.input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded-lg placeholder:text-[#454545] bg-[#0a0a0a] text-primary border border-[#232323] focus:outline-none focus:ring-2 focus:ring-[#232323]"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-sm text-secondary">
            Please enter your email
          </label>
          <motion.input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded-lg placeholder:text-[#454545] bg-[#0a0a0a] text-primary border border-[#232323] focus:outline-none focus:ring-2 focus:ring-[#232323]"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="message" className="text-sm text-secondary">
            How can I help you?
          </label>
          <motion.textarea
            name="message"
            id="message"
            placeholder="Hey Ashwani, Could you help me with..."
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded-lg placeholder:text-[#454545] bg-[#0a0a0a] text-primary border border-[#232323] focus:outline-none focus:ring-2 focus:ring-[#232323] resize-none h-32"
            whileFocus={{ scale: 1.02 }}
          />
        </div>

        <motion.button
          type="submit"
          className={`py-3 rounded-lg transition-all duration-300 ${
            isFormValid
              ? "bg-[#1f1f1f] hover:bg-[#3a3a3a]"
              : "bg-[#333333] cursor-not-allowed"
          } text-white`}
          whileHover={isFormValid ? { scale: 1.02 } : {}}
          whileTap={isFormValid ? { scale: 0.95 } : {}}
          disabled={!isFormValid}
        >
          Send Message
        </motion.button>

        {status && <p className="text-center text-teal-400 mt-2">{status}</p>}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
