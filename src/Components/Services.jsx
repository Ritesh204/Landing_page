import {
  Code2,
  Smartphone,
  Megaphone,
  ArrowUpRight,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      title: "Web Development",
      desc: "Modern, fast and responsive websites built with latest technologies for business growth.",
      icon: <Code2 size={36} />,
      bg: "bg-blue-50",
      iconBg: "bg-blue-600",
    },
    {
      title: "App Development",
      desc: "Scalable Android & iOS applications with smooth UI and powerful performance.",
      icon: <Smartphone size={36} />,
      bg: "bg-purple-50",
      iconBg: "bg-purple-600",
    },
    {
      title: "Digital Marketing",
      desc: "SEO, social media & ads that increase brand visibility and customer engagement.",
      icon: <Megaphone size={36} />,
      bg: "bg-green-50",
      iconBg: "bg-green-600",
    },
  ];

  return (
    <section
      id="services"
      className="py-5 bg-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-gray-900">
            What We <span className="text-blue-600">Provide</span>
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver complete digital solutions to help your business grow
            faster and smarter in today’s competitive world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative rounded-2xl p-8 ${service.bg}
              transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}
            >
            
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-white ${service.iconBg}`}
              >
                {service.icon}
              </div>

              {/* CONTENT */}
              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-3 text-gray-600 leading-relaxed">
                {service.desc}
              </p>

             
              <button
                className="mt-6 inline-flex items-center gap-2 font-semibold text-gray-900
                group-hover:text-blue-600 transition"
              >
                Learn More
                <ArrowUpRight className="w-5 h-5" />
              </button>

            
              <span
                className="absolute inset-0 rounded-2xl border-2 border-transparent
                group-hover:border-blue-600 transition"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
