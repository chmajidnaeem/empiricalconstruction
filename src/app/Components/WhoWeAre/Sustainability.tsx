"use client";
import React from "react";
import Image from "next/image";
import SustainabilityImg from "../../../../public/sustainability.jpg";
import {
    Stack,
    Button,
  } from "@chakra-ui/react";

const Sustainability = () => {
  return (
    <div className="lg:px-36 md:px-12 px-5 bg-black grid md:grid-cols-2 grid-cols-1 gap-8 md:pb-28 pb-10">
    {/* left side  */}
    <div className="">
      <Image
        className="md:w-[550px] md:h-[450px] w-full h-[282px] "
        src={SustainabilityImg}
        alt="Image description"
      />
    </div>
    {/* right side  */}
    <div className="text-white md:mr-24 text-base">
      <h2 className="lg:text-5xl md:text-3xl font-extrabold absolute lg:left-[560px] md:[460px] mt-3 md:block hidden">Our sustainability ambition</h2>
      <h2 className="text-3xl font-extrabold  mt-3 block md:hidden lg:hidden">Our sustainability ambition</h2>
      <p className="md:mt-24 mt-8 ">As a leader in Design & Build we have the responsibility to influence the way spaces are reimagined, contributing to Building a better tomorrow. JLL’s sustainability ambition.</p>
       <ul className="md:mt-10 mt-8  list-disc ml-4" >
        <li>Generating lasting value for clients</li>
        <li>Engaging our people</li>
        <li>Transforming our workplaces</li>
        <li>Supporting our communities</li>
       </ul>
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
         Learn about sustainability at Tétris
        </Button>
      </Stack>
    </div>
    </div>
  </div>
  )
}

export default Sustainability