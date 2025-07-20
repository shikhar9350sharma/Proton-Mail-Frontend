import React from 'react'

const SectionSeven = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col justify-center items-center px-4 md:px-10'>
        <div className='w-full bg-slate-50 rounded-3xl flex flex-col md:flex-row justify-between items-center p-4 md:h-[450px]'>
          
          <div className='flex flex-col items-start gap-6 w-full md:w-[50%] mb-6 md:mb-0 md:ml-6'>
            <div className='flex flex-wrap items-center gap-4'>
              <img className='w-10 h-10' src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg" alt="proton-img-13" />
              <img className='h-6' src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg" alt="proton-img-14" />
              <img className='h-6' src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg" alt="proton-img-15" />
            </div>

            <h2 className='text-3xl md:text-5xl font-serif text-[#372580]'>Keep your communications private</h2>
            <span className='text-gray-600 font-sans text-base'>Choose an email that is secure and private by default.</span>
            <button className="rounded-3xl font-semibold px-6 py-3 text-white bg-[#6d4aff] hover:bg-blue-800 font-sans">Create a free account</button>
          </div>

          <div className='w-full md:w-[50%] flex justify-center'>
            <img className='w-full max-w-sm md:max-w-full h-auto' src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Keep_your_communications_private_39a0ace608.png&width=1458&height=996" alt="proton-img-12" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionSeven