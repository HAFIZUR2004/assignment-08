import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import downloadicon from "../assets/icon-downloads.png";
import ratingicon from "../assets/icon-ratings.png";
import reviewicon from "../assets/icon-review.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppDetailPage = () => {
  const { id } = useParams();
  const [app, setApp] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  // Fetch App Data
  useEffect(() => {
    fetch("/aa.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        setApp(foundApp);
      })
      .catch((err) => console.error(err));
  }, [id]);

  // Check localStorage if app is already installed
  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    if (installedApps.some((a) => a.id === parseInt(id))) {
      setIsInstalled(true);
    }
  }, [id]);

  if (!app) return <p className="text-center py-10 text-lg">Loading...</p>;

  // Updated handleInstall
  const handleInstall = () => {
    toast.success(`${app.title} has been installed! ✅`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });

    setIsInstalled(true);

    // Save the whole app object to localStorage
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];

    // Check if app already exists (by ID)
    if (!installedApps.some(a => a.id === app.id)) {
      installedApps.push(app);
      localStorage.setItem("installedApps", JSON.stringify(installedApps));
    }
  };

  // Dummy rating data
  const ratingData = [
    { star: 5, count: 12000 },
    { star: 4, count: 9000 },
    { star: 3, count: 6000 },
    { star: 2, count: 3000 },
    { star: 1, count: 0 },
  ];
  const maxRating = Math.max(...ratingData.map((r) => r.count));

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="w-full md:w-1/2">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{app.title}:</h2>
            <h2 className="text-2xl font-bold text-gray-800">{app.detail}</h2>
          </div>

          <p className="text-gray-500 text-sm md:text-base">
            Developed by: <span className="text-red-600 font-medium ml-1">{app.companyName}</span>
          </p>

          <hr className="border-gray-200 my-4" />

          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
            <div className="flex flex-col items-center space-y-1">
              <img src={downloadicon} alt="downloads" className="w-6 h-6" />
              <span>Downloads</span>
              <h2 className="text-3xl md:text-4xl text-[#001931] font-extrabold">{app.downloads}</h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <img src={ratingicon} alt="ratings" className="w-6 h-6" />
              <span>Avg Ratings</span>
              <h2 className="text-3xl md:text-4xl text-[#001931] font-extrabold">{app.ratingAvg}</h2>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <img src={reviewicon} alt="reviews" className="w-6 h-6" />
              <span>Reviews</span>
              <h2 className="text-3xl md:text-4xl text-[#001931] font-extrabold">{app.reviews}K</h2>
            </div>
          </div>

          <button
            className={`w-full py-2 rounded-lg text-white font-semibold transition-all ${
              isInstalled ? "bg-red-400 cursor-not-allowed" : "bg-[#00D390] hover:bg-[#00b87f]"
            }`}
            onClick={handleInstall}
            disabled={isInstalled}
          >
            {isInstalled ? "Installed" : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-inner">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Ratings Breakdown</h3>
        <div className="space-y-3">
          {ratingData.map((r) => (
            <div key={r.star} className="flex items-center gap-4">
              <span className="w-10 text-sm font-medium text-gray-700">{r.star}★</span>
              <div className="flex-1 bg-gray-200 h-3 rounded">
                <div
                  className="h-3 rounded"
                  style={{
                    width: `${(r.count / maxRating) * 100}%`,
                    backgroundColor: "#FF8811",
                  }}
                ></div>
              </div>
              <span className="w-16 text-right text-sm text-gray-600">{r.count}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">Description</h2>
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">{app.description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetailPage;
