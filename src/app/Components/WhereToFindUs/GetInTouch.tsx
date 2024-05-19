"use client";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Stack, Button } from "@chakra-ui/react";

const countries = [
  {
    name: "Pakistan",
    code: "pk",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Geneva",
    address: "Rue Docteur-Alfred-Vincent 5, 1201 Geneva, Switzerland",
    phone: "+41 22 750 06 80*",
  },
  {
    name: "Belgium",
    code: "bg",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Brussels",
    address: "Avenue Marnix 23, 1000 Brussels, Belgium",
    phone: "+41 22 750 06 80*",
  },
  {
    name: "Dubai",
    code: "db",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Geneva",
    address: "Rue Docteur-Alfred-Vincent 5, 1201 Geneva, Switzerland",
    phone: "+41 22 750 06 80*",
  },
  {
    name: "France",
    code: "france",
    heading: "Get in touch with our team to talk about your projects",
    location: "Tétris Geneva",
    address: "Rue Docteur-Alfred-Vincent 5, 1201 Geneva, Switzerland",
    phone: "+41 22 750 06 80*",
  },
];

const GetInTouch = () => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleCountryChange = (country: any) => {
    setSelectedCountry(country);
  };

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

      <div className="">
        <div className="relative w-full ">
          <div className="">
            {/* <img
            // src={selectedCountry.flag}
            // alt={selectedCountry.name}
            className="w-8 h-8 mr-4"
          /> */}
            {/* <h2 className="text-lg font-medium text-gray-900">{selectedCountry.name}</h2> */}
          </div>
          <div className="absolute left-0 top-0">
            <select
              value={selectedCountry.code}
              onChange={(e) =>
                handleCountryChange(
                  countries.find((country) => country.code === e.target.value)
                )
              }
              className="block appearance-none  bg-black  text-white  text-5xl font-extrabold py-2 w-full pr-8 mt-12"
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>

            <span className="text-3xl absolute -right-2 text-white top-16">
              {selectedCountry.code && <RiArrowDropDownLine />}
            </span>
          </div>
        </div>
        <div className="md:ml-[830px] md:pt-[200px] text-white mr-20">
          <p className="font-bold text-3xl">{selectedCountry.heading}</p>
          <p className="font-medium mt-4 text-base">
            {selectedCountry.location}
          </p>
          <p className="text-base font-medium">{selectedCountry.address}</p>
          <p className="text-base mt-5 underline underline-offset-1">
            {selectedCountry.phone}
          </p>
          <div className="absolute md:right-64 mt-16 transform -translate-x-1/2 -translate-y-1/2">
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
                Contact Us
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
