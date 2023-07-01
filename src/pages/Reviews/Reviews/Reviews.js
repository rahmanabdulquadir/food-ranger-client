import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import CurrentReviews from "../CurrentReviews/CurrentReviews";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/reviews?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
        console.log(setReviews);
      });
  }, [user.email]);

  const handleDeleteReview = (id) => {
    const agree = window.confirm("Are you sure you want delete this review?");
    if (agree) {
      fetch(`http://localhost:5000/review/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount === 1) {
            const remaining = reviews.filter((rv) => rv._id !== id);
            setReviews(remaining);
            toast.success("Review deleted successfully");
          }
        });
    }
  };
  return (
    <div>
      <Helmet>
      <title>FoodRanger - Reviews</title>
      </Helmet>
      <h1 className="text-violet-800 text-2xl">Your total reviews - {reviews.length}</h1>
      {reviews.length > 0 ? (
        <div className="overflow-x-auto flex items-center">
          <table className="table mx-auto w-full my-10">
            {/* head */}
            <thead>
              <tr>
                {/* <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th> */}
                <th></th>
                <th>Service Name</th>
                <th>Review By</th>
                <th>Review</th>
              </tr>
            </thead>
            <tbody>
              {reviews.map((rvw) => (
                <CurrentReviews
                  key={rvw._id}
                  rvw={rvw}
                  handleDeleteReview={handleDeleteReview}
                  setReviews={setReviews}
                ></CurrentReviews>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <section className="flex items-center h-full sm:p-16 dark:bg-gray-900 dark:text-gray-100">
          <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-40 h-40 dark:text-gray-600"
            >
              <path
                fill="currentColor"
                d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"
              ></path>
              <rect
                width="176"
                height="32"
                x="168"
                y="320"
                fill="currentColor"
              ></rect>
              <polygon
                fill="currentColor"
                points="210.63 228.042 186.588 206.671 207.958 182.63 184.042 161.37 162.671 185.412 138.63 164.042 117.37 187.958 141.412 209.329 120.042 233.37 143.958 254.63 165.329 230.588 189.37 251.958 210.63 228.042"
              ></polygon>
              <polygon
                fill="currentColor"
                points="383.958 182.63 360.042 161.37 338.671 185.412 314.63 164.042 293.37 187.958 317.412 209.329 296.042 233.37 319.958 254.63 341.329 230.588 365.37 251.958 386.63 228.042 362.588 206.671 383.958 182.63"
              ></polygon>
            </svg>
            <p className="text-3xl">
              No reviews were added
            </p>
            <Link to={'/services'} className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Go back to add review</Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default Reviews;
