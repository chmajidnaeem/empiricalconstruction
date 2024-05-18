"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
} from "@chakra-ui/react";
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";
// And react-slick as our Carousel Lib
import Slider from "react-slick";
import { distance } from "framer-motion";

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 4,
  slidesToScroll: 4,
};

export default function OurHistory() {
  const slideStyle = {
    marginRight: "20px", // Adjust this value to set the horizontal spacing between slides
  };
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: "90%", md: "50%" });
  const side = useBreakpointValue({ base: "30%", md: "40px" });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const histories = [
    {
      title: "2003",
      text: "Tétris founded, in France, by Franck Eburderie.",
    },
    {
      title: "2006",
      text: "Tétris founded, in France, by Franck Eburderie.",
    },
    {
      title: "2007",
      text: "Tétris is acquired by JLL Group",
    },
    {
      title: "2008",
      text: "areAZero is acquired by the JLL group in Spain",
    },
  ];

  return (
    <div className="relative pt-20 bg-black">
      <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white pb-16 pl-12">
        Our History
      </h2>
      <hr className="border-dashed border-white border-1 mb-12 mx-14" />

      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant=""
        _hover={{ color: "red" }}
        color={"white"}
        position="absolute"
        right={40}
        top={24}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickPrev()}
      >
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant=""
        _hover={{ color: "red" }}
        position="absolute"
        right={32}
        top={24}
        color={"white"}
        transform={"translate(0%, -50%)"}
        zIndex={2}
        onClick={() => slider?.slickNext()}
      >
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Box
        position={"relative"}
        height={"300px"}  //  height
        width={"92%"}
        mx="auto"
        overflow={"hidden"}
        mr={12}
        ml={12}
      >
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {histories.map((history, index) => (
            <Box key={index} height={"100%"} pr={20}>
              <Stack spacing={6} direction="column" height={"100%"} p={2}>
                <Heading
                  fontSize={{ base: "1xl", md: "2xl", lg: "3xl" }}
                  color={"white"}
                >
                  {history.title}
                </Heading>
                <Text fontSize={{ base: "sm", lg: "md" }} color="white">
                  {history.text}
                </Text>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </div>
  );
}
