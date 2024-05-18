
import React from 'react'
import Carousel from './Components/Carousel'
import Hero from './Components/Hero'
import Services from './Components/Services'
import Solotions from './Components/Solutions'
import GetInTouch from './Components/GetInTouch'
import Insights from './Components/Insights'
const page = () => {
  return (
    <div className='bg-black pt-24 pb-4 w-full overflow-hidden'>

<Carousel/>
<Hero/>


<Services/>
<Solotions/>
<Insights/>

<GetInTouch/>

    </div>
  )
}

export default page