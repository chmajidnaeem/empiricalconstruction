import React from "react";
import { Image, Button } from "@chakra-ui/react";
const Blogs = () => {
  return (
    <div>
      <div className="h-full w-full bg-black pb-24">
        <div className="w-full mx-auto py-4 px-4 md:px-8">
          <div className=" mx-auto pl-4">
            <h2 className="text-2xl font-extrabold tracking-tight text-white text-center sm:text-5xl dark:text-white pt-20">
              Our other services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto h-auto mt-8 pt-8">
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate">
              <Image
                src="https://blog.allplan.com/hubfs/EN_Blog/Architecture/Improving%20Quality%20of%20Life%20Through%20Architecture/Komprimierte%20Bilder/iStock-623267524_NEU%20(1).jpg"
                alt="h"
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-2xl font-bold pb-4 text-center leading-6 text-white hover:text-teal-100"
                href="#"
              >
             Architecture
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoOnZ86C1DBdCdJS-1a67SLSAbeZJ9j9t-T2RzdWwnw&s"
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-2xl font-bold pb-4 text-center leading-6 text-white hover:text-teal-100"
                href="#"
              >
                Construction
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHW0tqrnMAyAXmpP4oyGENGAQv6Z7oMZclI3C05xJ2gA&s"
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-2xl font-bold pb-4 text-center leading-6 text-white hover:text-teal-100"
                href="#"
              >
               Interior Design
              </a>
            </article>
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden bg-gray-900 md:pt-28 isolate">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqX3-MLtWsE2ccU12nmlld-5A637BUmEEJPi2-72_iw&s"
                alt=""
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>

              <a
                className="text-2xl font-bold pb-4 text-center leading-6 text-white hover:text-teal-100"
                href="#"
              >
                Acoustic & Thermal
              </a>
            </article>
          </div>
        </div>
      </div>

    
    </div>
  );
};

export default Blogs;
