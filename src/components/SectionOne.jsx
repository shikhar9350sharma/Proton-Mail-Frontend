import React from 'react'

const SectionOne = () => {
  return (
    <div>
      <section className='w-full h-full mt-12 flex flex-col gap-4 items-center'>
        <div className='bg-[#f7f5ff] flex flex-col items-center w-full'>
          <div className='p-3' ><h1 className='text-6xl font-sans font-semibold text-[#372580]'>Secure email that protects your privacy</h1></div>
          <div className='p-3'><h3 className='font-sans text-gray-600 text-[18px]'>Keep your conversation private with Proton Mail, an encrypted email service based in Switzerland.</h3> </div>
        </div>
        <div className='flex space-x-3  justify-center items-center w-full h-full'>
          <button className='rounded-3xl font-semibold p-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800'>Create a free account</button>
          <button className='rounded-3xl font-semibold p-3 font-sans text-[#6d4aff] hover:bg-blue-800 hover:text-white flex items-center gap-2'>
            Get Mail for Business
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        <div className='my-10'>
          <img width={1536} height={699} src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=hero_image_proton_mail_5b7f17aad6.png&width=1505&height=685" alt="main-image-1" />
        </div>
      </section>
    </div>
  )
}

export default SectionOne

