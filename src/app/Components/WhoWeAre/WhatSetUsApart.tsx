"use client";
import React from "react";
import Image from "next/image";
import whatsetusApart from "../../../../public/what-sets-us-apart.jpg";
import {
    Stack,
    Button,
  } from "@chakra-ui/react";

const WhatSetUsApart = () => {
  return (
    <div className="lg:px-36 md:px-12 px-5 bg-black grid md:grid-cols-2 grid-cols-1 gap-8 md:pb-28 pb-10">
      {/* left side  */}
      <div className="">
        <Image
          className="md:w-[550px] md:h-[800px] w-full h-[282px] "
          src={whatsetusApart}
          alt="Image description"
        />
      </div>
      {/* right side  */}
      <div className="text-white md:mr-24 text-base">
        <h2 className="lg:text-5xl md:text-3xl font-extrabold absolute lg:left-[560px] md:[460px] mt-3 md:block hidden">What sets us apart?</h2>
        <h2 className="text-3xl font-extrabold  mt-3 block md:hidden lg:hidden">What sets us apart?</h2>
        <p className="md:mt-24 mt-8 ">We believe people are at their best when they are comfortable, challenged and encouraged to express themselves. Just as businesses thrive in spaces that project their brand, culture and ideals to the world.</p>
        <p className="md:mt-5 mt-3">We help our clients create environments that are far more than “an office”, “a shop” or “a hotel”. Places where ideas and collaboration flourish, meeting spaces are vibrant, sustainable and inclusive, and people are supported to think better, work better and live better.</p>
        <p className="md:mt-5 mt-3">We’ll always tune into the unique frequency of your business, its vision, your people and your culture. We truly believe that the right space for your company will foster energy and inspiration, happiness and playfulness, nurturing a sense of purpose that sparks fresh perspectives and drives a rich and defining company culture.</p>
        <p className="md:mt-5 mt-3">No matter what your particular requirements are, no matter the scale or the category of your project, we believe the ideal design and build solution will radiate genuine soul.</p>
        <p className="md:mt-5 mt-3">Because it’s so much more than a place that looks incredible. We believe it is design you can feel.</p>

        <div className="mt-12">
      <Stack spacing={6} direction={"row"}>
       
          <Button
            borderRadius={0}
            px={{ base: "3", sm: "6" }}
            bg={"#020510"}
            textColor={"white"}
            borderWidth={1}
            borderColor="white"
            _hover={{ borderColor: "red", textColor: "red" }}
          >
            See all case studies
          </Button>
        </Stack>
      </div>
      </div>
    </div>
  );
};

export default WhatSetUsApart;
