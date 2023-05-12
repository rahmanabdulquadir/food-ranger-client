import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner hero h-[650px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Food Ranger</h1>
          <p className="py-6 text-2xl">
            Welcome to Food Ranger, home of your favourite cuisine, fast food and
            Many more.
          </p>
          <button className="btn btn-primary">View Foods</button>
          <button className="btn btn-primary rounded-2xl">Blogs</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
