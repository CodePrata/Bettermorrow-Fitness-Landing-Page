"use client";

import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Get in Touch</h2>
        <p className="text-gray-600 mb-8">Have questions or ready to start your fitness journey? Reach out to us!</p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-8">
          <a href="https://wa.me/6591234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-green-600 hover:underline">
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
          <a href="tel:+6591234567" className="flex items-center gap-2 text-blue-600 hover:underline">
            <Phone className="w-5 h-5" />
            Call
          </a>
          <a href="mailto:hello@bettermorrowfitness.com" className="flex items-center gap-2 text-red-600 hover:underline">
            <Mail className="w-5 h-5" />
            Email
          </a>
        </div>

        <div className="flex justify-center gap-6 mb-10">
          <a href="https://instagram.com/bettermorrowfitness" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:scale-110 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://facebook.com/bettermorrowfitness" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:scale-110 transition">
            <Facebook className="w-6 h-6" />
          </a>
        </div>

        <a
          href="https://wa.me/6591234567"
          className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
