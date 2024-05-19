"use client";
import React from "react";
import Image from "next/image";
import Sustainability from "../../../../public/sustainability-hero.jpg";
import SustainabilityIntro from "../../../../public/sustainability-intro.jpg";
import TextureImg from "../../../../public/tetrisdb-illus-texture-cta-32.jpg";
import { Stack, Button } from "@chakra-ui/react";

const SustainabilityHighlights = () => {
  return (
    <div>
      <div className="lg:px-36 md:px-12 px-5 bg-black grid md:grid-cols-2 grid-cols-1 gap-14 md:pb-28 pb-10 ">
        {/* left side  */}
        <div className="">
          <Image
            className="md:w-[550px] md:h-[350px] w-full h-[282px] "
            src={SustainabilityIntro}
            alt="Image description"
          />
        </div>
        {/* right side  */}
        <div className="text-white  text-xl ">
          <h2 className="text-2xl font-extrabold">
            Tétris 2022 Sustainability Highlights
          </h2>
          <p className="md:mt-5 mt-3 text-sm">
            We have published our Tétris 2022 Sustainability Highlights. See how
            far we have come in our sustainability strategy and learn more about
            our sustainability stories and the key initiatives we delivered in
            2022. Discover how, as a leading design and build business, we
            support our parent company, JLL, in shaping the future of real
            estate for a better world by creating inspiring spaces for everyone.
          </p>
          <p className="md:mt-5 mt-3 text-sm font-bold">Download:</p>
          <div className="mt-8">
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
                Tétris 2022 Sustainability Highlights
              </Button>
            </Stack>
          </div>
          <div className="mt-3">
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
                Tétris 2022 Sustainability Highlights summary
              </Button>
            </Stack>
          </div>
        </div>
      </div>

      <div>
        <div className="md:px-16 px-5 md:pb-24 pb-8 bg-black relative">
          <Image
            className="md:w-full md:h-[200px] w-full h-[382px] "
            src={TextureImg}
            alt="Image description"
          />
          <div className="absolute top-[38%] md:left-96 left-72 transform -translate-x-1/2 -translate-y-1/2 text-left">
            <h2 className="text-white text-3xl font-extrabold mb-4">
              Tétris Sustainability Code
            </h2>
            <p className="text-white text-base font-medium mb-8">
              Accelerate your journey to become a more sustainable, resilient
              and <br />
              responsible enterprise with the Tétris Sustainability Code
              solution.
            </p>
          </div>
          <div className="mt-8 absolute right-36 top-[15%]">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"transparent"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "#C3C32F", textColor: "#C3C32F" }}
              >
                Learn More
              </Button>
            </Stack>
          </div>
        </div>
        <div>
          {/* Your other content here */}

          {/* Second instance of texture image */}
          {/* <div
            style={{
              position: "relative",
              height: "300px",
              overflow: "hidden",
            }}
          >
            <Image
              className="md:w-full md:h-[300px] w-full h-[300px]  relative  left-0 "
              src={TextureImg}
              alt="Image description"
              style={{
                filter: "blur(10px)",
                opacity: "0.2",
                backgroundColor: "rgba(0, 0, 0, 0.9)",
                zIndex: 2,
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SustainabilityHighlights;
