"use client";

import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Tan",
      quote: "Bettermorrow helped me regain confidence. I lost 10kg sustainably and feel amazing.",
      transformation: "/t1.png",
    },
    {
      name: "Marcus Lee",
      quote: "The coaching is world-class. I’ve built muscle and learned to enjoy the gym.",
      transformation: "/t2.png",
    },
    {
      name: "Jia Min",
      quote: "Every session was tailored to me. I finally feel strong and consistent.",
      transformation: "/t3.png",
    },
    // Add more testimonials as needed
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition duration-300">
              <div className="flex items-center mb-4 gap-4">
                <h3 className="text-lg font-semibold">{t.name}</h3>
              </div>
              <p className="text-gray-700 text-sm mb-4">"{t.quote}"</p>
              {t.transformation && (
                <Image
                  src={t.transformation}
                  alt={`Transformation of ${t.name}`}
                  width={400}
                  height={200}
                  className="rounded-xl object-cover"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
