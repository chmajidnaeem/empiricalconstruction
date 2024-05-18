"use client"
import React from 'react';
import { Image } from '@chakra-ui/react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState<Slider | null>(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    { title: "Tétris wins seven internationally recognised health and safety accolades from RoSPA", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/05/tetris-db-news-rospa-big-740x460.jpg" },
    { title: "Future foundations: Driving long-term asset value through sustainable design and fit-out ", text:"March 7, 2024", image: "/tetrisdb-office-france.jpg" },
    { title: "Fit-out Cost Guide 2024", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/04/tetris-db-news-fit-out-cost-guide-2024-big-740x460.jpg" },
    { title: "Double victory for Tétris at the French Worknight Awards: Gold Winner of the Fit-out category and winner of the Public Prize", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/worknight24_152_carole_desheulles_web-740x460.jpg" },
    { title: "Discover the future of workplace design: Download our essential 2024 trends report", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2023/04/tetris-db-travelperk-spain-barcelona-33464-01-740x460.jpg" },
    { title: "Meet Tétris at UPCYCLE: The future of work reimagined", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/tetris-website-artwork-banners-1170-x-380-01-scaled-740x460.jpg" },
    { title: "Powerhouses of the industry: A spotlight on women in real estate", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/03/idw-tetris-740x460.jpg" },
    { title: "Join us at MIPIM in Cannes", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/01/tetrisdb-news-mipim2024-large-en-740x460.jpg" },
    { title: "Tétris is awarded the EcoVadis platinum level for the second consecutive year", text:"March 7, 2024", image: "https://www.tetris-db.com/wp-content/uploads/2024/01/tetris-news-ecovadis-2023-large-740x460.jpg" },
  ];

  return (
    <Box
      position={'relative'}
      height={{base:'full', lg:'400px'}}
      className='px-8'
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant=""
        color={'white'}
        position="absolute"
        left={{base:96, lg:'side'}}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant=""
        color={'white'}
        position="absolute"
        right={{base:12, lg:'side'}}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
          
            // position="relative"
            // backgroundPosition="center"
            // backgroundRepeat="no-repeat"
            // backgroundSize="cover"
            // backgroundImage={`url(${card.image})`}
            >
            {/* This is the block you need to change, to customize the caption */}
<div className='flex sm:flex-row flex-col h-full'>
<Image src={card.image}  alt='image' className='h-1/2 sm:w-full w-4/6 sm:ml-0 ml-4'></Image>

<div className=' sm:w-2/6 w-full text-white h-full  px-4 py-8'>
            <h1 className='text-3xl font-bold'>{card.title}</h1>
            <p className='text-sm pt-4'>{card.text}</p>
            </div>
            </div>
          </Box>




        ))}
      </Slider>
    </Box>
  );
}