"use client";
import React from "react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";

const countries = [
  { name: "Tétris wins seven internationally recognised health and safety accolades from RoSPA", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/05/tetris-db-news-rospa-big-740x460.jpg" },
  { name: "Future foundations: Driving long-term asset value through sustainable design and fit-out ", date:"March 7, 2024", image: "/tetrisdb-office-france.jpg" },
  { name: "Fit-out Cost Guide 2024", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/04/tetris-db-news-fit-out-cost-guide-2024-big-740x460.jpg" },
  { name: "Double victory for Tétris at the French Worknight Awards: Gold Winner of the Fit-out category and winner of the Public Prize", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/worknight24_152_carole_desheulles_web-740x460.jpg" },
  { name: "Discover the future of workplace design: Download our essential 2024 trends report", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2023/04/tetris-db-travelperk-spain-barcelona-33464-01-740x460.jpg" },
  { name: "Meet Tétris at UPCYCLE: The future of work reimagined", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/tetris-website-artwork-banners-1170-x-380-01-scaled-740x460.jpg" },
  { name: "Powerhouses of the industry: A spotlight on women in real estate", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/idw-tetris-740x460.jpg" },
  { name: "Join us at MIPIM in Cannes", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/01/tetrisdb-news-mipim2024-large-en-740x460.jpg" },
  { name: "Tétris is awarded the EcoVadis platinum level for the second consecutive year", date:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/01/tetris-news-ecovadis-2023-large-740x460.jpg" },
  // { name: "Spain", image: "/tetrisdb-office-spain.jpg" },
  // { name: "Portugal", image: "/tetrisdb-office-portugal.jpg" },
  // { name: "Africa", image: "/tetris-db-team-south-africa-scaled.jpg" },
  // { name: "Brazil", image: "/tetrisdb-office-brazil.jpg" },
  // { name: "Dubai", image: "/tetrisdb-office-dubai.jpg" },
];

const GlobalTetris = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e: any) => {
    setSearchValue(e.target.value);
  };

  const handleClear = () => {
    setSearchValue("");
  };

  return (
    <div className="bg-black  md:px-20 px-5 ">
      {/* <h2 className="md:text-5xl text-3xl text-white font-extrabold pt-12 bg-[#020510]">
        Tétris around the world
      </h2> */}
      <div className="relative  mt-14   md:w-[570px] w-full">
        <input
          type="text"
          className="md:w-[570px] w-full py-3 pl-5 pr-12 border text-white bg-[#1f2429] border-none"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
        />
        {searchValue && (
          <button
            className="absolute inset-y-0 right-0 flex items-center px-3 text-white "
            onClick={handleClear}
          >
            <RiCloseLine />
          </button>
        )}
        <div className="absolute inset-y-0 right-2 flex items-center pl-3 pointer-events-none">
          <RiSearchLine className="h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* countries list  */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 h-full mt-14 pb-12">
        {countries.map((country) => (
          <div key={country.name} className="relative h-full" >
            <Image
              className=" object-cover transition-transform duration-300 transform hover:scale-105"
              src={country.image}
              alt={country.name}
              width={400}
              height={300}
            />
            <div className=" py-4 px-5">
              <h2 className="text-white font-bold text-2xl">{country.name}</h2>
              <p className="text-white pt-4 text-sm">{country.date}</p>
            </div>
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default GlobalTetris;
