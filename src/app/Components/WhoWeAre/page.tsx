import React from "react";
import WhatSetUsApart from "./WhatSetUsApart";
import WhoWeAre from "./WhoWeAre";
import OurHistory from "./OurHistory";
import Values from './Values'
import Sustainability from './Sustainability'
import GetInTouchAboutUs from './GetInTouchAboutUs'
const page = () => {
  return (
    <div className='pt-24 bg-black'>
      <WhoWeAre />
      <WhatSetUsApart />
      <OurHistory />
      <Values />
      <Sustainability />
      <GetInTouchAboutUs  />
    </div>
  );
};

export default page;
