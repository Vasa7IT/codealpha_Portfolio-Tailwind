import React from "react";
import expenseTracker from "../assets/expenseTracker-proj.png";
import portfolio from "../assets/portfolio-proj.png";
import smd from "../assets/socialMediaDashboard-proj.jpeg";

const Portfolio = () => {
  const portfolios = [
    { id: 1, src: expenseTracker },
    { id: 2, src: smd },
    { id: 3, src: portfolio },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b
   from-black to-gray-800 w-full text-white "
    >
      <div
        className=" max-w-screen-lg p-4 mx-auto flex flex-col
    justify-center w-full h-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Explore some of my portfolio pieces right here.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className=" shadow-md shadow-gray-600 rounded-lg p-4">
              <img
                src={src}
                alt=""
                className=" h-5/6 object-cover w-full rounded-md duration-200 hover:scale-105 "
              />
              <div className="flex items-center justify-between">
                <button className="px-6 pt-3 w-1/2 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="px-6 pt-3 w-1/2 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
