"use client";
import React from "react";
import ReadMore from './ReadMore'
import Qoutes from './Qoutes'
import Otherservices from './OtherServices'
import ExploreMore from './ExploreMore'
import { Box, Image } from '@chakra-ui/react';
import { Stack, Button } from "@chakra-ui/react";
import { useState, useEffect } from 'react';

const HeroSection = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = ['data:image/jpeg;base64,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'
    , 'data:image/jpeg;base64,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']; // Replace with your image URLs
    const imageCount = images.length;
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
      }, 500); // Change image every 0.5 seconds
  
      return () => clearInterval(interval);
    }, [imageCount]);

    
  return (

    <div className=' pt-24 bg-black  w-full overflow-hidden'>
   <div
        className="relative bg-cover bg-center h-96" style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.tetris-db.com/wp-content/uploads/2022/05/tetrisdb-illus-services-furniture-v3.jpg)' }}>
     <div className="absolute inset-0 z-10 flex flex-col pl-4 sm:pl-12 pt-2">
          <p className="text-white text-sm font-bold pb-8 sm:pb-16">Home » Services » Furniture solutions</p>
        
          <Box
            borderRadius={0}
            width={{ base: "full", sm: "44" }} // Adjust width based on screen size
            bg={"rgba(0, 0, 0, 0.5)"} // 50% transparency black background
            color={"white"}
            textAlign={"center"}
            lineHeight={"36px"} // Adjust as needed for vertical alignment
            mt={4}
          >
       Furniture solutions
        </Box>
        
        <h1 className="text-4xl sm:text-5xl font-bold text-white mt-4 sm:mt-8">Furniture shapes the<br className="hidden sm:inline" />experience of a space</h1>
      </div>
    </div>










    <div className="lg:px-36 md:px-12 px-5 bg-black mt-24 grid md:grid-cols-2 grid-cols-1 gap-14 md:pb-28 pb-10 ">
        {/* left side  */}
        <div className="">
          <Image
            className=" w-full "
            height={460}
            src={'https://www.tetris-db.com/wp-content/uploads/2022/04/sanofi-coworking-and-collaboration-lounge-web-tetris.jpg'}
            alt="Image description"
          />
        </div>
        {/* right side  */}
        <div className="text-white  text-xl ">
          <h2 className="text-2xl font-extrabold">
          Through design, layout and expert project coordination, our furniture solutions team create beautiful, functional environments that bring your space to life.
          </h2>
          <p className="md:mt-5 mt-3 text-sm">
          Physical space profoundly influences how people work, think and live. Our workplace consultancy service helps us design spaces that align with your company’s unique culture and business needs.
          </p>
          <p className="md:mt-5 mt-3 text-sm">
          In our consultancy process, we learn how your organisation operates and what your people require. We test layouts and run feasibility studies to explore how your physical space can be optimised for your business ambitions.
          </p>
          <p className="md:mt-5 mt-3 text-sm">
          These insights are the root of a holistic design process that draws on data-driven sector research and our deep sustainability expertise. The result is truly bespoke design that inspires and motivates.
          </p>
         
          <div className="mt-8">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"black"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
               Contact Us
              </Button>
            </Stack>
          </div>
          
        </div>
      </div>

      



<div>


<div className="text-white w-full md:w-2/3 pl-4 md:pl-24 text-xl">
          <h2 className="text-3xl md:text-5xl font-extrabold">
          Our furniture services
at every stage of your fit-out
          </h2>
          <p className="md:mt-5 mt-3 text-sm">
          Great space design aligns with what your business needs.
          </p>
          <p className="md:mt-5 mt-3 text-sm">
          We design to boost wellbeing and productivity, inspiration and collaboration. We examine how space planning, ergonomic principles, lighting and acoustics can craft environments that support your people. Our sustainable approach means we prioritise flexibility in design so a space can adapt to your future business needs.


          </p>
          <p className="md:mt-5 mt-3 text-sm">
          From materials and integrated technologies to the layout of furniture, we curate every detail that makes a space functional, beautiful and reflective of your brand.
          </p>
         
          <p className="md:mt-5 mt-3 text-sm">
          Space design transcends visual appeal. It’s a foundation for how your space engages people.
          </p>

          
        </div>
