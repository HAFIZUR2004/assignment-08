import React, { Suspense } from "react";
import { Link } from "react-router-dom";
import Banner from "./Banner";
import Demo from "./Demo";
import Loader from "./Loader";

const Home = () => {
  // Data Promise
  const datapromise = fetch("/HomeData.json").then((res) => res.json());

  return (
    <div>
      <Banner />

     
      <Suspense
        fallback={
          <Loader></Loader>
        }
      >
        <Demo datapromise={datapromise} />
      </Suspense>

     
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
