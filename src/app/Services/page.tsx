"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@chakra-ui/react";

import Services from "../Components/Services";

export default function HeroSection() {
  // for we are fluent in making

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "data:image/jpeg;base64,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",
    "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSExMWFhUXFxcXFxgYFxsXGhcYFRcXFxgXHRUaHyggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OGhAQGy4lHyUtLS0tLy0xLi0tLS0tNS0tLS0tLS0vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJYBUAMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAAAgMBBAcFBgj/xABPEAABAgMCBgwJCAgGAwAAAAABAAIDBBEFIQYSMUFR0RMiUlNUYXGBkZKT0gcVFjKhscHh8BRCQ0SCotPiF2JkcoOjwtQjM2OUsvElNHP/xAAZAQEBAQEBAQAAAAAAAAAAAAAAAQIDBAX/xAArEQACAQMDAwMEAgMAAAAAAAAAAQIRElEDIVIiMbFBYaETYnHwIzIEQpH/2gAMAwEAAhEDEQA/AO4oiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiKD3KN0BlzwMpooiMPgH1qsNGXPpz+5SUoy7Fges1VKyHUTdAuRYCytECIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIDBVRVpVRWfUphERaIEREBZDKmq4BqK/FM3oVizErCIi0QIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAiIgCIiAIiIAq3tViKNAoRWlq8+0Q4OhhriAXUdTOKtFOLKcmlS5ruWhtoWVuzZ1NsID3kn1qYCVbAAWURaRAiIgCIiAIiIAiIgCIiAIiIAvm8MsKBJsxYeI+O4bVricUDdOxQTTLQZ6Zso1PCBhqLPhhsOE+NHf5rGNLg0bt5AuGgZTyVI4xMYTR4ji98pMOc41JLXXnqLjqzktonXShF7yPtf0hWp+wc0KP+IsjwhWp+w9jG/FXwvjyLwKP0HuILZjnJJRfT3Vw+prftDvZon3Z8IVp/sXYRvxllvhBtLTJdhG/HXwfjWZzSMTp/KsG05rgL+v+VPqa37QWaP7U+9/SDaX7H2EX8dSb4QLR0ynNLxf7hc/8ZzXAXdcalLxnOcCPat1JfrZ8Fs0f2p0Dy+tHTK/7aL/AHCDD+0dMp/t4v8Acr4EWpOcCHatTxpO8Db2zdaX6uV8CzSw/k+/8v7QBvMrzS8T+5Ux4QJ79m/28X8dc8NoT3BGdq3vILQnuCw+eK3vKX6uV8CzSw/k6BM+EOfaxzh8lOK1zv8AJiCuKK7+r4eH07nMtzQIn465rMz85iPD5eGBiOva/GoKGpuctyHHtE0xJeFQDI54Hpx70U9TPgOGnjydB8vZvTL9g/8AHT9IE1/odi/8Zc8iRbSrfAgD7Y9eOol9pH6KX6w76t+plfBLdPD+To7cPprRA7GJ+Knl/NbmD2T/AMVc3DbS3EuPtX+hym11p37WWv0uJ6Nsl+pyQs08M6MPCBNbmD2UT8RSbh/MZ2weo/vrmbjaemX6x1rP/k91LdJS7U5IWQ4s6Z+kGPuIPVf31L9IMbcQuh3eXMD4z3Uv6dSYlp53S3OD3UvnyQshxZ0/9IMbcQuh3eQeEKNvcPod3ly4y1om8uluh3dT5JaO+Sw5ndxS6fJCyHFnUT4Q429Q/vd5XQML4kZkSI5jAYIDwBjUJLhlvyXLk5lrQ36X6ru4vbsGDNCVnseLDLzDh7GQ25pxzWu1vzaVYym3/YOMKf1PtX+ESNmZC6Hd5UDwjzJfDaIcGjnUO1fkxXO3f6oXLIkGd3+HzQ/yqDIk2x8M7K0uDjQ4tL8R2amiql0+RbI8TtJw1mN7hfe7yx5bTG4hdV/eXJvlVoH60wcWx1/pUC+ezzjeyGpW6XIzYuJ1h2HUxvcPod3kg4fxQ4Y8JmLXbYtQaZ6EuK5GWznDG9kNSgYE1X/3P5TUuny/f+FsjxP1CiIvaeMIiIAiIgCIiAL5TDbDiXkBsZisEdwq1jj5oPz3DRoGeilhrha2TZiQ6PmHDatzMB+e72DOuKzkiIz3RYrREiPOM5zwC4njNPRmouGprKOx309Fy3NyYwil4jnPfMtc5xq4l1SSqTbcrv7Ok6lrNsSFvLOqNSmLEhbyzqN7q8nR7nr6/Yu8eyu/s9OpRNvSu/t6DqUDY0PNCZ2TD/SgslmaHD7FmpKafuOv2JHCCV35vQ7Us+UUpv46H6lhtmNzw2c0No9imLPaMjG9RupT+P3HX7EDhNKb8Oq/Uo+VMnv33H91X/IwMjW9RupDL8Q6g1K/x+46/Y1/KyU337j9SeVsnvp6j9SvMM8XQFU9jtKtNP3J1+xDyuk98PUdqTyvk927qHUmMdKhEP61PtJSGGOvKMRsJ5aJDiBrnVxHDzDlLSAtl+F0q0NGNFrQZG8S86aFWuq4Hauz1zFWwJ4ADbUuGcDMlI4J1ZLfK+V0xep71IYXS2iMf4f5lgWg3PEHWV7Jxh+lHO8D2p04ZaSyVjDCW3Ec/YHeR2GcHNBjn7LR/Utxs1DH0zO0brR07C3+H2rdalY8SUfI0/LGFwaP1RrUfK+HwWY6o1r05GPsrhDhRQ95FcVkTGNBnoDWnGvp5HBmIf8ANiFv6rTU9OQelKx4ij5HwhwsZwSY6nvWxLW0+L/l2fOP42wyR0rpkvZTWea3nJLz0nJzUW5sZOUgqXw4/Jnqyc6hy8076hGH70WAw9DnCi2G2ZNH6rTljwT/AMSV98JccQ5wsBjQcqy5LBU3k+GbZE4foWjljjur1LOsmaECYaYcMPcGYg2WoNHVdVwZtbuIr6ot4ulWwWecOLWV104uv9fJiU9u5zWYsWfGSXhu4hMN/qa1eVO2VPnErIuGK6pxY0J3zXN+a46V1ww+dVPhjR8chWX094+TSk36nGYz51tQbPmBx4pp04tFqG0Jjgjx9sD2LtfycfFyjElmu85od+8A/wD5VUU48S1lk4o60Jjgp7Ro9iwJ+Z4L/NauuxsHpZ2WAwfugs/4ELRi4HS5vaXtPKCOgivpWr44G+TrCIi+ieAIiIAiIgC+Sw7wwbJM2OEQ6ZeNqCKiGD894rk0DPyKrwh4aGRh4kBgizThtWkgNhg/PfUi7Q3KeRcMi2hPPeYj2Q3Ocakl1SSc/nLjqToqLudtLTru+xeyQiTI2WLNRi95LnOBNSTlvrk4symMGhnm5nre9aElOTYYAxsIUJFXGmc1+dpWw2LPnNL9J1rzu+vdHo6Kdn8m0MGG8Kmusp+SzM8zNdoNSpHjGlcaWp+87WsEWjmdL8xcfQlZ5RKQw/kuOCsLhEyf4g7qy3BKEfppntW9xagfaAN7pcHjDx7L1kxbQ3yX6Hd1OvkhSGGbXkhC32Y7Vv4ai7BKAPnxjyxR3FqbNPb5LdV3dQR54fTQByNd3ErPki0jxZsOwWlxlMXtPyqBwblc+Of4vuVWzTxyx4PUPcU9inT9Yg9n+RKy5CkeLM+TcpuHH+KdSkMFpXej2jlV8lnD9Zh9mNSkJWc4Wwfwh3UrLkKR4ss8lpXev5j1F2DcoPoh2j9aj8kmzlnR2LdSkJGb4b/JapWXPyKR4GvHseXa1xZCIOKcjnHNdlK9BuDsm5oLmEnFGVz84GghacezpnFcTNY+1NQYYbmOiqtZZM05rT8qxdqMkMOuIGmiVfLyWi4+Cfk1Kb2Os/vK2Fg9KbwD9p/eVPiOa4a7sh3l6dl4Ezsa8Tr2s3RhinMMbbJV8vJGor/Xwa7MHZQmglxU5BV5rxUxr19JZng4ljtosBrRuQXF3PfRvrX1Nh2AyVbRrnvf86JEOM88mZo4hTjqvVYsXyr3I7cGpZFkS8szY4EJsNpyhopU6ScrjxklehsI/wC1hrlOqd+5n8FEQ4uY8qiX1yt9NVtY2ghZ2IHi5LlHCvYtx5zoNVqTci9wIa4tNLnNytOm9ey6V0alWWkLlLRydI6mDxJaNPsAD4UCY0ua90B1P/mWvFftBbHjeO27xdGPG2LAp954K9IPGdXsO1K9ENaeTlKEcHlstGZI2sg8H/UjwmjnLC/1Kxoju20UMa7cwyXNaNGO4DGPHijkW/VZxknNzVGSKUXVGkHZiPYs4rcx6VtOAOUKGwDMuNjOlyKQ0jMolw0K10Ag3alF4OdXdDY+vREX1TwhERAF8P4RvCHBs1uxA40y8Va0DG2MH57x6hn5Ffh5hxCkWmEx7DMuFQ0uFIYOR7h6hn5FxWNP7I5z3xw5ziS5xeKknnXLU1Ldjrp6d25oTOE0OI90R7oj3uNXOLSSSc6g23YW5icpb716bZpu+t641rLp1mTZW9ca15Xbg9auyjyJS1WMYDR52zrmtByuJ0qYt4ZoUbqe9XScyxoNXtG3f84D5xOVbItKHd/jt7Qa1XSvYirTuazLfG8Rz9j3qYwhHB4/U962fGELPHh9oNardacLfmddTbiN+REYRaJaZ6p1rIt+v1WZP2FB1qQt+Z1lltpwN+b1kouI35GXW4T9UmOz9yrNru4HMdQj2K4WnL547On3Kw2tL5o0P45k24+RvyNUWlEzScx1TqUvGMbgkb45lsi3IG+wj06lU63YG7h9CU+3yXfl4I+Mo/A4vSNSx4yj8Df1wPYq4luwDliN6p1Ks23Lj6QdV2pLft8kr93g2fGUzwM88VupY8azPAx2rVq+PZfd/ddqWfKCX3X3Xalbfs8i77/BsRLWmMV2NLAbU5IgOUcS9CTnJ14YyFJY5xRT/EAJuF9CtjBqyYloAmEC2FeDFc04tclGg0xzxDnIXVbGseFKsDGCtwBcb3OoALzzZBcpReq8kcttmeLYODzmtD5wM2Q37EwlzW/vOPnniF3KvoHO6BkAuotxwByqh8voUccGLq9ysRRnCuYQtVw5OdGErCZqhtuYoi5RbFKmKFa7mQXrAirBFExVGmC5scqWyg5QtdSa3nWk2RpEosMafjmUWtuVrIZOTWvNtHCGVgXPijG3LKvdzhuTnIVs9RU3b1Jh0ivxxL4ie8JDRdClyeOI4N+63G9a8aZ8Ik2fNEBnIxzj0l1PQigXc6oSDxLHOFxiYw0nnfWSP3YbB6cSq1/KacOWbi8zsX1UWrUSjO3l+lRJaVxM2/NcLjdo7WsHCKa4XH7R+tWiFGfpNERew8oXyeHGGDZNuxw6OmHC4ZQwH5zvYM/ItPwjYeNkGbDCo+acLhlEIHI949Tc/IuAR5iJEe6I+LEc9xLnOL3VJOUm9ctSdFRHbThXd9j256RZGiOixW48R5LnOcTVxOcmq1/EkvvY6zta8vGfu39d2tYLnbt/WOteaksnp2wesLFgbyOs/vKXieBk2Fo53V6aryBFfu39Zyzs798f1jrSksiscG/K2Mx2NtBQPcKGpFxuWyyxoY+jh84OteIyO/GoIj6EVO2OWuVWl792/rHWjUshW4PcFlwt6g9UqbbMgbzC6hXgB792/rHWpB792/ru1qUlkvTg9/xZA3iH2YUhZsHg8Ls26l89ju3b+u7WsY53TuudalsslrHB9MLNg8Hhdmzuqfi2Fml4PZM7q+WBO6d2h1qX2j1zrS2WRWOEfVizYe8QR/BZ3VP5GwA/4ULsWd1fImm6++daxit0jrpa8iqwj68y4rdDZzQ291TZLncs7NupfH7E3i6y9OwcF4k46kFjS0GjohJxG56Fwz5LhelrySqXoj3mQXE0DW1rTzR6qL66xcFKUfMU4oYA6XEeoe5bmDGBsvI7ZjcaKRQxXDbX5QwZGN9Jzle6W6VaUObnXsicNoaAAAABQAXADiGYI4qANFIOqlTAqpNKrLSlUTLQtdCBVLoHOpteVaCrRMm6NUQgpZFe6HVUOachWXGhU6lgpnUXNpeFU2tVa1xStRQy29a9q2lClmB0Q1J81gvc48QOQaTk9Sja1qQ5WHjvvJuawG959g0lc4nJ58dzo8U1c7JmAaMjRoaFvsEqm5beEMeYqC7Eh72w0H2nZXeriXzUzDoPdRbEebGRt/HkWnikqUb7h6kI7Io2A6PjnUDB5OlbexKWxLVDm9Z+iPPMughLf2JDDVM/VkaWJxKOxrdMNY2JNh9WR+ll8Z4QcNmyTDChFrplwuGUQg6tHuHNc3PyLPhAw0EkwwoNHTLhcDeIQPz3cehufPdl4e+HEiue57i576uLib3Oy1J5ivdGNe5ybPKm5QxXuiRIrnveS5znGpc45yVmFYzSDtjUX5smQ+z0r0BJvz06fcrIMsQ4E5M9L7jccvEVqyJLmeV4qbuj0hShWS112NfmvGUZvjiXoRZFzSRo5lWZN2UC/lSyIukeU6QbuiswpGHWjnOAN1a5OPkXqzMm40eGijuO4OHnD284WuZN2gKWRLczQiSABIJdUVBvWWSjARUuIz0IBovR+SvflpjNAGYVbm6PjIoiz3fBSyJLmaUaz2A3OJGUGuUcmY8Si2Sb+svUhSLvNJAGmuQrHi5wNDlVsiLmakzZkMDGbjYp0m9rtyfYc456UCTh8fSvXhyThoINxGYj4z5lmLZZF4Iocmo0zpZEXM87xdCIxm1u85tfvDi9XIq/kMLjXoNs94NQQOdXvs+oqKA5xm5RqVsiLmeY2RhOuAONxm52o+tYg2c17gxrHOeTQNAJcToDReSvsLBwEmJijnHY4e6IqSP1WGleU0HKun2Hg/BlG0ht21KF7r3u5XU9AoFw1NSEfybhGTPhcHPBcwgPmxTOIbXGvI9zT6G38eZdIlILITBDYxrGNFGtaA1oHEBcFY4nMFjF0rxT1HJnojFImx9blkhVAZisiLQ39KilkrWAWUUKZwr6fGYqDm/HuRoVItfmKkWKNdKy1yAwQmMQrAQVAtSgqSY/jVuXKtbY84VrHHMrF+jI0YfBzC9aNr2kyVh48QXm5rRlcdHJpOZbNpT8OWh477zka3O46BrXMbdtF8xFL3m/IBmaNAVaSLGr/BrWxaUSO8viGrjcBmaMzQMwWk+rqVyDIFaIatbDRHOc67Lsa7YSmIa2AxZxVTnQ19jTEWxRYxUBr7GsYivLViiAoLVgNVxCxioC3Cuz4kKbjtiODjsjnVqTUPOM2tRloRyca8uCcVwPGPesovpI5My+4kUyFAK6ERUVL5jzWO0gtPKygB6COhUYp4lhEBZChkhzbrwXDlaCfSKjoWtsea745kRKAQ4bmkuFM2fm0LMeCQQRShFRfpzZERAVhruJbMNpc05KtocuUVpoyi5YRARDDxKyG8t84AtOUe0cYRFQbMGQe6KITcSpcGgm4X5K3GnpXQrEwUhQKPiHZYmkijWniZ7TXmRF5P8AKnKOyO2jFPdn0bHrLkReNdjv6lZNFIFEWUtyh4qFHLcURRgNNLlaf+iiLUSMwQqojK3C4jOiLTREQf6VaxyIsLuafYsOhQn5psCE6IQSGitBlKIu0Tmc0tO0IkxEL3m/IAMjRuQNC8xrK5URYRvV2SSLWw1MMRFo4GcVMVYRCmC1YLVlFCEaLBaiICJasFqIhD//2Q==",
  ]; // Replace with your image URLs
  const imageCount = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageCount);
    }, 500); // Change image every 0.5 seconds

    return () => clearInterval(interval);
  }, [imageCount]);

  return (
    <div className="bg-black pb-12  w-full overflow-hidden">
      <div
        className="relative bg-cover bg-center h-full w-full"
        style={{
          backgroundImage:
            "url(https://www.tetris-db.com/wp-content/uploads/2022/02/dxb-turnkey-intro-mobile.jpg)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-tr from-black to-transparent"></div>
        <div className="container mx-auto px-4 sm:px-12 pt-16 sm:pt-28 pb-8 relative z-10">
          <div className="max-w-5xl">
            <p className="text-white text-sm mb-6 sm:mb-12">
              Home » Services » Design and Build
            </p>
            <h1 className="text-3xl sm:text-5xl text-white font-bold mb-4">
              Design and Build
            </h1>
            <p className="text-white text-sm mb-6">
              We design and build with purpose
            </p>
            <p className="text-white text-4xl sm:text-6xl pt-8 sm:pt-16 font-extrabold leading-tight">
              <span className="block">We are turnkey experts</span>
              <span className="block">so you know everything</span>
              <span className="block">is taken care of</span>
            </p>
            <p className="text-white text-sm mb-8 mt-12 sm:mt-16">
              We transform spaces so people think better, work better,
              <br /> and live better in a way that meets your business
              objectives
              <br /> and brings your brand to life while being kind to the
              planet.
            </p>
            <button className="px-8 border-white border text-white py-3 font-bold hover:text-red-700 hover:border-red-700">
              Let us talk
            </button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-12 sm:mt-52">
        <div className="flex flex-col mx-4 sm:mx-12 max-w-lg">
          <img
            src="https://www.tetris-db.com/wp-content/uploads/2022/02/dxb-design-x-build-with-intent.png"
            alt="Image 1"
            className="h-40 w-full"
          />
          <h2 className="text-xl sm:text-3xl font-semibold mt-4 text-white">
            Design and Build with intent
          </h2>
          <p className="text-lg pt-2 pb-2 mt-2 text-white">
            We take care of everything for you with our seamless turnkey
            solution.
          </p>
          <p className="text-sm mt-2 text-white">
            Our global team of engineers, architects and designers is capable of
            delivering a full suite of services to address your needs from the
            initial brief all the way through to the day you move in, and
            beyond. Our end-to-end service and focus on building strong
            relationships means that you will work with a single point of
            contact - we&apos;ll look after the rest, bringing together all aspects
            of project design, financing, procurement, subcontracts, and
            construction, so you benefit from:
          </p>
          <ul className="text-base sm:text-lg text-left mt-4 text-white grid grid-cols-1 sm:grid-cols-2">
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Price certainty</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Collaborative approach</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Reduced project timelines*</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Reduced risk</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">A seamless process</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Peace of mind</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col mx-4 sm:mx-12 max-w-lg">
          <img
            src="https://www.tetris-db.com/wp-content/uploads/2022/02/dxb-build-with-purpose.png"
            alt="Image 2"
            className="h-40 w-full"
          />
          <h2 className="text-xl sm:text-3xl font-semibold mt-4 text-white">
            Design and Build with intent
          </h2>
          <p className="text-lg pt-2 pb-2 mt-2 text-white">
            We take care of everything for you with our seamless turnkey
            solution.
          </p>
          <p className="text-sm mt-2 text-white">
            Our global team of engineers, architects and designers is capable of
            delivering a full suite of services to address your needs from the
            initial brief all the way through to the day you move in, and
            beyond. Our end-to-end service and focus on building strong
            relationships means that you will work with a single point of
            contact - we&apos;ll look after the rest, bringing together all aspects
            of project design, financing, procurement, subcontracts, and
            construction, so you benefit from:
          </p>
          <ul className="text-base sm:text-lg text-left mt-4 text-white grid grid-cols-1 sm:grid-cols-2">
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Price certainty</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Collaborative approach</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Reduced project timelines*</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Reduced risk</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">A seamless process</span>
            </li>
            <li className="flex items-center pt-2">
              <span className="text-red-500 mr-2">/</span>
              <span className="font-bold">Peace of mind</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative flex justify-center items-center h-full w-full py-8 mt-8">
        {/* Background image with blur effect */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('data:image/jpeg;base64,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')`,
            filter: "blur(8px)",
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row lg:flex-row justify-center items-center w-full">
          <div
            className="flex flex-col sm:items-center items-start sm:w-1/2 w-5/6 px-4 py-4 lg:mx-4 "
            // style={{ width: "50%" }}
          >
            <img
              src={images[currentImageIndex]}
              alt={`Image ${currentImageIndex + 1}`}
              className="h-72 sm:w-96 w-5/6 object-cover"
            />
          </div>

          <div
            className="flex flex-col items-start sm:w-1/2 w-5/6 px-4 pt-0 pr-12"
            // style={{ width: "50%" }}
          >
            <h2 className="text-3xl font-semibold text-white">
              We are fluent in making creative visions a reality.
            </h2>
            <p className="text-sm mt-2 text-white">
              If you want a full turnkey service, we will design and build your
              space to realise your vision. And if you just need our fit-out
              project management expertise, we will make the process a smooth
              one - no hidden surprises and the best quality for your project.
            </p>
            <p className="text-sm mt-2 text-white">
              So whether you need office design and build, hotel refurbishment,
              or retail fit-out services, we are here to deliver your next space
              so that it is not only functional, but improves the lives of the
              people who use it.
            </p>
            <Button
              borderRadius={0}
              px={{ base: "5", sm: "10" }}
              bg={"null"}
              textColor={"white"}
              borderWidth={1}
              borderColor="white"
              _hover={{ borderColor: "red", textColor: "red" }}
              mt={4}
              height={12}
            >
              See our case studios
            </Button>
          </div>
        </div>
      </div>


      <Services />

      <div>
        <div
          className="bg-cover bg-center h-96 items-center flex flex-col pt-12 mt-12 px-8"
          style={{
            backgroundImage: `url(${"https://www.tetris-db.com/wp-content/uploads/2022/02/tetrisdb-illus-texture-cta-18.jpg"})`,
          }}
        >
          <div className=" flex flex-col pt-16">
            <div>
              <h1 className="text-6xl font-bold flex flex-col">
                <span className="text-5xl text-center font-extrabold text-white">
                  Let us talk about your next project
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
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
