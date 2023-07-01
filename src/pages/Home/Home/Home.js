import React from "react";
import Banner from "../Banner/Banner";
import Services from "../Services/Services";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Helmet } from "react-helmet";

const Home = () => {
  const threeItems = useLoaderData();
  console.log(threeItems);
  return (
    <div>
      <Helmet>
      <title>FoodRanger - Home</title>
      </Helmet>
      <Banner></Banner>

      <section className="my-14">
        <div className="container p-4 mx-auto my-2 space-y-1 text-center">
          <span className="text-xs font-semibold tracki uppercase dark:text-violet-400">
            Your one stop food destination
          </span>
          <h2 className="pb-3 text-3xl font-bold md:text-4xl">
           Most Popular Items
          </h2>
          <p>
            Get a jumpstart to creating your new webpage! With our fully
            responsive and carefully styled components you can get the structure
            of your website done with just a couple of clicks.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
          {threeItems.map((item) => (
            <div className="max-w-xs mx-auto rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
                <PhotoProvider>
                <PhotoView src={item.image}>
                    <img src={item.image} alt="" className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500" />
                </PhotoView>
            </PhotoProvider>
              <div className="flex flex-col justify-between p-6 space-y-8">
                <div className="space-y-2">
                  <h2 className="text-3xl font-semibold tracki">{item.name}</h2>
                  <p className="dark:text-gray-100 font-bold">
                    <small>Net Price: {item.price}</small>
                  </p>
                  <p className="dark:text-gray-100">
                    {item.details.slice(0, 75)}
                  </p>
                </div>
                <Link to={`/services/${item._id}`}>
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
          ))}
        </div>
        <Link to={"/services"}>
          <button
            type="button"
            className="flex items-center justify-center mx-auto p-5 font-semibold tracki rounded-md dark:bg-violet-400 dark:text-gray-900 my-10"
            fdprocessedid="icaqfo"
          >
            View Details
          </button>{" "}
        </Link>
      </section>

      <section>
        <section className="dark:bg-gray-100 dark:text-gray-800">
          <div className="container mx-auto flex flex-col p-6">
            <h2 className="py-4 text-3xl font-bold text-center">
              How Food Ranger Works
            </h2>
            <div className="divide-y divide-gray-700">
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                  >
                    <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                    <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                    <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracki uppercase dark:text-violet-400">
                    Step 1 - Nihil
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Veritatis dolores
                  </span>
                  <span className="mt-4 dark:text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                  >
                    <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                    <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracki uppercase dark:text-violet-400">
                    Step 2 - Explicabo
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Iure incidunt labore
                  </span>
                  <span className="mt-4 dark:text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                  >
                    <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                    <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracki uppercase dark:text-violet-400">
                    Step 3 - Facilis
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Dolorem praesentium
                  </span>
                  <span className="mt-4  dark:text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                  >
                    <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                    <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                    <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracki uppercase dark:text-violet-400">
                    Step 4 - Aperiam
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Explicabo eaque
                  </span>
                  <span className="mt-4 dark:text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <section className="p-6 my-6 dark:bg-gray-800 dark:text-gray-100">
          <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-800"
                >
                  <polygon points="160 96.039 160 128.039 464 128.039 464 191.384 428.5 304.039 149.932 304.039 109.932 16 16 16 16 48 82.068 48 122.068 336.039 451.968 336.039 496 196.306 496 96.039 160 96.039"></polygon>
                  <path d="M176.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,176.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,176.984,464.344Z"></path>
                  <path d="M400.984,368.344a64.073,64.073,0,0,0-64,64h0a64,64,0,0,0,128,0h0A64.072,64.072,0,0,0,400.984,368.344Zm0,96a32,32,0,1,1,32-32A32.038,32.038,0,0,1,400.984,464.344Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">200</p>
                <p className="capitalize">Orders</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-800"
                >
                  <path d="M256,16C123.452,16,16,123.452,16,256S123.452,496,256,496,496,388.548,496,256,388.548,16,256,16ZM403.078,403.078a207.253,207.253,0,1,1,44.589-66.125A207.332,207.332,0,0,1,403.078,403.078Z"></path>
                  <path d="M256,384A104,104,0,0,0,360,280H152A104,104,0,0,0,256,384Z"></path>
                  <polygon points="205.757 228.292 226.243 203.708 168 155.173 109.757 203.708 130.243 228.292 168 196.827 205.757 228.292"></polygon>
                  <polygon points="285.757 203.708 306.243 228.292 344 196.827 381.757 228.292 402.243 203.708 344 155.173 285.757 203.708"></polygon>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">7500</p>
                <p className="capitalize">New customers</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-800"
                >
                  <path d="M425.706,142.294A240,240,0,0,0,16,312v88H160V368H48V312c0-114.691,93.309-208,208-208s208,93.309,208,208v56H352v32H496V312A238.432,238.432,0,0,0,425.706,142.294Z"></path>
                  <rect width="32" height="32" x="80" y="264"></rect>
                  <rect width="32" height="32" x="240" y="128"></rect>
                  <rect width="32" height="32" x="136" y="168"></rect>
                  <rect width="32" height="32" x="400" y="264"></rect>
                  <path d="M297.222,335.1l69.2-144.173-28.85-13.848L268.389,321.214A64.141,64.141,0,1,0,297.222,335.1ZM256,416a32,32,0,1,1,32-32A32.036,32.036,0,0,1,256,416Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">172%</p>
                <p className="capitalize">Growth</p>
              </div>
            </div>
            <div className="flex p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-900 dark:text-gray-100">
              <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                  className="h-9 w-9 dark:text-gray-800"
                >
                  <path d="M454.423,278.957,328,243.839v-8.185a116,116,0,1,0-104,0V312H199.582l-18.494-22.6a90.414,90.414,0,0,0-126.43-13.367,20.862,20.862,0,0,0-8.026,33.47L215.084,496H472V302.08A24.067,24.067,0,0,0,454.423,278.957ZM192,132a84,84,0,1,1,136,65.9V132a52,52,0,0,0-104,0v65.9A83.866,83.866,0,0,1,192,132ZM440,464H229.3L79.141,297.75a58.438,58.438,0,0,1,77.181,11.91l28.1,34.34H256V132a20,20,0,0,1,40,0V268.161l144,40Z"></path>
                </svg>
              </div>
              <div className="flex flex-col justify-center align-middle">
                <p className="text-3xl font-semibold leadi">17%</p>
                <p className="capitalize">Bounce rate</p>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* <Services></Services> */}
    </div>
  );
};

export default Home;
