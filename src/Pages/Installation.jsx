// src/Pages/Installation.jsx
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import downloadicon from "../assets/icon-downloads.png";
import ratingicon from "../assets/icon-ratings.png";
import Loader from "./Loader";


const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [sortAsc, setSortAsc] = useState(true);
  const [loading, setLoading] = useState(true);

  // Load installed 
  useEffect(() => {
    const apps = JSON.parse(localStorage.getItem("installedApps")) || [];
    setInstalledApps(apps);
    setLoading(false);
  }, []);

  // Handle uninstall
  const handleUninstall = (id) => {
    const updatedApps = installedApps.filter((app) => app.id !== id);
    setInstalledApps(updatedApps);
    localStorage.setItem("installedApps", JSON.stringify(updatedApps));
    toast.info("App has been uninstalled! 🗑️", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Handle sort
  const handleSort = () => {
    const sortedApps = [...installedApps].sort((a, b) =>
      sortAsc ? a.size - b.size : b.size - a.size
    );
    setInstalledApps(sortedApps);
    setSortAsc(!sortAsc);
  };

  // Show loader if loading
  if (loading) return <Loader/>;

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* Header */}
      <div className="text-center mt-3 mb-10">
        <h1 className="text-3xl font-bold mb-2 text-[#001931]">
          Your Installed Apps
        </h1>
        <p className="text-[20px] text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sort & Count */}
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600 font-bold">
          {installedApps.length} Apps Found
        </p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={handleSort}
        >
          Sort By Size {sortAsc ? "▲" : "▼"}
        </button>
      </div>

      {/* Apps  */}
      <div className="space-y-4">
        {installedApps.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            No apps installed yet.
          </p>
        ) : (
          installedApps.map((app) => (
            <div
              key={app.id}
              className="flex items-center justify-between p-4 bg-gray-50 rounded shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="font-bold text-lg">{app.title}</h2>
                  <div className="text-gray-600 flex gap-4 text-sm mt-1">
                    <div className="flex items-center gap-1">
                      <img className="w-3 h-3" src={downloadicon} alt="Downloads" />
                      <p>{app.downloads}</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <img className="w-3 h-3" src={ratingicon} alt="Rating" />
                      <p>{app.ratingAvg}</p>
                    </div>
                    <div>{app.size} MB</div>
                  </div>
                </div>
              </div>
              <button
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition"
                onClick={() => handleUninstall(app.id)}
              >
                Uninstall
              </button>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default Installation;
