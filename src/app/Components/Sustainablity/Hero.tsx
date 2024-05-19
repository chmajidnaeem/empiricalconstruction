"use client";
import React from "react";
import Image from "next/image";
import Sustainability from "../../../../public/sustainability-hero.jpg";
import SustainabilityIntro from "../../../../public/sustainability-intro.jpg";
import { Stack, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <div className="bg-black">
      <Image
        className="w-screen lg:h-[380px] md:h-[300px]"
        src={Sustainability}
        alt="Image description"
      />
      <div className="absolute top-24 left-0 right-0  p-4 flex justify-left  items-center text-white text-xs font-bold pl-14">
        <a href="/" className="mx-1 hover:underline">
          Home
        </a>
        <span className="">{">>"}</span>
        <a href="/about" className="mx-1 hover:underline">
          About Us
        </a>
        <span className="">{">>"}</span>
        <span className="mx-1">Sustainability</span>
      </div>
      <div className="absolute top-72 left-0 transform -translate-y-1/2 pl-16 p-4">
        <h1 className=" font-bold text-white">
          <span className="lg:text-5xl md:text-4xl sm:text-3xl text-xl text-left font-extrabold md:block hidden">
            Sustainability. <br /> Less talk, more action
          </span>
        </h1>
      </div>

      <div className="mt-12 -mb-6 left-0 transform -translate-y-1/2 md:px-12 px-5  p-3">
        <h1 className="font-bold text-white">
          <span className=" text-2xl text-left font-extrabold block md:hidden lg:hidden">
            Sustainability. <br /> Less talk, more action
          </span>
        </h1>
      </div>

      <div className="lg:px-36 md:px-12 px-5 bg-black grid md:grid-cols-2 grid-cols-1 gap-14 md:pb-28 pb-10">
        {/* left side  */}
        <div className="">
          <Image
            className="md:w-[550px] md:h-[350px] w-full h-[282px] "
            src={SustainabilityIntro}
            alt="Image description"
          />
        </div>
        {/* right side  */}
        <div className="text-white  text-xl">
          <p className="md:mt-24 -mt-8 ">
            Our purpose is to{" "}
            <span className="font-extrabold">
              shape the future of real estate for a better world.
            </span>{" "}
            It has deep roots in our identity and history, and is the guiding
            principle informing our sustainability program.
          </p>

          <div className="mt-12">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"#020510"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "#C3C32F", textColor: "#C3C32F" }}
              >
                Lets talk
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
