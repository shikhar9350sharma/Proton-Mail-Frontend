import React from 'react';

const SectionFive = () => {
  return (
    <section className="w-full flex flex-col gap-6 items-center px-4 md:px-8 lg:px-16">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-12 w-full max-w-6xl">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=standart_6352b07441.png&width=1638&height=1798"
            alt="proton-image-5"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-1/2 p-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#372580]">
            The standard for email privacy
          </h2>
          <p className="font-serif text-gray-600 text-base sm:text-lg">
            From newsrooms, activists, and international organizations to academics, Nobel Prize winners, and movie characters, Proton Mail is the trusted choice for secure and private communication. Join over 100 million people worldwide who believe their online privacy is worth protecting.
          </p>
          <button className="rounded-3xl font-semibold px-6 py-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800 transition">
            Take back control
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionFive;