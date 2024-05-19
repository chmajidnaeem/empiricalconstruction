"use client";
import React from "react";
import { Image } from "@chakra-ui/react";
import { useState } from "react";
import { IoSearchSharp, IoClose } from "react-icons/io5";
import { useAuth } from "@clerk/nextjs";
import { SignInButton, UserButton } from '@clerk/nextjs'
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { isSignedIn } = useAuth()

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsHovered(false);
  };

  const [isOpenOne, setIsOpenOne] = useState(false);

  const toggleDropdownOne = () => {
    setIsOpenOne(!isOpenOne);
  };

  const [isOpenTwo, setIsOpenTwo] = useState(false);

  const toggleDropdownTwo = () => {
    setIsOpenTwo(!isOpenTwo);
  };

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <div>
      <nav className="border-gray-200 py-4 bg-black fixed top-0 z-50 w-full ">
        <div className="flex flex-wrap flex-row items-center justify-between max-w-screen-xl sm:px-4 px-4 mx-auto">
          <a href="/" className="flex items-center flex-col">
            {/* <span className="self-center sm:text-5xl text-3xl font-bold whitespace-nowrap text-white">
              tetris
            </span>
            <span className="sm:pl-6 pl-0 self-center sm:text-sm text-xs whitespace-nowrap text-white">
              design*build
            </span> */}

            {/* <span className="self-center sm:text-3xl text-3xl font-bold whitespace-nowrap text-white">
              Empirical
            </span>
            <span className="sm:pl-8 pl-0 self-center sm:text-sm text-xs whitespace-nowrap text-white">
              construction
            </span> */}

            <Image
              src="/logo.png"
              alt=""
            
              width={120}
              height={70}

              
              className=" rounded-lg "
            />
          </a>

          <div
            className="items-center hidden sm:hidden md:hidden justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex mt-4 font-medium flex-row lg:space-x-6 lg:mt-0">
              <li>
                <div className="dropdown dropdown-hover">
                  <a href="/">
                    {" "}
                    <div
                      tabIndex={0}
                      role="button"
                      className="block py-2 pl-3 pr-4 text-white hover:text-[#C3C32F]"
                    >
                      About us
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 text-white w-52"
                  >
                    <li>
                      <a
                        href="/Components/WhoWeAre"
                        className=" hover:text-[#C3C32F]"
                      >
                        Who we are
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Components/WhereToFindUs"
                        className=" hover:text-[#C3C32F]"
                      >
                        Where to find us
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Components/MeetTheTeam"
                        className=" hover:text-[#C3C32F]"
                      >
                        Meet the team
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Components/Sustainablity"
                        className=" hover:text-[#C3C32F]"
                      >
                        Sustainability
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <div className="dropdown dropdown-hover">
                  <a href="/Services">
                    <div
                      tabIndex={0}
                      role="button"
                      className="block py-2 pl-3 pr-4 text-white hover:text-[#C3C32F] relative"
                    >
                      Services
                    </div>
                  </a>
                  <ul
                    tabIndex={0}
                    className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 text-white w-52"
                  >
                    <li>
                      <a href="/Services" className="hover:text-[#C3C32F]">
                        Design and Build
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Services/WorkplaceConsultancy"
                        className="hover:text-[#C3C32F]"
                      >
                        Workplace consultancy
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Services/InteriorDesign.tsx"
                        className="hover:text-[#C3C32F]"
                      >
                        Interior design
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Services/FitoutServices"
                        className="hover:text-[#C3C32F]"
                      >
                        Fit-out services
                      </a>
                    </li>
                    <li>
                      <a
                        href="/Services/FurnitureSolutions"
                        className="hover:text-[#C3C32F]"
                      >
                        Furniture solutions
                      </a>
                    </li>
                    <li
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="dropdown dropdown-hover">
                        <a href="#" className="hover:text-[#C3C32F]">
                          <div
                            className="relative flex items-center"
                            tabIndex={0}
                            role="button"
                          >
                            Sectors
                            <span
                              className="ml-2"
                              style={{
                                transform: isHovered
                                  ? "translateX(2px)"
                                  : "none",
                                transition: "transform 0.2s ease",
                              }}
                            >
                              <div className=" ml-24">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  fill="#C3C32F"
                                >
                                  <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                                </svg>
                              </div>
                            </span>
                          </div>
                        </a>
                        {isDropdownOpen && (
                          <ul className="dropdown-content-right absolute top-0 left-48 z-[1] menu shadow bg-gray-800 text-white w-52">
                            <li>
                              <a
                                href="/Services/Sectors/Office"
                                className="hover:text-[#C3C32F]"
                              >
                                Office
                              </a>
                            </li>
                            <li>
                              <a
                                href="/Services/Sectors/Hotel"
                                className="hover:text-[#C3C32F]"
                              >
                                Hotel
                              </a>
                            </li>
                            <li>
                              <a
                                href="/Services/Sectors/Retail"
                                className="hover:text-[#C3C32F]"
                              >
                                Retail
                              </a>
                            </li>
                          </ul>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a
                  href="/Components/OurProjects"
                  className="block py-2 pl-3 pr-4 text-white hover:text-[#C3C32F]"
                >
                  Our Projects
                </a>
              </li>
              <li>
                <a
                  href="/Insights"
                  className="block py-2 pl-3 pr-4 text-white hover:text-[#C3C32F]"
                >
                  Insights & News
                </a>
              </li>
              <li>
                <a
                  href="/Components/ContactUs"
                  className="block py-2 pl-3 pr-4 text-white hover:text-[#C3C32F]"
                >
                  Contact us
                </a>
              </li>

              <li>
                <div className="relative">
                  {!searchOpen && (
                    <div
                      tabIndex={0}
                      role="button"
                      className="block pl-3 pr-4 py-2 hover:text-[#C3C32F] text-white"
                      onClick={toggleSearch}
                    >
                      <IoSearchSharp />
                    </div>
                  )}
                  {searchOpen && (
                    <div className="relative navbar-transition">
                      <input
                        type="text"
                        className="border border-gray-300 bg-black pl-8  py-2 focus:outline-none focus:border-indigo-500"
                        placeholder="Search..."
                      />
                      <div
                        className="absolute top-0 left-0 flex items-center h-full px-3"
                        onClick={toggleSearch}
                      >
                        <IoSearchSharp className="text-gray-500" />
                      </div>
                      <div
                        className="absolute top-0 right-0 flex items-center h-full px-3 cursor-pointer"
                        onClick={toggleSearch}
                      >
                        <IoClose className="text-gray-500" />
                      </div>
                    </div>
                  )}
                </div>
              </li>
              <li>
                
                 {!isSignedIn && (
                  <SignInButton mode="modal">
                    <button  className="block py-2 pl-3 px-2 bg-white text-black">
                      Signin

                    </button>

                  </SignInButton>
                )}

                <UserButton afterSignOutUrl="/" />
               
              </li>
              <li>
                <button
                  data-collapse-toggle="mobile-menu-2"
                  type="button"
                  className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="mobile-menu-2"
                  aria-expanded="true"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <svg
                    className="hidden w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Nav */}
        <div
          className={`fixed left-0 w-full min-h-screen bg-black/70 z-[101] ${
            nav ? "" : "hidden"
          }`}
        >
          <div
            className={`fixed top-16 left-0 w-[100%] sm:w-[100%] md:w-[100%] h-full bg-black pl-2 pr-2 ease-in duration-500 ${
              nav ? "" : "left-[-100%]"
            }`}
          >
            <div className="">
              <ul className="flex flex-col mt-4 font-medium ">
                <li>
                  <div className="relative navbar-transition">
                    <input
                      type="text"
                      className="border text-center border-gray-300 py-1 bg-black focus:outline-none focus:border-indigo-500"
                      placeholder="Search..."
                    />
                    <div
                      className="absolute top-0 flex items-center h-full px-3"
                      onClick={toggleSearch}
                    >
                      <IoSearchSharp className="text-gray-500" />
                    </div>
                  </div>
                </li>

                <li className="
                pt-4">
                  <div className="dropdown relative">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" py-2 pl-3 pr-4 w-full flex justify-between items-center text-white hover:text-[#C3C32F] border-b border-gray-100 dark:border-gray-700"
                      onClick={toggleDropdownOne}
                    >
                      About us
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 transition-transform ml-44  transform ${
                          isOpenOne ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d={
                            isOpenOne
                              ? "M10 3l7 7H3l7-7z"
                              : "M10 17l-7-7h14l-7 7z"
                          }
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {isOpenOne && (
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 text-white w-52"
                      >
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Components/WhoWeAre"
                          >
                            Who we are
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Components/WhereToFindUs"
                          >
                            Where to find us
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Components/MeetTheTeam"
                          >
                            Meet the team
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Components/Sustainability"
                          >
                            Sustainability
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>

                <li>
                  <div className="dropdown relative">
                    <div
                      tabIndex={0}
                      role="button"
                      className=" py-2 pl-3 pr-4 w-full flex justify-between items-center text-white hover:text-[#C3C32F] border-b border-gray-100 dark:border-gray-700"
                      onClick={toggleDropdownTwo}
                    >
                      Services
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`w-5 h-5 transition-transform ml-44 transform ${
                          isOpenTwo ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d={
                            isOpenTwo
                              ? "M10 3l7 7H3l7-7z"
                              : "M10 17l-7-7h14l-7 7z"
                          }
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    {isOpenTwo && (
                      <ul
                        tabIndex={0}
                        className="dropdown-content z-[1] menu p-2 shadow bg-gray-800 text-white w-52"
                      >
                        <li>
                          <a className=" hover:text-[#C3C32F]" href="/Services">
                            Design and Build
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Services/WorkplaceConsultancy"
                          >
                            Workplace consultancy
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Services/InteriorDesign.tsx"
                          >
                            Interior design
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Services/FitoutServices"
                          >
                            Fit-out services
                          </a>
                        </li>
                        <li>
                          <a
                            className=" hover:text-[#C3C32F]"
                            href="/Services/FurnitureSolutions"
                          >
                            Furniture solutions
                          </a>
                        </li>
                        <li>
                          <a className=" hover:text-[#C3C32F]">Sectors</a>
                        </li>
                      </ul>
                    )}
                  </div>
                </li>
                <li>
                  <a
                    href="/Components/OurProjects"
                    className="block py-2 pl-3 pr-4 w-full text-white hover:text-[#C3C32F] border-b border-gray-100 dark:border-gray-700"
                  >
                    Our Projects
                  </a>
                </li>
                <li>
                  <a
                    href="/Insights"
                    className="block py-2 pl-3 pr-4 w-full text-white hover:text-[#C3C32F] border-b border-gray-100 dark:border-gray-700"
                  >
                    Insights & News
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block py-2 pl-3 pr-4 w-full text-white hover:text-[#C3C32F] border-b border-gray-100 dark:border-gray-700"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Hamburger Menu Icon */}
        <div className=" fixed top-4 right-4 z-[102]">
          <div
            onClick={handleNav}
            className="p-2 md:mr-4 rounded-full lg:hidden bg-black cursor-pointer"
          >
            {nav ? (
              <AiOutlineClose color="red" size="24" />
            ) : (
              <AiOutlineMenu color="red" size="24" />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
