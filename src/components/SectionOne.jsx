import React from 'react'

const SectionOne = () => {
  return (
    <div>
      <section className='w-full min-h-screen mx-auto my-12 bg-[#f7f5ff] flex flex-col gap-4 items-center py-8'>
        <div className='p-3' ><h1 className='text-6xl font-sans font-semibold text-[#372580]'>Secure email that protects your privacy</h1></div>
        <div className='p-3'><h3 className='font-sans text-gray-600 text-[18px]'>Keep your conversation private with Proton Mail, an encrypted email service based in Switzerland.</h3> </div>
        <div className='flex space-x-3 items-center w-full h-full'>
          <button>Create a free account</button>
          <button>Get Mail for Business </button>
        </div>
        
      </section>
      
    </div>
  )
}

export default SectionOne

