import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

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

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow rounded-xl">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 text-blue-600 hover:underline"
      >
        &larr; Back
      </button>
      <img src={app.image} alt={app.title} className="w-full h-60 object-cover rounded" />
      <h2 className="text-2xl font-bold mt-4">{app.title}</h2>
      <p className="text-gray-500 mt-1">{app.companyName}</p>
      <div className="mt-4 flex justify-between text-sm text-gray-600">
        <span>Size: {app.size} MB</span>
        <span>Downloads: {app.downloads}</span>
        <span>⭐ {app.ratingAvg}</span>
        <span>{app.reviews} Reviews</span>
      </div>
      <p className="mt-4 text-gray-700 whitespace-pre-line">{app.description}</p>
    </div>
  );
};

export default AppDetailPage;
