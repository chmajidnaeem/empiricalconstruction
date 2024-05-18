import React from "react";
import Image from "next/image";
import { Stack, Button } from "@chakra-ui/react";

const Cases = [
  {
    name: "Climate Action",
    image: "/tetris-db-reckitt-united-kingdom-slough.jpg",
    location: "Slough, United Kingdom . Office",
  },
  {
    name: "Healthy Spaces",
    image: "/tetrs-db_roku_amsterdam_netherlands.jpg",
    location: "Amsterdam, Netherlands . Office",
  },
  {
    name: "Inclusive Places",
    image: "/tetris-db-firmenich-south-africa-.jpg",
    location: "Johannesburg, South Africa . Office",
  },
];

const CaseStudies = () => {
  return (
    <div className=" md:px-14 px-5 bg-black">
      <div className=" justify-between flex">
        <h2 className="text-white md:text-5xl text-3xl font-extrabold pt-8  left-0">
          Case Studies
        </h2>
        <div className="mt-8  right-0">
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
              View All
            </Button>
          </Stack>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {Cases.map((cases) => (
          <div key={cases.name} className="relative overflow-hidden">
            <Image
              className="w-full h-[250px] object-cover transition-transform duration-300 transform hover:scale-110"
              src={cases.image}
              alt={cases.name}
              width={500}
              height={300}
            />
            <div className=" bottom-24 left-0 py-4 px-5">
              <h2 className="text-white font-bold text-2xl">{cases.name}</h2>
              <p className="text-gray-400 font-bold text-base mt-2">{cases.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CaseStudies;
