import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 px-4 text-center">
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-sm w-full">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition inline-block"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
