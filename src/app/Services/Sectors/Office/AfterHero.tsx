import React from 'react'

const AfterHero = () => {
  return (
    <div>

<h2 className="text-3xl font-semibold mt-12 text-white flex justify-center items-center px-12 text-center">
Office and building fitting-out services
          </h2>
          <p className="text-xl pt-2 pb-2 mt-2 text-white flex justify-center items-center px-12 text-center">
          Work habits are continuing to evolve – and so is the role and value of the office.
            solution.
          </p>
       <div className="flex flex-col sm:flex-row items-center justify-center mt-12">

       

        <div className="flex flex-col w-1/2  mx-12 sm:py-0 py-8">
          <img
            src="https://www.tetris-db.com/wp-content/uploads/2022/02/tetris-db-illus-offices-investors.png"
            alt="Image 1"
            className="h-40 w-full"
          />
          <h2 className="text-3xl font-semibold mt-4 text-white">
            Design and Build with intent
          </h2>
         
          <p className="text-sm mt-2 text-white">
          We can help you enhance your building’s common areas, incorporating facilities that the modern worker values, while providing flexibility for tenants who do not have these common areas in their usable area.
          </p>
          <h1 className=' hover:text-red-700 text-white mt-8'>Learn More  {'>'}</h1>
        </div>

        <div className="flex flex-col w-1/2  mx-12">
          <img
            src="https://www.tetris-db.com/wp-content/uploads/2022/02/tetris-db-illus-offices-occupiers.png"
            alt="Image 1"
            className="h-40 w-full"
          />
          <h2 className="text-3xl font-semibold mt-4 text-white">
            Design and Build with intent
          </h2>
       
          <p className="text-sm mt-2 text-white">
          The space you occupy should be welcoming and offer more than just a place to work. We can help you reimagine your office space and deliver a more social, motivating and creative workplace where your people feel – and work – their best, wherever they are.
          </p>

          <h1 className=' hover:text-red-700 text-white mt-8'>Learn More  {'>'}</h1>
         
        </div>
      </div>
    </div>
  )
}

export default AfterHero
