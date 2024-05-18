/* eslint-disable jsx-a11y/alt-text */
"use client";
import React from "react";
import Image from "next/image";
import texture from "../../../../public/team-texture-offices.jpg";
import { Stack, Button } from "@chakra-ui/react";

const Team = [
  {
    heading: "Nicasio Gutiérrez",
    paragraph: "Chief Executive Officer",
    image: "/tetrisdb-team-nicasio-gutierrez.jpg",
  },
  {
    heading: "Bernard Tyler",
    paragraph: "Growth and Performance Director",
    image: "/tetrisdb-team-bernard-tyler-2022.jpg",
  },

  {
    heading: "Emma Luyt",
    paragraph: "Regional Director",
    image: "/tetrisdb-team-emma-luyt-2024.jpg",
  },
  {
    heading: "Mathias Grossman",
    paragraph: "Regional Director",
    image: "/tetrisdb-team-mathias-grossman.jpg",
  },

  {
    heading: "Stéphanie Bonduelle",
    paragraph: "Client and Brand Development Director",
    image: "/tetrisdb-team-stephanie-bonduelle.jpg",
  },
  {
    heading: "Adrian Davidson",
    paragraph: "Design Director, EMEA",
    image: "/tetrisdb-team-adrian-davidson.jpg",
  },

  {
    heading: "Betty Surgis",
    paragraph: "Head of Furniture Solutions, EMEA",
    image: "/tetrisdb-team-betty-surgis.jpg",
  },
  {
    heading: "Romeu Carpinteiro",
    paragraph: "Head of Commercial Operations",
    image: "/tetrisdb-team-romeu-carpinteiro.jpg",
  },
  {
    heading: "Silvia Aranda",
    paragraph: "Sustainability Client Solutions Director,EMEA",
    image: "/tetrisdb-team-silvia-aranda.jpg",
  },
  {
    heading: "Iota Bergvall",
    paragraph: "People Partner, EMEA",
    image: "/tetrisdb-team-iota-bergvall.jpg",
  },
  {
    heading: "Yolanda Fernandez",
    paragraph: "Chief Financial Officer",
    image: "/tetrisdb-team-mathias-grossman.jpg",
  },
];

const GlobbalTeam = () => {
  return (
    <div className=" md:px-14 px-5 bg-black">
        <div className=" top-0 left-0 right-0  py-6 flex justify-left  items-center text-white text-xs font-bold pl-">
        <a href="/" className="mx-1 hover:underline">
          Home
        </a>
        <span className="">{">>"}</span>
        <a href="/about" className="mx-1 hover:underline">
          About Us
        </a>
        <span className="">{">>"}</span>
        <span className="mx-1">Meet The Team</span>
      </div>


      <div className="text-white text-center">
        <h2 className="text-4xl font-extrabold pt-14">Meet the team</h2>
        <p className="mt-6 text-base">
          Our global leadership team is a creative and experienced group,
          passionate about delivering inspiring <br /> spaces for people and
          businesses.
        </p>
      </div>
      {/* team members  */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 md:gap-6 space-y-16 mt-14 pb-12">
        {Team.map((team) => (
          <div key={team.heading} className="relative overflow-hidden">
            <Image
              className="w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-110"
              src={team.image}
              alt={team.heading}
              width={300}
              height={210}
            />
            <div className="text-white px-8">
              <h2 className="font-extrabold text-3xl mt-7">{team.heading}</h2>
              <p className="text-lg mt-6">{team.paragraph}</p>
            </div>
          </div>
        ))}

        <div className="relative">
          <Image
            className="w-full h-[400px] object-cover transition-transform duration-300 transform hover:scale-105"
            src={texture}
            alt="texxture"
            width={300}
            height={210}
          />
          <div className="absolute md:top-[40%] top-[50%] left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"transparent"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
                Where to find us
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlobbalTeam;
