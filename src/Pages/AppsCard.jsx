import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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

  if (!apps.length) return <p className="text-center py-10 text-lg">Loading Apps...</p>;

  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-3xl font-bold text-gray-900">Our All Applications</h2>
        <p className="text-gray-600 mt-2 text-1xl">
          Explore all the apps we’ve developed for the world.
        </p>
      </div>

      <div className="px-4 mb-10">
        <div className="flex justify-between items-center mb-4">
          <p>({filteredApps.length}) Apps Found</p>
          <input
            type="search"
            placeholder="Search Apps"
            className="border px-2 py-1 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
            {filteredApps.map((app) => (
              <div
                key={app.id}
                onClick={() => navigate(`/apps/${app.id}`)}
                className="border p-4 rounded shadow hover:shadow-lg transition duration-300 cursor-pointer"
              >
                <img
                  src={app.image}
                  alt={app.title}
                  className="w-full h-40 object-cover rounded"
                />
                <h3 className="text-xl font-semibold mt-2">{app.title}</h3>
                <p className="text-gray-500">{app.detail}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center py-10 text-gray-500">No apps found</p>
        )}
      </div>
    </div>
  );
};

export default AppsCard;
