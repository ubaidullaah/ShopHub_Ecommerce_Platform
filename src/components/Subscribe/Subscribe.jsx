import React from "react";

const Subscribe = () => {
  return (
    <div
      data-aos="zoom-in"
      className="mb-20 bg-slate-700 dark:bg-gray-800 text-white rounded-lg shadow-lg"
    >
      <div className="container backdrop-blur-sm py-10">
        <div className="space-y-6 max-w-xl mx-auto">
          <h1 className="text-2xl text-center sm:text-left sm:text-4xl font-semibold">
            Get Notified About New Products
          </h1>
          <input
            data-aos="fade-up"
            type="text"
            placeholder="Enter your email"
            className="w-full p-4 rounded-md border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
          <button className="w-full p-3 mt-4 text-white bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200">
            Subscribe
          </button>
          <p className="text-sm text-center text-gray-400">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
