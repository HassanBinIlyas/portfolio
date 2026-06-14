"use client";
import { useTheme } from "@/context/ThemeContext";
import BorderCard from "@/components/ui/BorderCard";

import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useState } from "react";

export default function Contact() {
    const { darkMode } = useTheme();

    const [sending, setSending] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setSending(true);

        emailjs.sendForm(
            "service_uonyn3s",
            "template_kwjr9yn",
            form.current,
            "p0PDxmqzXRm9wv-nd"
        ).then(
            (result) => {
                console.log("Message sent:", result.text);
                form.current.reset();
                alert("Message sent successfully!");
                setSending(false);
            },
            (error) => {
                console.log("Error:", error.text);
                alert("Failed to send message.");
                setSending(false);
            }
        );
    };


    return (
        <section
            id="contact"
            className={`max-w-7xl mx-auto px-6 py-20 transition-colors duration-300`}
        >
            <h2 className="text-4xl font-bold text-center mb-12">
                Let&apos;s Connect
            </h2>

            <div className="flex flex-col md:flex-row items-stretch justify-center gap-6">
                <div className="w-full md:w-3/4 lg:w-2/3">
                    <BorderCard darkMode={darkMode}>
                        <form
                            ref={form} onSubmit={sendEmail}
                            className="flex flex-col gap-5 w-full"
                        >
                            <input
                                required
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                className={`px-4 py-3 rounded-md focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />


                            <input
                                required
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                className={`px-4 py-3 rounded-md border focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />

                            <input
                                required
                                type="text"
                                name="title"
                                placeholder="Subject"
                                className={`px-4 py-3 rounded-md border focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />

                            <textarea
                                required
                                name="message"
                                rows="5"
                                placeholder="Your Message"
                                className={`px-4 py-3 rounded-md border focus:outline-none transition
                                    ${darkMode
                                        ? "bg-transparent border border-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-white/30"
                                        : "bg-transparent border border-black/20 text-black placeholder-gray-600 focus:ring-2 focus:ring-black/30"}`}
                            />

                            <input
                                type="hidden"
                                name="time"
                                value={new Date().toLocaleString("en-US", { dateStyle: "medium", timeStyle: "short" })}
                            />


                            <button
                                type="submit"
                                disabled={sending}
                                className={`py-3 rounded-md font-semibold transition
                                    ${darkMode
                                        ? "bg-white text-black hover:bg-gray-300"
                                        : "bg-black text-white hover:bg-gray-700"}`}
                            >
                                {sending ? "Sending..." : "Send Message"}
                            </button>

                        </form>
                    </BorderCard>
                </div>
            </div>
        </section>
    );
}
