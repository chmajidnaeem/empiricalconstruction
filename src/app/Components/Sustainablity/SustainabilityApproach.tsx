"use client";
import React from "react";
import Image from "next/image";
import { useState } from "react";

const communities = [
  {
    name: "Climate Action",
    image: "/sustainability-1-climate-action.jpg",
    paragraph:
      "We support action that accelerates the transition to net-zero, enhances performance and mitigates risks.",
  },
  {
    name: "Healthy Spaces",
    image: "/sustainability-2-healthy-spaces.jpg",
    paragraph:
      "We create safe and healthy spaces that promote productivity, wellbeing and sustainability.",
  },
  {
    name: "Inclusive Places",
    image: "/sustainability-2-healthy-spaces.jpg",
    paragraph:
      "We provide fair and inclusive places that support equal opportunities and thriving communities.",
  },
];

const SustainabilityApproach = () => {
  return (
    <div className=" md:px-14 px-5 bg-black">
      <div className="text-white text-center">
        <h2 className="text-3xl font-extrabold pt-14">
          How do we approach sustainability?
        </h2>
        <p className="mt-6 text-base">
          Discover how our purpose-driven global sustainability program delivers
          impact on climate action <br />
          for sustainable real estate, healthy spaces for all people, and
          inclusive places for thriving communities.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {communities.map((community) => (
          <div key={community.name} className="relative overflow-hidden">
            <Image
              className="w-full h-[250px] object-cover transition-transform duration-300 transform hover:scale-110"
              src={community.image}
              alt={community.name}
              width={500}
              height={300}
            />
            <div className="absolute bottom-24 left-0 py-4 px-5">
              <h2 className="text-white font-bold text-2xl">{community.name}</h2>
            </div>
            <div className="text-white text-lg mt-4 ">
              <p>{community.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SustainabilityApproach;
