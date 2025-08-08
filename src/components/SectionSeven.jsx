import React from 'react';

const SectionSeven = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 sm:px-6 md:px-10 py-12">
      <div className="w-full bg-slate-50 rounded-3xl flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10 md:h-[450px] max-w-7xl">
        
        {/* Left Content */}
        <div className="flex flex-col items-start gap-6 w-full md:w-1/2">
          {/* Logos */}
          <div className="flex flex-wrap items-center gap-4">
            <img
              className="w-10 h-10"
              src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg"
              alt="proton-icon"
            />
            <img
              className="h-6"
              src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-black_zvq72v.svg"
              alt="proton-logo-black"
            />
            <img
              className="h-6"
              src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fmail-purple_resbmb.svg"
              alt="proton-logo-purple"
            />
          </div>

          {/* Heading and CTA */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#372580]">
            Keep your communications private
          </h2>
          <p className="text-gray-600 font-sans text-base sm:text-lg">
            Choose an email that is secure and private by default.
          </p>
          <button className="rounded-3xl font-semibold px-6 py-3 text-white bg-[#6d4aff] hover:bg-blue-800 transition font-sans">
            Create a free account
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-full h-auto object-contain"
            src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Keep_your_communications_private_39a0ace608.png&width=1458&height=996"
            alt="proton-privacy-image"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionSeven;