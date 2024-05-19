"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import "./animation.css";
import { Button } from "@chakra-ui/react";

const AllProjects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  return (
    <div className="bg-black">
        
    <div className=" md:px-12 px-5  grid md:grid-cols-2 grid-cols-1 gap-12 md:pb-28 pb-10 pt-28 ">
      {/* left side  */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <Image
          className="md:w-[650px] md:h-[450px] w-full h-[282px]"
          src="https://miro.medium.com/v2/resize:fit:3200/1*TfIqQpwfXov287CCqjhetg.jpeg"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered1 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">Empirical Construction</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p></p>
              {/* <ul>
                <li className="list-disc ml-6"></li>
              </ul> */}
            </div>

            <p className="text-white mt-5 font-medium text-base">
            We specialize in designing and constructing your dream home and providing innovative building solutions for your workspace
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-[#C3C32F] text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>
      {/* rigth side  */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <Image
          className="md:w-[650px] md:h-[450px] w-full h-[282px]"
          src="https://miro.medium.com/v2/resize:fit:3200/1*TfIqQpwfXov287CCqjhetg.jpeg"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered2 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">Empirical Construction</h2>

            <div className="text-white flex font-medium text-base mt-4">
              {/* <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul> */}
            </div>

            <p className="text-white mt-5 font-medium text-base">
            Transforming visions into reality, we specialize in designing and building bespoke homes and modern workspaces. Our expert team delivers innovative construction solutions tailored to your unique needs
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-[#C3C32F] text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>
    </div>


    <div className="pb-12 justify-center flex">
              <Button
                borderRadius={0}
                width={40}
                bg={"transparent"}
                textColor={"white"}
                // borderWidth={1}
                // borderColor="white"
                _hover={{  textColor: "red" }}
              >
                See All Projects
              </Button>
            </div>
    </div>

  );
};

export default AllProjects;
