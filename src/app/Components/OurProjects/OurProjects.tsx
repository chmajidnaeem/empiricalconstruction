"use client";
import { useState } from "react";
import React from "react";
import Image from "next/image";
import "./animation.css";

import SustainabilityImg from "../../../../public/sustainability.jpg";
import { Stack, Button } from "@chakra-ui/react";

const OurProjects = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  // const [isHovered2, setIsHovered2] = useState(false);
  // const [isHovered3, setIsHovered3] = useState(false);
  return (
    <div className=" md:px-14 px-5 bg-[#020510]">
        <div className=" top-0 left-0 right-0  py-6 flex justify-left  items-center text-white text-xs font-bold pl-">
        <a href="/" className="mx-1 hover:underline">
          Home
        </a>
        <span className="">{">>"}</span>
        <span className="mx-1">Our Work</span>
      </div>
    <div className=" grid md:grid-cols-2 grid-cols-1 gap- md:pb-28 pb-10 pt-16">
      
      {/* left side  */}
      <div className="text-white md:mr-24 text-base mt-[20%]">
        <h2 className="text-5xl font-extrabold  mt-3  ">Our Projects</h2>
        <p className="md:mt-8 mt-3 ">
          Inspiring people to think better, work better and live better.
        </p>
        <p className="md:mt-3 mt-3  mb-10 md:mb-0">
          Discover our design and build projects from around the globe, from
          unique offices, to retail and hospitality spaces.
        </p>
      </div>
      {/* rigth side  */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <Image
          className="md:w-[650px] md:h-[450px] w-full h-[282px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdqX3-MLtWsE2ccU12nmlld-5A637BUmEEJPi2-72_iw&s"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered1 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">Empirical Construction</h2>

            <div className="text-white flex font-medium text-base mt-4">
              {/* <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul> */}
            </div>

            <p className="text-white mt-5 font-medium text-base">
            Discover our design and build projects from around the globe, from
          unique offices, to retail and hospitality spaces.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>
    </div>
    </div>

  );
};

export default OurProjects;
