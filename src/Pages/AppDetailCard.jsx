import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import downloadicon from "../assets/icon-downloads.png";
import ratingicon from "../assets/icon-ratings.png";
import reviewicon from "../assets/icon-review.png";

const AppDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [app, setApp] = useState(null);

  useEffect(() => {
    fetch("/aa.json")
      .then((res) => res.json())
      .then((data) => {
        const foundApp = data.find((a) => a.id === parseInt(id));
        setApp(foundApp);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!app) return <p className="text-center py-10">Loading...</p>;

  // Dummy rating data (তুমি চাইলে JSON থেকেও আনতে পারো)
  const ratingData = [
    { star: 5, count: 12000 },
    { star: 4, count: 9000 },
    { star: 3, count: 6000 },
    { star: 2, count: 3000 },
    { star: 1, count: 0 },
  ];

  // সর্বোচ্চ rating বের করছি বার প্রস্থ নির্ধারণের জন্য
  const maxRating = Math.max(...ratingData.map((r) => r.count));

  return (
    <div className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-2xl">
      {/* <button
        onClick={() => navigate(-1)}
        className="mb-6 text-blue-600 hover:underline"
      >
        &larr; Back
      </button> */}

      {/* Responsive Layout */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={app.image}
            alt={app.title}
            className="w-full h-64 md:h-80 object-cover rounded-xl shadow-md"
          />
        </div>

        {/* Info Section */}
        <div className="w-full md:w-1/2 space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <h2 className="text-2xl font-bold text-gray-800">{app.title}:</h2>
            <h2 className="text-2xl font-bold text-gray-800">{app.detail}</h2>
          </div>

          <p className="text-gray-500 text-sm md:text-base">
            Developed by:
            <span className="text-red-600 font-medium ml-1">
              {app.companyName}
            </span>
          </p>

          <hr className="border-gray-200 my-4" />

          {/* Stats Section */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
            <div className="space-y-2">
              <img src={downloadicon} alt="downloads" className="w-6 h-6" />
              <span>Downloads</span>
              <h2 className="text-[40px] text-[#001931] font-extrabold">
                {app.downloads}
              </h2>
            </div>
            <div className="space-y-2">
              <img src={ratingicon} alt="ratings" className="w-6 h-6" />
              <span>Average Ratings</span>
              <h2 className="text-[43px] text-[#001931] font-extrabold">
                {app.ratingAvg}
              </h2>
            </div>
            <div className="space-y-2">
              <img src={reviewicon} alt="reviews" className="w-6 h-6" />
              <p>Reviews</p>
              <h2 className="text-[40px] text-[#001931] font-extrabold">
                {app.reviews}K
              </h2>
            </div>
          </div>

          <button className="btn bg-[#00D390] hover:bg-[#00b87f] text-white px-6 py-2 rounded-lg">
            Install Now ({app.size} MB)
          </button>
        </div>
      </div>

    
      {/* Ratings Breakdown Section */}
      <div className="mt-10 bg-gray-50 p-6 rounded-xl shadow-inner">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Ratings Breakdown
        </h3>
        <div className="space-y-3">
          {ratingData.map((r) => (
            <div key={r.star} className="flex items-center gap-4">
              <span className="w-10 text-sm font-medium text-gray-700">
                {r.star} Star
              </span>
              <div className="flex-1 bg-gray-200 h-3">
                <div
                  className="h-3"
                  style={{
                    width: `${(r.count / maxRating) * 100}%`,
                    backgroundColor: "#FF8811", // তোমার পছন্দের রঙ
                  }}
                ></div>
              </div>
              <span className="w-16 text-right text-sm text-gray-600">
                {r.count}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* description */}
      
      <div className="mt-10 space-y-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Description</h2>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {app.description}
        </p>

        {/* Example: extra paragraphs if needed */}
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          This focus app takes the proven Pomodoro technique and makes it even more practical for modern lifestyles. Instead of just setting a timer, it builds a complete environment for deep work, minimizing distractions and maximizing concentration. Users can create custom work and break intervals, track how many sessions they complete each day, and review detailed statistics about their focus habits over time. The design is minimal and calming, reducing cognitive load so you can focus entirely on the task at hand. Notifications gently let you know when to pause and when to resume, helping you maintain a healthy rhythm between work and rest.
        </p>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          A unique feature of this app is the integration of task lists with timers. You can assign each task to a specific Pomodoro session, making your schedule more structured. The built-in analytics show not only how much time you’ve worked but also which tasks consumed the most energy. This allows you to reflect on your efficiency and adjust your workflow accordingly. The app also includes optional background sounds such as white noise, nature sounds, or instrumental music to create a distraction-free atmosphere.
        </p>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          For people who struggle with procrastination, the app provides motivational streaks and achievements. Completing multiple Pomodoro sessions unlocks milestones, giving a sense of accomplishment. This gamified approach makes focusing more engaging and less like a chore. Whether you’re studying for exams, coding, writing, or handling office work, the app adapts to your routine. By combining focus tracking, task management, and motivational tools, this Pomodoro app ensures that you not only work harder but also smarter. It is a personal trainer for your brain, keeping you disciplined, refreshed, and productive throughout the day.
        </p>
      </div>


    </div>
  );
};

export default AppDetailPage;
