import React from 'react'
import { Button } from '@chakra-ui/react'
const Services = () => {
  return (
    <div className='bg-black'>
      <div
        className="h-60 bg-cover bg-center items-center flex flex-col pt-12 mt-12 pl-12"
        style={{
          backgroundImage: `url(${"https://www.tetris-db.com/wp-content/uploads/2023/04/tetris-db-travelperk-spain-barcelona-33464-21.jpg"})`,
        }}
      >
        <div className=" flex flex-col sm:flex-row">
          <div>
            <h1 className="text-6xl font-bold flex flex-col text-white">
              <span className="text-3xl font-extrabold">Design and Build</span>
              <span className="text-2xl font-thin pt-4">
                Save time and money with our turnkey approach
              </span>
            </h1>
          </div>
          <div className="ml-0 sm:ml-10 mt-8 sm:mt-0">
            <Button
              borderRadius={0}
              width={40}
              bg={"transparent"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div> 
    </div>
  )
}

export default Services
