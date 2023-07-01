import React from "react";
import "./Banner.css";
import { Link } from "react-router-dom";

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
          <Link to={'/services'}><button className="px-7 py-3 bg-violet-400 text-black">View Foods</button></Link>
          <Link to={'/blog'}><button className="px-7 py-3 bg-violet-400 rounded-2xl text-black">Blogs</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
