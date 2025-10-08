import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import downlodaimg from "../assets/icon-downloads.png";
import ratingimg from "../assets/icon-ratings.png";

const AppsCard = () => {
  const [apps, setApps] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredApps, setFilteredApps] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/aa.json")
      .then((res) => res.json())
      .then((data) => {
        setApps(data);
        setFilteredApps(data);
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const filtered = apps.filter((app) =>
      app.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredApps(filtered);
  }, [search, apps]);

  if (!apps.length)
    return <p className="text-center py-10 text-lg">Loading Apps...</p>;

  // Helper to format title (after “:”)
  const truncateTitle = (title) => {
    const parts = title.split(":");
    return parts.length > 1 ? parts[1].trim() : title;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Our All Applications</h2>
        <p className="text-gray-600 mt-2 text-lg">
          Explore all the apps we’ve developed for the world.
        </p>
      </div>

      {/* Search Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3">
        <p className="text-gray-600 text-sm">
          ({filteredApps.length}) Apps Found
        </p>
        <input
          type="search"
          placeholder="Search Apps..."
          className="border border-gray-300 px-4 py-2 rounded-lg w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* App Cards */}
      {filteredApps.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredApps.map((app) => (
            <div
              key={app.id}
              onClick={() => navigate(`/apps/${app.id}`)}
              className=" rounded-xl shadow-md overflow-hidden hover:shadow-xl hover:scale-[1.03] transition-all duration-300 cursor-pointer md:p-2 p-3 bg-gray-100 "
            >
              {/* Image */}
              <img
                src={app.image}
                alt={app.title}
                className="w-full h-48 object-cover rounded-2xl"
              />

              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="text-lg font- text-gray-900">
                  <span className="font-bold">{truncateTitle(app.title)}: </span>{app.detail}
                </h3>

                <div className="flex justify-center items-center mt-3 md:gap-20 gap-30">
                  <div className="flex items-center gap-1">
                    <img
                      src={downlodaimg}
                      alt="Downloads"
                      className="w-5 h-5"
                    />
                    <span className="text-gray-600 font-medium text-sm">
                      {app.downloads}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <img src={ratingimg} alt="Rating" className="w-5 h-5" />
                    <span className="text-[#FF8811] font-semibold text-sm">
                      {app.ratingAvg}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center py-10 text-gray-500 text-lg">
          No apps found 😕
        </p>
      )}
    </div>
  );
};

export default AppsCard;
