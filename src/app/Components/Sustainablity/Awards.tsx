import React from "react";
import Image from "next/image";

const Cases = [
  {
    name: "World's Most Ethical Companies",
    image: "/sustainability-logo-most-ethical-.jpg",
   Paragraph: "A World's Most Ethical Company in 2021 for the 14th year running, as a subsidiary of JLL."
},
{
    name: "Healthy Spaces",
    image: "/sustainability-logo-united-.jpg",
    Paragraph: "Part of the international commitment to take action on human rights, labour standards, the environment and the fight against corruption."
  },
  {
    name: "Inclusive Places",
    image: "/sustainability-logo-ecovadis-.jpg",
    Paragraph: "Ensuring the transparency of our sustainable development and CSR strategy rating."
  },
];

const Awards = () => {
  return (
    <div className=" md:px-14 px-5 bg-black">
        <h2 className="text-white md:text-4xl text-3xl font-extrabold pt-16 left-0 ">
        Our commitments and awards
        </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {Cases.map((cases) => (
          <div key={cases.name} className="relative">
            <Image
              className="w-full h-[150px] object-cover transition-transform duration-300 transform hover:scale-105"
              src={cases.image}
              alt={cases.name}
              width={500}
              height={300}
            />
            <div className=" bottom-24 left-0 py-4 ">
              <h2 className="text-white font-bold text-2xl">{cases.name}</h2>
              <p className="text-gray-300 font-bold text-sm mt-2">{cases.Paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
