import React, { useEffect, useState } from "react";
import downlodaimg from "../assets/icon-downloads.png";
import ratingimg from "../assets/icon-ratings.png";
import Loader from "./Loader";

const Demo = ({ datapromise }) => {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    datapromise
      .then((data) => {
        setApps(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [datapromise]);

  const truncateTitle = (title) => {
    const parts = title.split(":");
    return parts.length > 1 ? parts[1].trim() : title;
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center my-10 space-y-2">
        <h1 className="text-3xl font-bold text-[#001931]">Trending Apps</h1>
        <p className="font-medium text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {apps.map((app) => (
          <div
            key={app.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={app.image}
              alt={app.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg text-gray-900">
                <span className="font-bold">{truncateTitle(app.title)}:</span>
                {app.detail}
              </h3>
              <div className="flex justify-center items-center mt-3 gap-4">
                <div className="flex items-center gap-1">
                  <img src={downlodaimg} alt="Downloads" className="w-5 h-5" />
                  <span className="text-gray-600 font-medium">{app.downloads}</span>
                </div>
                <div className="flex items-center gap-1">
                  <img src={ratingimg} alt="Rating" className="w-5 h-5" />
                  <span className="text-yellow-500 font-semibold">{app.ratingAvg}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Demo;
