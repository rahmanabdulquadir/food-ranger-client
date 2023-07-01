import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleServiceCard from "./SingleServiceCard";
import PostReview from "./PostReview";

const SingleService = () => {
  const [reviews, setReviews] = useState([]);
  const singleService = useLoaderData();
  return (
    <div className="my-10">
      <div>
        {singleService.map((service) => (
          <SingleServiceCard
            key={service._id}
            service={service}
            reviews={reviews}
            setReviews={setReviews}
          ></SingleServiceCard>
        ))}
      </div>

      <div>
        <h1>Post review here</h1>
        <div>
          {singleService.map((service) => (
            <PostReview
              key={service._id}
              service={service}
              setReviews={setReviews}
            ></PostReview>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleService;
