import React from 'react'

const SectionFive = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col gap-2 items-center'>
        <div className='flex my-12 space-x-12 items-center justify-between'>
          <div>
            <img width={500} height={670} src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=standart_6352b07441.png&width=1638&height=1798 " alt="proton-image-5" />
          </div>
          <div className='flex flex-col gap-3 items-start w-[550px] h-full p-2'>
            <div className='mb-4'><h2 className='text-4xl font-serif text-[#372580]'>The standard for email privacy</h2></div>
            <div className='my-2'><p className='font-serif text-gray-600'>From newsrooms, activists, and international organizations to academics, Nobel Prize winners, and movie characters, Proton Mail is the trusted choice for secure and private communication. Join over 100 million people worldwide who believe their online privacy is worth protecting.</p></div>
            <div><button className='rounded-3xl font-semibold p-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800'>Take back control</button></div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionFive
