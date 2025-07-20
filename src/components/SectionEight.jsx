import React from 'react'

const SectionEight = () => {
  return (
    <div>
      <section className='w-full min-h-screen flex flex-col items-center gap-4 py-8 px-4 sm:px-8 lg:px-16'>
        <div className='flex flex-col items-center justify-center w-full max-w-5xl mx-auto text-center my-10'>
          
          <div className='mt-6'>
            <img 
              className='w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto mx-auto' 
              src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Top_Element_Desktop_ab139aeb25.svg" 
              alt="proton-img-15" 
            />
          </div>

          <div className='my-6'>
            <h2 className='text-3xl sm:text-4xl md:text-5xl font-serif text-[#372580]'>An easy alternative</h2>
          </div>

          <div className='space-y-4'>
            <p className='text-gray-600 font-sans text-center text-base sm:text-lg md:text-xl'>
              We provide easy-to-use alternatives to Big Tech services and their surveillance business models.
              With Proton, your data is protected, not exploited.
            </p>

            <p className='text-gray-600 font-sans text-center text-base sm:text-lg md:text-xl'>
              Join Proton and take control of your data with our encrypted email, calendar, file storage, VPN,
              and password manager.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionEight