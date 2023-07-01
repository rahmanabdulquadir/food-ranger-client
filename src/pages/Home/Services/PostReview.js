import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { Link, useLocation } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";

const PostReview = ({ service, setReviews }) => {
  const { _id, image, name, price } = service;
  const { user } = useContext(AuthContext);
  const location = useLocation();

  const customer = user?.displayName;
  const photoURL = user?.photoURL;
  const email = user?.email;
  const date = new Date();

  const handlePostReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const review = form.review.value;

    const postedReview = {
      review: review,
      customer,
      serviceId: _id,
      photoURL,
      serviceName: name,
      serviceImage: image,
      servicePrice: price,
      email,
      date,
    };

    fetch(`http://localhost:5000/reviews/${_id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(postedReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        if (data.acknowledged) {
          showToast()
          form.reset()
          fetch(`http://localhost:5000/reviews/${_id}`)
            .then((res) => res.json())
            .then((data) => {
              console.log(data)
              setReviews(data)
            });
        }
      });
  };

  const showToast = () => {
    toast.success("Successfully Posted Review", { autoclose: 5000 });
}
  return (
    <div className="flex items-center justify-center text-center ">
      {user?.email ? (
        <>
          <form
            onSubmit={handlePostReview}
            className="bg-violet-200 flex flex-col w-full max-w-lg p-12 rounded shadow-lg dark:text-black ng-untouched ng-pristine ng-valid"
          >
            <textarea name="review" id="review" cols="30" rows="10"></textarea>

            <button
              type="submit"
              className="flex items-center justify-center h-12 px-6 mt-8 text-sm font-semibold rounded bg-violet-500 text-white"
            >
              Post Review
            </button>
          </form>
        </>
      ) : (
        <p className="text-2xl font-bold text-lime-700">
          Please Login first to add a review.{" "}
          <Link
            className="text-gray-700 underline"
            state={{ from: location }}
            replace
            to={"/login"}
          >
            Login Here.
          </Link>
        </p>
      )}
    </div>
  );
};

export default PostReview;
