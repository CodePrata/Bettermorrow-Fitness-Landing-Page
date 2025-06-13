"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Instagram } from "lucide-react";

export default function Coaches() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    if (container) {
      container.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  const coaches = [
    {
      name: "Coach 1",
      image: "/coach-1.png",
      intro: "Specialist in muscle gain and sports rehab.",
      certifications: ["ACE Certified", "BSc Sports Science"],
      instagram: "https://instagram.com/coach_alex",
    },
    {
      name: "Coach 2",
      image: "/coach-2.png",
      intro: "Focuses on mobility and functional strength.",
      certifications: ["NASM CPT", "Kettlebell Instructor"],
      instagram: "https://instagram.com/coach_jamie",
    },
    {
      name: "Coach 3",
      image: "/coach-3.png",
      intro: "Expert in fat loss and sustainable habits.",
      certifications: ["CSCS", "Precision Nutrition Lv1"],
      instagram: "https://instagram.com/coach_sam",
    },
    {
      name: "Coach 4",
      image: "/coach-4.png",
      intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, magnam!",
      certifications: ["CSCS", "Precision Nutrition Lv1"],
      instagram: "https://instagram.com/coach_sam",
    },
    {
      name: "Coach 5",
      image: "/coach-5.png",
      intro: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, et.",
      certifications: ["CSCS", "Precision Nutrition Lv1"],
      instagram: "https://instagram.com/coach_sam",
    },
    // Add more coaches as needed
  ];

  return (
    <section id="coaches" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Meet Our Coaches</h2>
          <div className="space-x-2">
            <button onClick={() => scroll("left")} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <ArrowLeft />
            </button>
            <button onClick={() => scroll("right")} className="p-2 bg-gray-200 rounded-full hover:bg-gray-300">
              <ArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
        >
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="min-w-[280px] max-w-xs bg-gray-100 rounded-2xl shadow-md p-4 flex-shrink-0"
            >
              <img
                src={coach.image}
                alt={coach.name}
                className="w-full h-74 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold">{coach.name}</h3>
              <p className="text-sm text-gray-700 mb-2">{coach.intro}</p>
              <ul className="text-xs text-gray-600 list-disc list-inside mb-2">
                {coach.certifications.map((cert, i) => (
                  <li key={i}>{cert}</li>
                ))}
              </ul>
              <a
                href={coach.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-blue-600 hover:underline"
              >
                <Instagram className="h-4 w-4 mr-1" />
                Instagram
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
