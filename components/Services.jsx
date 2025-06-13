export default function Services() {
  const services = [
    {
      title: "In-Person Coaching",
      price: "From $60/session",
      description:
        "One-on-one coaching at our partnered gym. Includes physical assessment, customized workout plans, and real-time guidance.",
    },
    {
      title: "Online Coaching",
      price: "$150/month",
      description:
        "Weekly check-ins via video call, personalized training and nutrition plans, and access to our members-only chat.",
    },
    {
      title: "XXX Coaching",
      price: "$200/month",
      description:
        "Best of both worlds – combine in-person sessions with digital support. Ideal for flexibility and accountability.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-blue-600 font-medium mb-4">{service.price}</p>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
