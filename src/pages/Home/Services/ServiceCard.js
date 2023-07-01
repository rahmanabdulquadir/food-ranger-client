import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, name, price, details, image } = service;
  return (
    <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <PhotoProvider>
        <PhotoView src={image}>
          <img
            src={image}
            alt=""
            className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
          />
        </PhotoView>
      </PhotoProvider>

      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracki">{name}</h2>
          <p className="dark:text-gray-100 font-bold">
            <small>Net Price: {price}</small>
          </p>
          <p className="dark:text-gray-100">{details.slice(0, 75)}</p>
        </div>
        <Link to={`/services/${_id}`}>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900"
            fdprocessedid="icaqfo"
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
