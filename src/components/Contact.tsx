"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormState>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-5xl mx-auto">
      <h2 className="text-xs font-mono tracking-widest uppercase text-zinc-400 mb-10">
        Contact
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-zinc-900 mb-4">
            Let&apos;s talk
          </h3>
          <p className="text-zinc-600 leading-relaxed mb-6">
            Whether you have a role in mind, a project to collaborate on, or just
            want to connect — my inbox is open.
          </p>
          <a
            href="/cv.pdf"
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-300 text-zinc-700 text-sm font-medium rounded-full hover:border-zinc-500 hover:text-zinc-900 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-zinc-600 mb-1.5" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors bg-white"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-600 mb-1.5" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors bg-white"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              className="block text-sm text-zinc-600 mb-1.5"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-zinc-200 rounded-xl text-sm text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 transition-colors resize-none bg-white"
              placeholder="What's on your mind?"
            />
          </div>

          {status === "success" && (
            <p className="text-sm text-green-600">
              Message sent! I&apos;ll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-500">
              Something went wrong. Please try again or email me directly.
            </p>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-zinc-900 text-white text-sm font-medium rounded-full hover:bg-zinc-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "loading" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}
