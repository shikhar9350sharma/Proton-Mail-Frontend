import React from 'react'

const SectionFour = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col justify-center items-center gap-2 mb-5'>
        <div className='my-10'>
          <img width={1100} height={700} src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=desktop_ui_proton_mail_5a910af1d2.png&width=1505&height=567" alt="proton-img-4" />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
          <div className='flex flex-col gap-2 items-start w-[270px]'>
            <div><h2 className='font-serif text-[#372580] text-2xl'>Ad free, always free</h2></div>
            <div><p className='text-serif text-gray-600'>Proton Mail is a free and secure email service that's powered by our community, not surveillance capitalism. Our free plan is supported by paid subscriptions that offer extra features and storage.</p></div>
          </div>
          <div className='flex flex-col gap-2 items-start w-[270px]'>
            <div><h2 className='font-serif text-[#372580] text-2xl'>Highest standards of privacy</h2></div>
            <div><p className='text-serif text-gray-600'>Proton is incorporated and headquartered in Switzerland, meaning your data is protected by some of the world's strictest privacy laws.</p></div>
          </div>
          <div className='flex flex-col gap-2 items-start w-[270px]'>
            <div><h2 className='font-serif text-[#372580] text-2xl'>Switch to Proton Mail in one click</h2></div>
            <div><p className='text-serif text-gray-600'>With Easy Switch, you can quickly migrate from any email provider to Proton Mail. Import your emails, labels, contacts, and calendars to Proton Mail and set up automatic forwarding to receive future emails in your new encrypted inbox.</p></div>
          </div>
          <div className='flex flex-col gap-2 items-start w-[270px]'>
            <div><h2 className='font-serif text-[#372580] text-2xl'>Open source and independently audited</h2></div>
            <div><p className='text-serif text-gray-600'>All Proton services are open source and independently audited for security. We also maintain open-source encryption libraries used by millions of people around the world.</p></div>
          </div>

        </div>
      </section>
    </div>
  )
}

export default SectionFour
