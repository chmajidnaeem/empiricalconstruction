import React from "react";
import Image from "next/image";
import WhoWeAreBody from "../../../../public/who-we-are-body.jpg";

const Values = () => {
  return (
    <div className="bg-black">
      <div className="p-12">
        <Image
          className="w-screen lg:h-[390px] md:h-[300px]"
          src={WhoWeAreBody}
          alt="Image description"
        />
      </div>

      <div className="text-white text-center">
        <h2 className="md:text-5xl text-3xl font-extrabold pt-14">
          We design spaces that help build <br /> a better tomorrow
        </h2>
        <p className="mt-6 text-base md:font-bold font-medium">
          Our core values reflect our mission to develop every project with
          intention, <br />
          simplicity and environmental and social responsibility:
        </p>
      </div>

      <div className="grid md:grid-cols-2 grid-cols-1 md:space-x-24  text-white md:px-32 px-5 md:pb-24 pb-12">

      <div className="flex items-center">
          {/* <div className="absolute left-12 mb-12">icon</div> */}
          <div>
          <h2 className="md:text-4xl text-2xl font-extrabold md:pt-14 pt-8">Drive</h2>
            <p className="md:mt-6 mt-4 text-sm font-bold">
              We are motivated by our vision to design spaces that inspire
              people to achieve their best. You, our clients, are at the heart
              of what we do, and we are dedicated to understanding the unique
              needs of your business and your people.
            </p>
          </div>
        </div>

  
        <div className="flex items-center">
          {/* <div className="absolute left-12 mb-12">icon</div> */}
          <div>
          <h2 className="md:text-4xl text-2xl font-extrabold md:pt-14 pt-8">Passion</h2>
          <p className="md:mt-6 mt-4 text-sm font-bold">
            We seek out new opportunities to deliver results where people feel fulfilled in their everyday lives – and we approach every project with the creativity, flexibility and purpose that define our entrepreneurial roots.
            </p>
          </div>
        </div>

  
        <div className="flex items-center">
          {/* <div className="absolute left-12 mb-12">icon</div> */}
          <div>
          <h2 className="md:text-4xl text-2xl font-extrabold md:pt-14 pt-8">Simplicity</h2>
          <p className="md:mt-6 mt-4 text-sm font-bold">
            We distil every business need into thoughtful design solutions. Our precise work style – and deliverables – throughout the design and build process streamlines projects and makes collaboration easy and enjoyable.
            </p>
          </div>
        </div>

  
        <div className="flex items-center">
          {/* <div className="absolute left-12 mb-12">icon</div> */}
          <div>
          <h2 className="md:text-4xl text-2xl font-extrabold md:pt-14 pt-8">Responsibility</h2>
          <p className="md:mt-6 mt-4 text-sm font-bold">
            We seek to minimise our impact on the planet and local communities. We constantly research materials and processes that can help us create places as sustainable as they are beautiful.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Values;