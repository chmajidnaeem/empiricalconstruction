"use client";
import { useState } from "react";
import Image from "next/image";
import Barcelona from "../../../../public/tetris-db-travelperk-spain-barcelona.jpg";
/* styles.css */
import "./animation.css";

const GlobalOfficePr = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);

  return (
    <div className=" justify-between md:px-16 px-5 bg-[#020510] pb-12 gap-8 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 grid">

      
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered1(true)}
        onMouseLeave={() => setIsHovered1(false)}
      >
        <Image
          className="w-[400px] h-[280px]"
          src="/tetris-db-travelperk-spain-barcelona.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
         {isHovered1 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">TravelPerk</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul>
            </div>

            <p className="text-white mt-5 font-medium text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsam temporibus pariatur aliquid odio, ut distinctio deserunt
              atque similique itaque illo.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
</div>




      <div
        className="relative"
        onMouseEnter={() => setIsHovered2(true)}
        onMouseLeave={() => setIsHovered2(false)}
      >
        <Image
          className="w-[400px] h-[280px]"
          src="/tetris-db-jll-uk-london.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered2 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">TravelPerk</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul>
            </div>

            <p className="text-white mt-5 font-medium text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsam temporibus pariatur aliquid odio, ut distinctio deserunt
              atque similique itaque illo.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>

      <div
        className="relative"
        onMouseEnter={() => setIsHovered3(true)}
        onMouseLeave={() => setIsHovered3(false)}
      >
        <Image
          className="w-[400px] h-[280px]"
          src="/tetris-db-jll-south-africa.jpg"
          alt="Your Image"
          width={350}
          height={200}
        />
        {isHovered3 && (
          <div className="absolute bottom-0 left-0 w-full h-full bg-black bg-opacity-50 px-6 py-8 transition-transform duration-500 transform translate-y-0 animate-slideIn">
            <h2 className="text-white text-3xl font-extrabold">TravelPerk</h2>

            <div className="text-white flex font-medium text-base mt-4">
              <p>Barcelona, Spain</p>
              <ul>
                <li className="list-disc ml-6">Office</li>
              </ul>
            </div>

            <p className="text-white mt-5 font-medium text-base">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              ipsam temporibus pariatur aliquid odio, ut distinctio deserunt
              atque similique itaque illo.
              <p className="mt-auto text-white font-bold text-lg">
                Discover <span className="text-red-500 text-2xl">&#8594;</span>
              </p>
            </p>
          </div>
        )}
      </div>



    </div>
  );
};

export default GlobalOfficePr;
