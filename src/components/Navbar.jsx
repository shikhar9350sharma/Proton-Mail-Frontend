import React from 'react'

const Navbar = () => {
    return (
        <div className=''>
            <nav className='px-10 w-full h-12 flex justify-between items-center gap-3 bg-[#f7f5ff] fixed top-0 '>
                <div className='flex items-center gap-3'>
                    <span>
                        <img width={25} height={25} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg" alt="proton-logo" />
                    </span>
                    <span className='flex items-center gap-2'>
                        <a href="/"><img width={50} height={50} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg" alt="proton-logo" /></a>
                        <a href="/"><img width={35} height={35} src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg" alt="proton-logo" /></a>
                    </span>
                    <div>
                        <ul className='flex items-center space-x-4 font-serif text-[#372580]'>
                            <a className='hover:text-blue-600 font-semibold font-sans' href="/"><li>Features</li></a>
                            <a className='hover:text-blue-600 font-semibold font-sans' href="/"><li>Pricing</li></a>
                            <a className='hover:text-blue-600 font-semibold font-sans' href="/"><li>Mail for Business</li></a>
                            <a className='hover:text-blue-600 font-semibold font-sans' href="/"><li>Download</li></a>
                            <a className='hover:text-blue-600 font-semibold font-sans' href="/"><li>Resource and Support</li></a>
                        </ul>

                    </div>
                    
                </div>
                
                <div className='flex items-center font-serif space-x-3 text-[#372580]'>
                    <span className='hover:text-blue-600 font-sans font-semibold'><a href="/">Discover Proton</a></span>
                    <div><button className='hover:bg-blue-800 font-serif px-2 rounded-xl bg-[#6d4aff] text-white'>Get Proton Mail</button></div>
                    <span className='hover:text-blue-600 font-sans font-semibold'><a href="/">Sign in</a></span>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
