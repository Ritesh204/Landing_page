import CountUp from "react-countup";

export const Counter = () => {
  const stats = [
    { end: 250, label: "Happy Clients" },
    { end: 120, label: "Projects Completed" },
    { end: 15, label: "Years Experience" },
    { end: 24, label: "Support Hours" },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((item, index) => (
          <div key={index}>
            <h3 className="text-4xl font-extrabold text-gray-900">
              <CountUp
                start={0}
                end={item.end}
                duration={2}
                suffix="+"
              />
            </h3>
            <p className="mt-2 text-gray-600 font-medium">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
