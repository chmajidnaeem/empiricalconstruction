import React from "react";
import GlobalTetris from "./GlobalTetris";
import GetInTouch from "./GetInTouch";

const page = () => {
  return (
    <div className='pt-24 bg-black'>
      <GetInTouch />
      <GlobalTetris />
    </div>
  );
};

export default page;
