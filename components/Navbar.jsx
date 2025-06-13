"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-white bg-opacity-80 backdrop-blur-md shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Bettermorrow Logo" width={40} height={40} />
          <span className="text-xl font-bold">Bettermorrow Fitness</span>
        </div>

        {/* Nav links */}
        <div className="space-x-6 hidden md:flex">
          <Link href="#services" className="hover:text-blue-600 transition">
            Services
          </Link>
          <Link href="#coaches" className="hover:text-blue-600 transition">
            Coaches
          </Link>
          <Link href="#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </Link>
          <Link href="#contact" className="hover:text-blue-600 transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
