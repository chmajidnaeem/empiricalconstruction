import React from "react";
import { Button } from "@chakra-ui/react";

const GetInTouch = () => {
  return (
    <div>
      <div
        className="bg-cover bg-center h-[340px] items-center flex flex-col pt-16   "
        style={{ backgroundImage: `url('/texture-cta-alt.jpg')` }}
>
        <div className=" flex flex-col pt-16">
          <div>
            <h1 className="text-6xl font-bold flex flex-col">
              <span className="text-5xl text-center font-extrabold text-white">
              Let us help you redefine <br /> your space 
              </span>
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              // Set height to 100% of the viewport height
            }}
          >
            <div className="m-8">
              <Button
                borderRadius={0}
                width={40}
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

export default GetInTouch;
