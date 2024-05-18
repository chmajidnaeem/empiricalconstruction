import React from "react";
import Services from "./Services";
import { Button } from "@chakra-ui/react";
import GlobalTetris from "./GlobalTetris";
import Carousel from "./Carousel";
const page = () => {
  return (
    <div className="bg-black pt-24">
      <h1 className="flex justify-center items-center text-5xl text-white pt-12 pb-12 font-bold">
        {" "}
        Insights & News
      </h1>

      <Carousel />
      <GlobalTetris />
      {/* <Services /> */}

     
      <div className="mx-8 pb-24">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{ backgroundImage: `url(${'https://www.tetris-db.com/wp-content/uploads/2021/04/cta.jpg'})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay covering the image */}
        
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <h1 className="text-6xl font-bold text-white text-center max-w-3xl">
          We would love to hear
from you 
          </h1>
          
          <div className="mt-8">
            <Button
              borderRadius={0}
              width={48}
              bg={"transparent"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default page;
