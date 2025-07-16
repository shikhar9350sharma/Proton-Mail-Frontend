import React from 'react'

const SectionTwo = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col gap-2 items-center'>
        <div className='my-10'><h1 className='text-5xl font-serif  text-[#372580]'>What makes encrypted email better?</h1></div>
        <div className='flex my-8 space-x-8 items-center justify-between'>
            <div>
                <img width={500} height={670} src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Because_what_s_in_your_email_is_your_business_1790cdb293.png&width=1579&height=1674" alt="proton-image-2" />
            </div>
            <div className='flex flex-col gap-3 items-start w-[550px] h-full p-2'>
                <div className='mb-4'><h2 className='text-4xl font-serif text-[#372580]'>Because what's in your email is your business </h2></div>
                <div className='my-2'><p className='font-serif text-gray-600'>Most popular email providers, such as Gmail, Outlook, and Yahoo, scan the content of your emails and use your email address to create a detailed profile on you and profit from your data.</p></div>
                <div className='mb-4'><p className='font-serif text-gray-600'>Proton Mail's end-to-end encryption and zero-access encryption ensure only you can see your emails. Not even Proton can view the content of your emails and attachments.</p></div>
                <div><button className='rounded-3xl font-semibold p-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800'>Get your encrypted email</button></div>
            </div>
        </div>

      </section>
    </div>
  )
}

export default SectionTwo
