"use client";
import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import { Box, Text, Button, Stack, Heading, Image } from "@chakra-ui/react";

const CaptionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);

  // Settings for the slider
  const settings = {
    dots: true,
    arrows: false,
    fade: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Function to handle automatic sliding
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === cards.length - 1 ? 0 : prevSlide + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      position="relative"
      height={{ base: 750, md: 500, lg: 500 }}
      width="full"
      overflow={"hidden"}
    >
      {/* Slider */}
      <Slider {...settings} ref={sliderRef}>
        {cards.map((card, index) => (
          <Box key={index} position="relative" height={{base:"auto", lg:"500px"}}>
            <Box height="100%" width="100%" overflow="hidden">
              <Image
                src={card.image}
                alt={card.title}
                // objectFit="cover"
                height="100%"
                width="100%"
              />
            </Box>
            <Box
              position={{ base: "relative", md: "absolute", lg: "absolute" }}
              left={0}
              top={0}
              zIndex={1}
              width={{ base: "100%", md: "40%", lg: "40%" }}
              height="100%"
              background={{
                base: "black",
                md: "rgba(0, 0, 0, 0.7)",
                lg: "rgba(0, 0, 0, 0.7)",
              }}
            >
              <Stack
                spacing={6}
                direction="column"
                alignItems="start"
                justifyContent="left"
                height="100%"
                padding={6}
                color="white"
              >
                <Box
                  borderRadius={0}
                  width={24}
                  bg={"rgba(0, 0, 0, 0.5)"} // 50% transparency black background
                  color={"white"}
                  textAlign={"center"}
                  className="m-4"
                  lineHeight={"36px"} // Adjust as needed for vertical alignment
                >
                  Project
                </Box>
                <Heading fontSize={{ base: "xl", md: "4xl", lg: "5xl" }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: "base", md: "md", lg: "lg" }}>
                  {card.text}
                </Text>
                <Button
                  borderRadius={0}
                  width={{ base: "auto", lg: 40 }}
                  bg={"transparent"}
                  textColor={"white"}
                  borderWidth={1}
                  borderColor="white"
                  _hover={{ borderColor: "#C3C32F", backgroundColor: "#C3C32F" }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </Box>
        ))}
      </Slider>
      {/* Navigation Dots */}
      <Box
        position="absolute"
        bottom="4"
        left="50%"
        transform="translateX(-50%)"
        zIndex="1"
        display="flex"
      >
        {cards.map((_, index) => (
          <Box
            key={index}
            width="8px"
            height="8px"
            bg={index === currentSlide ? "blue.500" : "gray.300"}
            borderRadius="full"
            marginX="2"
            cursor="pointer"
            onClick={() => {
              sliderRef.current?.slickGoTo(index);
              setCurrentSlide(index); // Update the currentSlide state to match the clicked slide index
            }}
          ></Box>
        ))}
      </Box>
    </Box>
  );
};

export default CaptionCarousel;

const cards = [
  {
    title: "Empirical Construction",
    text: "We specialize in designing and constructing your dream home and providing innovative building solutions for your workspace ",
    image: "/One.png",
  },
  {
    title: "Empirical Construction",
    text: "Transforming visions into reality, we specialize in designing and building bespoke homes and modern workspaces. Our expert team delivers innovative construction solutions tailored to your unique needs.",
    image: "/Two.png",
  },
  {
    title: "Empirical Construction",
    text: "Transforming visions into reality, we specialize in designing and building bespoke homes and modern workspaces. Our expert team delivers innovative construction solutions tailored to your unique needs.",
    image: "/Three.png",
  },
  {
    title: "Empirical Construction",
    text: "We specialize in designing and constructing your dream home and providing innovative building solutions for your workspace ",
    image: "/Four.png",
  },
];









































// 'use client'
// import React, { useState, useEffect, useRef } from 'react';
// import Slider from 'react-slick';
// import { Box, Text, Button, Stack, Heading, Image } from '@chakra-ui/react';

// const CaptionCarousel = () => {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const sliderRef = useRef<Slider>(null);

//     // Settings for the slider
//     const settings = {
//         dots: true,
//         arrows: false,
//         fade: false,
//         infinite: true,
//         autoplay: true,
//         speed: 500,
//         autoplaySpeed: 5000,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//     };

//     // Function to handle automatic sliding
//     useEffect(() => {
//         const interval = setInterval(() => {
//             setCurrentSlide((prevSlide) => (prevSlide === cards.length - 1 ? 0 : prevSlide + 1));
//         }, 5000); // Change slide every 5 seconds
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <Box position="relative" height={500} width="full" overflow="hidden">
//             {/* Slider */}
//             <Slider {...settings} ref={sliderRef}>
//                 {cards.map((card, index) => (
//                     <Box key={index} position="relative" height="500px">
//                         <Box height="100%" width="100%" overflow="hidden">
//                             <Image
//                                 src={card.image}
//                                 alt={card.title}
//                                 // objectFit="cover"
//                                 height="100%"
//                                 width="100%"
//                             />
//                         </Box>
//                         <Box
//                             position="absolute"
//                             left={0}
//                             top={0}
//                             zIndex={1}
//                             width="40%"
//                             height="100%"
//                             background="rgba(0, 0, 0, 0.7)"
//                         >
//                             <Stack
//                                 spacing={6}
//                                 direction="column"
//                                 alignItems="start"
//                                 justifyContent="left"
//                                 height="100%"
//                                 padding={6}
//                                 color="white"
//                             >
//                                 <Box
//                                     borderRadius={0}
//                                     width={24}
//                                     bg={'rgba(0, 0, 0, 0.5)'} // 50% transparency black background
//                                     color={'white'}
//                                     textAlign={'center'}
//                                     lineHeight={'36px'} // Adjust as needed for vertical alignment
//                                 >
//                                     Project
//                                 </Box>
//                                 <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>{card.title}</Heading>
//                                 <Text fontSize={{ base: 'md', lg: 'lg' }}>{card.text}</Text>
//                                 <Button
//                                     borderRadius={0}
//                                     width={40}
//                                     bg={'transparent'}
//                                     textColor={'white'}
//                                     borderWidth={1}
//                                     borderColor="white"
//                                     _hover={{ borderColor: 'red', backgroundColor: 'red' }}
//                                 >
//                                     Learn More
//                                 </Button>
//                             </Stack>
//                         </Box>
//                     </Box>
//                 ))}
//             </Slider>
//             {/* Navigation Dots */}
//             <Box position="absolute" bottom="4" left="50%" transform="translateX(-50%)" zIndex="1" display="flex">
//                 {cards.map((_, index) => (
//                     <Box
//                         key={index}
//                         width="8px"
//                         height="8px"
//                         bg={index === currentSlide ? 'blue.500' : 'gray.300'}
//                         borderRadius="full"
//                         marginX="2"
//                         cursor="pointer"
//                         onClick={() => {
//                             sliderRef.current?.slickGoTo(index);
//                             setCurrentSlide(index); // Update the currentSlide state to match the clicked slide index
//                         }}
//                     ></Box>
//                 ))}
//             </Box>
//         </Box>
//     );
// };

// export default CaptionCarousel;

// const cards = [
//     {
//         title: 'Design Projects 1',
//         text:
//             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//         image: '/One.png',
//     },
//     {
//         title: 'Design Projects 2',
//         text:
//             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//         image: '/Two.png',
//     },
//     {
//         title: 'Design Projects 3',
//         text:
//             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//         image: '/Three.png',
//     },
//     {
//         title: 'Design Projects 3',
//         text:
//             "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
//         image: '/Four.png',
//     },
// ];

