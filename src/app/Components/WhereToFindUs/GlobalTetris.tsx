"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { RiSearchLine, RiCloseLine } from "react-icons/ri";

const countries = [
  { name: "United Kingdom", image: "/tetrisdb-office-uk.jpg" },
  { name: "France", image: "/tetrisdb-office-france.jpg" },
  { name: "Belgium", image: "/tetris-belgium-team-2024.jpg" },
  { name: "Netherlands", image: "/tetrisdb-office-netherlands-2.jpg" },
  { name: "Luxembourg", image: "/tetrisdb-office-luxembourg-2022.jpg" },
  { name: "Switzerland", image: "/tetrisdb-office-switzerland.jpg" },
  { name: "Germany", image: "/tetrisdb-office-germany.jpg" },
  { name: "Poland", image: "/tetris-poland-10-22.jpg" },
  { name: "Italy", image: "/tetrisdb-office-italy.jpg" },
  { name: "Spain", image: "/tetrisdb-office-spain.jpg" },
  { name: "Portugal", image: "/tetrisdb-office-portugal.jpg" },
  { name: "Africa", image: "/tetris-db-team-south-africa-scaled.jpg" },
  { name: "Brazil", image: "/tetrisdb-office-brazil.jpg" },
  { name: "Dubai", image: "/tetrisdb-office-dubai.jpg" },
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
    <div className="bg-black md:px-20 px-5">
      <h2 className="md:text-5xl text-3xl text-white font-extrabold pt-12 bg-[#020510]">
        Tétris around the world
      </h2>
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
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {countries.map((country) => (
          <div key={country.name} className="relative overflow-hidden">
            <Image
              className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-110"
              src={country.image}
              alt={country.name}
              width={500}
              height={300}
            />
            <div className="absolute bottom-0 left-0 py-4 px-5">
              <h2 className="text-white font-bold text-2xl">{country.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GlobalTetris;
