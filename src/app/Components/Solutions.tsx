import React from "react";
import { Image, Button } from "@chakra-ui/react";

const Blogs = () => {
  return (
    <div>
      {/* Our Services Section */}
      <div className="h-full w-full bg-black">
        <div className="w-full mx-auto py-10 px-4 md:px-8">
          <div className="flex flex-col md:flex-row pl-4 md:pl-8">
            <div>
              <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-4xl dark:text-white pt-20 md:mr-8">
                We have solutions for different <br /> industries
              </h2>
            </div>
            <div className="ml-0 md:ml-96 md:mt-20 mt-8 m-4">
              <Button
                borderRadius={0}
                width={48}
                bg={"transparent"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "#C3C32F", textColor: "#C3C32F" }}
              >
                See All Projects
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto mt-8 pt-4 auto-rows-fr lg:mx-0 lg:max-w-none">
            {/* First Article */}
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden md:pt-28 isolate">
              <Image
                src="https://zameenblog.s3.amazonaws.com/blog/wp-content/uploads/2020/11/Blog-Body-floor-01-1024x640.jpg"
                alt="Retail"
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href="/Retail"
              >
               Marble polish
              </a>
            </article>
            {/* Second Article */}
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden md:pt-28 isolate">
              <Image
                src="https://thearchitectsdiary.com/wp-content/uploads/2023/02/Arch2O-architectural-sketching-10-architecture-sketching-tips-1.jpg"
                alt="Office"
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              <a
                className="text-lg font-semibold leading-6 text-white hover:text-teal-100"
                href="/Office"
              >
                Architecture
              </a>
            </article>
            {/* Third Article */}
            <article className="relative flex flex-col justify-end px-4 pt-40 pb-4 overflow-hidden md:pt-28 isolate">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM-ZzZ1D9ipq-R9twl5dtYPRV9wEC0PizUFVkV3qRWNC_2tbYIyjbtSQb_uevh4vqa9QE&usqp=CAU"
                alt="Hotel"
                className="absolute inset-0 object-cover w-full h-full -z-10"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
              <div className="absolute inset-0 -z-10 rounded-xl ring-1 ring-inset ring-gray-900/10"></div>
              <a
                className="text-lg font-semibold leading-6 text-white pt-36 hover:text-teal-100"
                href="/Hotel"
              >
               Repair Maintenance
              </a>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
