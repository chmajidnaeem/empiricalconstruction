import React from 'react'
import GlobalOfficePr from './GlobalOfficePr'
import  GetInTouch from './GetInTouch'
import OurProjects from './OurProjects'
import AllProjects from './AllProjects'

const page = () => {
  return (
    <div className='pt-24'>
      <OurProjects />
        <GlobalOfficePr />
        <AllProjects />
        {/* <GetInTouch /> */}
    </div>
  )
}

export default page