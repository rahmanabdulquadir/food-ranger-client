import React, { useEffect } from "react";
import CustomerReviews from "./CustomerReviews";

const SingleServiceCard = ({ service, reviews, setReviews }) => {
  const { image, name, details, price, _id } = service;
  return (
    <div className="p-5 mx-auto sm:p-10 md:p-16 dark:bg-gray-800 dark:text-gray-100">
      <div className="space-y-2 text-center my-8">
        <h2 className="text-5xl font-bold text-gray-700">
          Details of{" "}
          <span className="text-5xl font-bold text-violet-400">{name}</span>
        </h2>
        <p className="font-serif text-md text-violet-700">
          This Cuisine is the most sold item of my kitchen. Check it Out!
        </p>
      </div>
      <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
        <img
          src={image}
          alt=""
          className="w-full h-60 sm:h-96 dark:bg-gray-200"
        />
        <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
          <div className="space-y-2">
            <a
              rel="noopener noreferrer"
              href="#"
              className="inline-block text-2xl font-semibold sm:text-3xl"
            >
              {name}
            </a>
            <p className="text-xl dark:text-gray-400 font-bold">
              Price: {price}
            </p>
            <p className="text-xs dark:text-gray-400">
              Ratings: {service.rating.number}
            </p>
          </div>
          <div className="dark:text-gray-100">
            <p>{details}</p>
          </div>
        </div>
      </div>

      {
        <div className="mx-auto max-w-xl text-center mt-20">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-violet-400">
            Trusted Reviews from Our Customers
          </h2>

          <p className="text-lime-700 mx-auto mt-4 max-w-lg">
            Our customers are our secret ingredients to good food.
          </p>
        </div>
      }

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5">
        {useEffect(() => {
          fetch(`http://localhost:5000/reviews/${_id}`)
            .then((res) => res.json())
            .then((data) => {
              setReviews(data);
            });
        }, [_id, setReviews])}

        {reviews.map((rev) => (
          <CustomerReviews key={rev._id} rev={rev}></CustomerReviews>
        ))}
      </div>
    </div>
  );
};

export default SingleServiceCard;
