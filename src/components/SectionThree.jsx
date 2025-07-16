import React from 'react'

const SectionThree = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col gap-2 items-center'>

        <div className='flex my-8 space-x-8 items-center justify-between'>
          <div className='flex flex-col gap-3 items-start w-[500px] h-full p-2'>
            <div className='mb-4'><h2 className='text-4xl font-serif text-[#372580]'>No more trackers in your inbox </h2></div>
            <div className='my-2'><p className='font-serif text-gray-600'>Email trackers tell senders and advertisers what you read and click on, and can follow you around the web.</p></div>
            <div className='mb-4'><p className='font-serif text-gray-600'>Proton Mail protects you from these digital spies and prevents companies from monitoring you.</p></div>
            <div><button className='rounded-3xl font-semibold p-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800'>Get your encrypted email</button></div>
          </div>

          <div>
            <img width={500} height={670} src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=No_more_trackers_in_your_inbox_5b5aaf2550.png&width=1467&height=1450" alt="proton-img-3" />
          </div>

        </div>

      </section>
    </div>
  )
}

export default SectionThree

