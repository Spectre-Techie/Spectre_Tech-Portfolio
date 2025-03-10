import React, { useState } from 'react';
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from 'emailjs-com';

export const Contact = () => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        user_project: "",
    });

    

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
            .then((result) => {
                alert("Message Sent!");
                setFormData({ user_name: "", user_email: "", user_project: "" });
            })
            .catch(() => alert("Oops! Something went wrong. Please try again."));
    };

    return (
        <section id="contact" className="min-h-screen flex items-center justify-center px-4">
            <RevealOnScroll>
                <div className="px-4 w-150">
                    <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                        Get In Touch
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-4  ">
                        <div className="relative">
                            <input type="text" id="user_name" name="user_name" required value={formData.user_name} onChange={(e) => setFormData({ ...formData, user_name: e.target.value })} className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Name..." />
                        </div>
                        <div className="relative">
                            <input type="email" id="user_email" name="user_email" required value={formData.user_email} onChange={(e) => setFormData({ ...formData, user_email: e.target.value })} className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="example@gmail.com" />
                        </div>
                        <div className="relative">
                            <textarea rows={5} id="user_project" name="user_project" required value={formData.user_project} onChange={(e) => setFormData({ ...formData, user_project: e.target.value })} className="w-full bg-white/5 border border-white/5 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5" placeholder="Your Message..." />
                        </div>
                        <button type="submit" className="w-full bg-blue-500 text-white py-3  rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(50,130,246,0.4)]">
                            Send Message 📤
                        </button>
                    </form>
                </div>
            </RevealOnScroll>
        </section>
    );
};
