import React from "react";

const stats = [
  {
    title: "Total Downloads",
    value: "29.6M",
    growth: "21% more than last month",
  },
  {
    title: "Total Reviews",
    value: "906K",
    growth: "46% more than last month",
  },
  {
    title: "Active Apps",
    value: "132+",
    growth: "31 more will Launch",
  },
];

const Trusted = () => {
  return (
    <section
      className="py-20"
      style={{
        background: "linear-gradient(125.07deg, rgba(99, 46, 227, 1), rgba(159, 98, 242, 1) 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Trusted by Millions, Built for You
        </h2>
        <p className="text-white/80 mb-12">
          Our apps are loved by users worldwide. Check out our statistics!
        </p>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center bg-transparent"
            >
              <h3 className="text-4xl font-bold text-white">{stat.value}</h3>
              <p className="text-white text-lg font-semibold mt-2">{stat.title}</p>
              <p className="text-white/80 text-sm mt-1">{stat.growth}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
