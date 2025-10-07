import React, { Suspense } from "react";
import { Link } from "react-router-dom"; // 🔥 এটা যোগ করো
import Banner from "./Banner";
import Demo from "./Demo";

const Home = () => {
  const datapromise = fetch("/HomeData.json").then((res) => res.json());

  return (
    <div>
      <Banner />
      <Suspense fallback={<p className="text-center py-10">Loading...</p>}>
        <Demo datapromise={datapromise} />
      </Suspense>

      {/* নিচের Link ঠিক আছে */}
      <div className="text-center my-6">
        <Link
          to="apps"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
