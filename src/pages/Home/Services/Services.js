import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/services')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])
  return (
    <div className="my-10">
      <div className="mb-7">
        <h1 className="text-4xl">Popular Items</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste amet
          quo laboriosam! Quaerat, excepturi ipsa temporibus quidem sunt <br />{" "}
          et ipsam, ad qui architecto sequi, tenetur voluptas velit! Temporibus,
          vitae? Dicta?
        </p>
      </div>

      <div>
        Services: {services.length}

        {
          services?.map(service => <p>{service?.name}</p>)
        }
      </div>
    </div>
  );
};

export default Services;