</div>


<div className="flex justify-between text-white p-4 md:p-24">
      <div className="w-full md:w-1/3 mr-4 md:mr-8">
        <h2 className="text-3xl font-bold">Tailored Workplace <br/> strategy</h2>
        <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra mauris id dolor feugiat, eu placerat lacus sollicitudin.</p>
      </div>
      <div className="w-1/3 mr-8">
        <h2 className="text-3xl font-bold">Tailored Workplace <br/> strategy</h2>
        <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra mauris id dolor feugiat, eu placerat lacus sollicitudin.</p>
      </div>
      <div className="w-1/3 mr-8">
        <h2 className="text-3xl font-bold">Tailored Workplace <br/> strategy</h2>
        <p className="text-sm mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra mauris id dolor feugiat, eu placerat lacus sollicitudin.</p>
      </div>
    </div>
















    <div className="relative flex justify-center items-center h-full py-8 mt-8">
        
        {/* Background image with blur effect */}
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://www.tetris-db.com/wp-content/uploads/2022/03/tetrisdb-illus-texture-cta-23.jpg')`, filter: 'blur(4px)' }}></div>
        <div className="flex flex-col">
      <h1 className="flex z-10 pb-12 justify-center sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white items-center">Why choose Tétris as your furniture solutions partner?</h1>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col sm:flex sm:flex-col lg:flex-row md:flex-col justify-center items-center w-full">
            <div className="sm:pl-24 pl-16 w-full lg:w-1/2 text-lg flex flex-col items-start mx-4 pr-12">
              <div className="flex pb-4">
                <span className="text-red-500 pt-2 mr-2">/</span>
                <p className=" mt-2 text-white">
              <span className="font-bold">Digital innovation:</span>We identify your specific needs, culture and workflows before each project</p>
             
             </div>
             <div className="flex pb-4">
          <span className="text-red-500 pt-2 mr-2">/</span>
          <p className=" mt-2 text-white">
              <span className="font-bold">Bespoke design:</span>We identify your specific needs, culture and workflows before each project</p>
             
             </div>
             <div className="flex pb-4">
          <span className="text-red-500 pt-2 mr-2">/</span>
          <p className=" mt-2 text-white">
              <span className="font-bold">Comprehensive analysis:</span>We identify your specific needs, culture and workflows before each project</p>
             
             </div>
             <div className="flex pb-4">
          <span className="text-red-500 pt-2 mr-2">/</span>
          <p className=" mt-2 text-white">
              <span className="font-bold">Comprehensive analysis:</span>We identify your specific needs, culture and workflows before each project</p>
             
             </div>
             <div className="flex">
          <span className="text-red-500 pt-2 mr-2">/</span>
          <p className=" mt-2 text-white">
              <span className="font-bold">Comprehensive analysis:</span>We identify your specific needs, culture and workflows before each project</p>
             
             </div>
        </div>
        <div className="flex flex-col w-5/6 sm:w-1/2 lg:w-1/2 mt-4 sm:mt-0">
              <img
                src={images[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className="h-96 w-full object-cover"
                width={500}
              />
            </div>
      </div>
    </div>

    </div>





<ExploreMore/>





{/* 
<div className="px-8">
<div className=" h-80 bg-cover bg-center items-center flex flex-col pt-12 mt-12 pl-12" style={{ backgroundImage: `url(${'https://www.tetris-db.com/wp-content/uploads/2022/10/tetrisdb-illus-texture-cta-35.jpg'})` }}>

      
        <div className=" flex flex-col sm:flex-row">
          <div>
            <h1 className="text-6xl font-bold flex flex-col">
              <span className="text-3xl font-extrabold text-white">
             How our furniture solutions can tranform spaces
              </span>
              <span className="text-xl font-thin pt-4 text-white">
              Our EMEA Fit-Out Cost Guide is a powerful tool to better understand the real cost of fitting out office space across the EMEA region, as well as the trends impacting fit-out costs across 25 different EMEA markets.
              </span>
              <span className="text-lg pt-4 font-extrabold text-white">
              Research | 2024
              </span>
            </h1>
          </div>
          <div className='ml-0 sm:ml-60 mt-20 m-8'>
            <Button
              borderRadius={0}
              width={40}
              bg={"transparent"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
            >
              Download
            </Button>
          </div>
        </div>
      </div>

      </div> */}






    <div className="lg:px-36 md:px-12 px-5 bg-black mt-24 grid md:grid-cols-2 grid-cols-1 gap-14 md:pb-28 pb-10 ">
        {/* left side  */}
      
        {/* right side  */}
        <div className="text-white mt-8 ">
          <h2 className="text-4xl font-extrabold">
          How our furniture solutions can tranform spaces
          </h2>
          <p className="md:mt-5 mt-3 text-sm">
          Physical space profoundly influences how people work, think and live. Our workplace consultancy service helps us design spaces that align with your company’s unique culture and business needs.
          </p>
         
         
          <div className="mt-8">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"black"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
               See More Case Studios
              </Button>
            </Stack>
          </div>
          
        </div>
        <div className="relative">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <Image
        className="w-full"
        height={350}
        src={'https://www.tetris-db.com/wp-content/uploads/2023/10/tetris-db-symbio-france-35514-1.jpg'}
        alt="Image description"
      />
      <div className="absolute bottom-0 left-0 text-white p-2">
        <h2 className="text-lg font-semibold">Startway-Multiburo</h2>
      </div>
    </div>
      </div>









      <div className="px-8">
        <div className="flex sm:justify-between justify-center items-center flex-col sm:flex-row">
          <div className="relative sm:w-1/3 w-5/6 mt-4 mx-4">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <Image
              className="w-full h-64 object-cover"
              src={
                "https://www.tetris-db.com/wp-content/uploads/2023/04/tetris-db-travelperk-spain-barcelona-33464-01.jpg"
              }
              alt="Image description"
            />
            <div className="absolute bottom-0 left-0 text-white p-2">
              <h2 className="text-lg font-semibold">Startway-Multiburo</h2>
            </div>
          </div>
          <div className="relative sm:w-1/3 w-5/6 mt-4 mx-4">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <Image
              className="w-full h-64 object-cover"
              src={
                "https://www.tetris-db.com/wp-content/uploads/2022/05/tetris-db-jll-uk-london-waterstreet-27755-11.jpg"
              }
              alt="Image description"
            />
            <div className="absolute bottom-0 left-0 text-white p-2">
              <h2 className="text-lg font-semibold">Startway-Multiburo</h2>
            </div>
          </div>
          <div className="relative sm:w-1/3 w-5/6 mt-4 mx-4">
            <div className="absolute inset-0 bg-black opacity-30"></div>
            <Image
              className="w-full h-64 object-cover"
              src={
                "https://www.tetris-db.com/wp-content/uploads/2022/11/tetris-db-jll-south-africa-31979-01.jpg"
              }
              alt="Image description"
            />
            <div className="absolute bottom-0 left-0 text-white p-2">
              <h2 className="text-lg font-semibold">Startway-Multiburo</h2>
            </div>
          </div>
        </div>
      </div>






<Qoutes/>









    <div className="mx-8 mt-24">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{ backgroundImage: `url(${'https://www.tetris-db.com/wp-content/uploads/2021/05/tetrisdb-illus-texture-cta-2.jpg'})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Black overlay covering the image */}
        
        <div className="flex flex-col items-center justify-center absolute inset-0">
          <h1 className="text-5xl font-bold text-white text-center max-w-3xl">
          Our furniture solutions can reshape your space
          </h1>
          
          <div className="mt-8">
            <Button
              borderRadius={0}
              width={40}
              bg={"transparent"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
            >
              Build with us
            </Button>
          </div>
        </div>
      </div>
    </div>










<ReadMore/>


<Otherservices/>

    </div>
  );
}

export default HeroSection;
