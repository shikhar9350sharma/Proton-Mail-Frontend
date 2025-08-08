import React from 'react';

const SectionThree = () => {
  return (
    <section className="w-full flex flex-col gap-6 items-center px-4 md:px-8 lg:px-16">
      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-8 w-full max-w-6xl">
        {/* Text Content */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-1/2 p-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#372580]">
            No more trackers in your inbox
          </h2>
          <p className="font-serif text-gray-600 text-base sm:text-lg">
            Email trackers tell senders and advertisers what you read and click on, and can follow you around the web.
          </p>
          <p className="font-serif text-gray-600 text-base sm:text-lg">
            Proton Mail protects you from these digital spies and prevents companies from monitoring you.
          </p>
          <button className="rounded-3xl font-semibold px-6 py-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800 transition">
            Get your encrypted email
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=No_more_trackers_in_your_inbox_5b5aaf2550.png&width=1467&height=1450"
            alt="proton-img-3"
          />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;