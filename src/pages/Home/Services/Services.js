import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";
import { Helmet } from "react-helmet";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/foods")
      .then((res) => res.json())
      .then((data) => {
        setServices(data)
        setLoading(false)
      });
  }, []);

  if (loading) {
    return <div className="h-[60vh] flex items-center mx-auto">
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    </div>;
  }
  return (
    <div className="">
      <Helmet>
      <title>FoodRanger - Services</title>
      </Helmet>
      <div className="mb-7">
        <h1 className="text-4xl">Popular Items</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste amet
          quo laboriosam! Quaerat, excepturi ipsa temporibus quidem sunt <br />{" "}
          et ipsam, ad qui architecto sequi, tenetur voluptas velit! Temporibus,
          vitae? Dicta?
        </p>
      </div>
      Services: {services.length}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-5">
        {services?.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
