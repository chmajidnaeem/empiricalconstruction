"use client";
import React from "react";
import Image from "next/image";
import WhoWeAreImg from "../../../../public/tetrisdb-illus-who-we-are-header.jpg";

import {
  Stack,
  Button,
} from "@chakra-ui/react";

const WhoWeAre = () => {
  return (
    <div className="relative bg-black md:pb-24 pb-8">
      <Image
        className="w-screen lg:h-[380px] md:h-[300px]"
        src={WhoWeAreImg}
        alt="Image description"
      />
      <div className="absolute top-0 left-0 right-0  p-4 flex justify-left  items-center text-white text-xs font-bold pl-14">
        <a href="/" className="mx-1 hover:underline">
          Home
        </a>
        <span className="">{">>"}</span>
        <a href="/about" className="mx-1 hover:underline">
          About Us
        </a>
        <span className="">{">>"}</span>
        <span className="mx-1">Who We Are</span>
      </div>
      <div className="absolute top-1/3 left-0 transform -translate-y-1/2 pl-16 p-4">
        <h1 className="text-6xl font-bold text-white">
          <span className="lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center font-extrabold md:block hidden">
            Who We Are
          </span>
        </h1>
      </div>

      <div className="mt-10 left-0 transform -translate-y-1/2 md:px-12 px-5  p-3">
        <h1 className="text-6xl font-bold text-white">
          <span className=" text-4xl text-left font-extrabold block md:hidden lg:hidden">
            Who We Are
          </span>
        </h1>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 text-white md:px-12 px-5 gap-9">
        {/* left side   */}
        <div className="">
          <h2 className="text-3xl font-bold ">
            We don’t just create inspiring spaces for businesses. We create
            inspiring places for people.
          </h2>
          <p className="mt-8">
            As a leading design and build company with global reach, we create
            environments that are beautiful, functional, inspirational and
            sustainable. We deliver our services to businesses of all sizes on
            projects in the office, retail and hotel sectors, among others,
            counting many of the world’s most iconic brands as our clients.
          </p>
        </div>
        {/* right side  */}
        <div className="text-white">
          <p>
            Our offices span 30 cities in 13 countries, and our work draws on
            the energy, creativity and skill of a global team with deep local
            expertise, uniquely positioning us to help international and
            national businesses adapt their projects to local cultures and
            needs. 
            <p className="mt-6">Across our diverse Tétris family, what we share is the
            ambition to help build a better tomorrow through great design.</p>
          </p>
      <div className="mt-12">
      <Stack spacing={6} direction={"row"}>
          <Button
            bg={"#020510"}
            textColor={"white"}
            borderWidth={1}
            borderColor="white"
            px={{ base: "3", sm: "6" }}
            borderRadius={0}
            // colorScheme={'orange'}
            // bg={'orange.400'}
            _hover={{ borderColor: "red", textColor: "red" }}
          >
           Where to find us
          </Button>
          <Button
            borderRadius={0}
            px={{ base: "3", sm: "6" }}
            bg={"#020510"}
            textColor={"white"}
            borderWidth={1}
            borderColor="white"
            _hover={{ borderColor: "red", textColor: "red" }}
          >
            Contact Us
          </Button>
        </Stack>
      </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
