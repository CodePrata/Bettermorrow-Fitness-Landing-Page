"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden" id="hero">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex items-center justify-start max-w-6xl mx-auto px-6">
        <div className="text-white max-w-xl space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold">
            Unlock Your Potential with Bettermorrow Fitness
          </h1>
          <p className="text-lg md:text-xl">
            Join our team of expert coaches to achieve your fitness goals — in-person or online.
          </p>
          <Link
            href="#contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg font-semibold transition"
          >
            Book a Session
          </Link>
        </div>
      </div>
    </section>
  );
}
