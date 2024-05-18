import React from "react";
import Image from "next/image";

const News = [
  {
    name: "Tétris has obtained the 2022 EcoVadis Platinum level for its performance on sustainability in the last twelve months and improves its score to 79/100.",
    image: "/tetris-db-news-.jpg",
    date: "September 3, 2022.",
  },
  {
    name: "Designing for neurodiversity: workplaces built for inclusion",
    image: "/emea-tetris-db-.jpg",
    date: "September 2, 2022.",
  },
  {
    name: "How design can improve mental, physical and social wellbeing in the workplace",
    image: "/tetris-db-firmenich-south-africa-.jpg",
    date: "September 4, 2022.",
  },
];

const LatestNews = () => {
  return (
    <div className=" md:px-14 px-5 bg-black">
      <h2 className="text-white md:text-5xl text-3xl font-extrabold pt-8  left-0">
      Latest News
      </h2>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-14 pb-12">
        {News.map((news) => (
          <div key={news.name} className="relative overflow-hidden">
            <Image
              className="w-full h-[250px] object-cover transition-transform duration-300 transform hover:scale-110"
              src={news.image}
              alt={news.name}
              width={500}
              height={300}
            />
            <div className=" bottom-24 left-0 py-4 ">
              <h2 className="text-white font-bold text-2xl">{news.name}</h2>
              <p className="text-gray-300 font-bold text-sm mt-2">
                {news.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNews;
