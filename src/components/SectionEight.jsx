import React from 'react';

const SectionEight = () => {
  return (
    <section className="w-full min-h-screen flex flex-col items-center py-12 px-4 sm:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center w-full max-w-5xl text-center gap-8">
        
        {/* Top Image */}
        <img
          className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-auto mx-auto"
          src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Top_Element_Desktop_ab139aeb25.svg"
          alt="proton-top-element"
        />

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#372580]">
          An easy alternative
        </h2>

        {/* Paragraphs */}
        <div className="space-y-6">
          <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl">
            We provide easy-to-use alternatives to Big Tech services and their surveillance business models.
            With Proton, your data is protected, not exploited.
          </p>
          <p className="text-gray-600 font-sans text-base sm:text-lg md:text-xl">
            Join Proton and take control of your data with our encrypted email, calendar, file storage, VPN,
            and password manager.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SectionEight;