"use client";
import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState("");

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim()) newErrors.message = "Message is required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("");

    if (!validate()) return;

    setStatus("Sending...");

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
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

  const inputClasses = (field: string) =>
    `p-3 rounded-lg placeholder:text-[#454545] bg-[#0a0a0a] text-primary border ${
      errors[field] ? "border-red-500" : "border-[#232323]"
    } focus:outline-none focus:ring-2 focus:ring-[#232323]`;

  return (
    <motion.div className="border border-[#232323] p-6 sm:p-8 md:p-10 rounded-3xl mx-auto">
      <div className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Let&apos;s have a Chat!
      </div>
      <div className="mb-6 text-center text-sm sm:text-base">
        <p>
          Feel free to share your details below, and I&apos;ll get back to you as
          soon as possible.
        </p>
        <p className="mt-2">
          Alternatively, you can reach me directly via email:
        </p>
        <p className="font-semibold text-teal-400">ashwani.7170@gmail.com</p>
      </div>

      <motion.form onSubmit={handleSubmit} className="flex flex-col gap-6">
        {/* Name */}
        <div className="flex flex-col gap-1">
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
            className={inputClasses("name")}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.name && (
            <span className="text-red-500 text-xs">{errors.name}</span>
          )}
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1">
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
            className={inputClasses("email")}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email}</span>
          )}
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm text-secondary">
            How can I help you?
          </label>
          <motion.textarea
            name="message"
            id="message"
            placeholder="Hey Ashwani, Could you help me with..."
            value={form.message}
            onChange={handleChange}
            className={`${inputClasses("message")} resize-none h-32`}
            whileFocus={{ scale: 1.02 }}
          />
          {errors.message && (
            <span className="text-red-500 text-xs">{errors.message}</span>
          )}
        </div>

        {/* Button */}
        <motion.button
          type="submit"
          className="py-3 rounded-lg transition-all duration-300 bg-[#1f1f1f] hover:bg-[#3a3a3a] text-white"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>

        {/* Status Message */}
        {status && <p className="text-center text-teal-400 mt-2">{status}</p>}
      </motion.form>
    </motion.div>
  );
};

export default Contact;
