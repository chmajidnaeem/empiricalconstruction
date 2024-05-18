import React from "react";
import { Stack, Button } from "@chakra-ui/react";

const Page = () => {
  return (
    <div className="  bg-black">
        <div className=" top-0 left-0 right-0  py-6 flex justify-left  items-center text-white text-xs font-bold md:px-10 px-5">
          <a href="/" className="mx-1 hover:underline">
            Home
          </a>
          <span className="">{">>"}</span>
          <span className="mx-1">Contact Us</span>
        </div>

        <div className="text-white text-center">
          <h2 className="md:text-4xl text-3xl font-extrabold md:pt-14 pt-5">
            How can we help you?
          </h2>
          <p className="mt-6 text-base mb-8">
            Have a project? An enquiry? A proposition? We’re ready to listen.{" "}
            <br />
            Please send us a message.
          </p>
      </div>
      <form className="pt-6  md:px-48 px-5">
        <div className="mb-4 ">
          <label
            className="block h-18 text-gray-300  bg-[#333333] px-6"
            htmlFor="category"
          >
            You are <span className="text-red-800">*</span>
          </label>
          <select
            id="category"
            className="block w-full p-2  pl-6  text-white text-base h-8 bg-[#333333] font-medium "
          >
            <option className="m-10" value="customer">Provider</option>
            <option value="journalist">Journalist</option>
            <option value="supplier">Supplier</option>
            <option value="customer">Customer</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div className="grid md:grid-cols-2 gap-x-8  grid-cols-1">


          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="name"
            >
              First Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="name"
            >
              Last Name <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="name"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="email"
            >
              Email <span className="text-red-800">*</span>
            </label>
            <input
              type="email"
              id="email"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="phone"
            >
              Phone Number <span className="text-red-800">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 relative">
            <label
              className="block text-gray-300 text-sm absolute top-0 left-0 px-6 transition-all duration-300 "
              htmlFor="company"
            >
              Company <span className="text-red-800">*</span>
            </label>
            <input
              type="text"
              id="company"
              className="block w-full p-2 text-base text-white bg-[#333333] pl-6 h-14 pt-5"
            />
          </div>

          <div className="mb-4 ">
            <label
              className="block h-18 text-gray-300  bg-[#333333] px-6"
              htmlFor="category"
            >
              You are <span className="text-red-800">*</span>
            </label>
            <select
              id="category"
              className="block w-full p-2 pl-6  text-white text-base h-8 bg-[#333333] font-medium "
            >
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
              {/* Add more countries here */}
            </select>
          </div>
        </div>

        <div className="mb-4 ">
          <label
            className="block h-18 text-gray-300  bg-[#333333] px-6 pt-3"
            htmlFor="message"
          >
            Message <span className="text-red-800">*</span>
          </label>
          <textarea
            id="message"
            className="block w-full p-2  text-base text-white bg-[#333333]"
          />
        </div>

        <div className="mb-4 ">
          <input type="checkbox" id="agree" className="mr-2 " />
          <label className="text-white" htmlFor="agree">
          I agree and consent to the website terms of use and to <span className="underline-offset-1 underline ">Tétris Privacy statement.</span>*
          </label>
        </div>
        <div className="mb-4">
          <input type="checkbox" id="agree" className="mr-2" />
          <label className="text-white" htmlFor="agree">
          I would like to receive communications about news, marketing, events and service updates from Tétris.
          </label>
        </div>
        <div className=" mt-8">
            <Stack spacing={6} direction={"row"}>
              <Button
                borderRadius={0}
                px={{ base: "3", sm: "6" }}
                bg={"transparent"}
                textColor={"white"}
                borderWidth={1}
                borderColor="white"
                _hover={{ borderColor: "red", textColor: "red" }}
              >
                Send
              </Button>
            </Stack>
          </div>
      </form>
    </div>
  );
};

export default Page;