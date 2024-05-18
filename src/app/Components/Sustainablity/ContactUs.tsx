import React from 'react'
import { Button } from '@chakra-ui/react'
const ContactUs = () => {
  return (
    <div>
      
      <div className="bg-cover bg-center h-[340px] items-center flex flex-col pt-16" 
     style={{ backgroundImage: `url('/tetrisdb-illus-texture-cta-31.jpg')` }}>

      
        <div className=" flex flex-col pt-16">
          <div>
            <h1 className="text-6xl font-bold flex flex-col">
              <span className="text-4xl text-center font-extrabold text-white">
              Lets talk about your next project
              </span>
              
            </h1>
          </div>
          <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
         // Set height to 100% of the viewport height
      }}
    >
      <div className='m-8'>
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
  )
}

export default ContactUs
