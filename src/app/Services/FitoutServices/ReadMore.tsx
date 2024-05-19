'use client'

import React from 'react'
import { useState, useEffect } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Image,
  Container,
  Button, ButtonGroup,
  Center
} from '@chakra-ui/react'
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi'
// And react-slick as our Carousel Lib
import Slider from 'react-slick'
import { distance } from 'framer-motion'

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: false,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 0, // Breakpoint for extra small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 640, // Breakpoint for small screens
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1024, // Breakpoint for medium screens
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 1440, // Breakpoint for large screens
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};
export default function CaptionCarousel() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 768); // Adjust the breakpoint as per your design
    };
    
    // Initial call to handleResize to set the initial state
    handleResize();
    
    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function to remove event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);







  const slideStyle = {
    marginRight: '20px', // Adjust this value to set the horizontal spacing between slides
  }
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null)

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' })
  const side = useBreakpointValue({ base: '30%', md: '40px' })

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Designing your workspace around the location it’s in – the dos and do nots',
      text: "August 8, 2023",
      image:
        'https://www.tetris-db.com/wp-content/uploads/2023/08/tetris_dftl_sketch2-scaled-740x460.jpg',
    },
    {
      title: 'Designing your workspace around the location it’s in – the dos and do nots',
      text: "August 8, 2023",
       image:
        'https://www.tetris-db.com/wp-content/uploads/2022/05/tetris-db-actu-whitepaper-bim-360-2-medium-740x460.jpg',
    },
    {
      title: 'Designing your workspace around the location it’s in – the dos and do nots',
      text: "August 8, 2023",
       image:
        'https://www.tetris-db.com/wp-content/uploads/2021/05/south-africa-tetris-db-health-and-safety-more-than-a-tick-box-article-740x460.jpeg',
    },
  ]

  return (

<div className='relative pt-20'>

<h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-4xl dark:text-white pb-16 pl-12">
Read our latest design news and insights
            </h2>

            <div className="icons-container">
      {/* Left Icon */}
      {!isSmallScreen && (
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
      )}
      
      {/* Right Icon */}
      {!isSmallScreen && (
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
      )}
    </div>








      {/* Left Icon */}
      {/* <IconButton
        aria-label="left-arrow"
        variant=""
        _hover={{ color: 'red' }}
        color={'white'}
        position="absolute"
        right={{ base: 16, md: 20, lg: 40 }}
        top={24}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton> */}
      {/* Right Icon */}
      {/* <IconButton
        aria-label="right-arrow"
        variant=""
        _hover={{ color: 'red' }}
        position="absolute"
       
        right={{ base: 8, md: 12, lg: 32 }}
        top={24}
        color={'white'}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton> */}

    <Box  position={'relative'} height={'600px'} width={'92%'} mx="auto" overflow={'hidden'} mr={12} ml={12}>
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
    {cards.map((card, index) => (
      <Box key={index} height={'100%'} pr={20}>
      
        <Stack
          spacing={6}
          direction="column"
        
          height={'100%'}
         
          p={2}
         
        >
        
          <Box height={200} width={300} position="relative">
           
            <Image
              src={card.image}
              alt={''}
              // layout="fill"
              objectFit="cover"
            />
          </Box>

       
          <Heading fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} color={'white'}>
            {card.title}
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'md' }} color="white">
            {card.text}
          </Text>

         
        </Stack>
      </Box>
    ))}
  </Slider>

  <div className="mt-12 flex justify-center ">
            <Button
              borderRadius={0}
              width={40}
              bg={"transparent"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
            >
              See More
            </Button>
          </div>

    </Box>
    </div>
  )
}