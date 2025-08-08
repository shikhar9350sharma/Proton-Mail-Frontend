import React from 'react';

const SectionTwo = () => {
  return (
    <section className="w-full flex flex-col gap-6 items-center px-4 md:px-8 lg:px-16">
      {/* Heading */}
      <div className="my-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#372580]">
          What makes encrypted email better?
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8 my-8 w-full max-w-6xl">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Because_what_s_in_your_email_is_your_business_1790cdb293.png&width=1579&height=1674"
            alt="proton-image-2"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col gap-4 items-start w-full lg:w-1/2 p-2">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#372580]">
            Because what's in your email is your business
          </h2>
          <p className="font-serif text-gray-600 text-base sm:text-lg">
            Most popular email providers, such as Gmail, Outlook, and Yahoo, scan the content of your emails and use your email address to create a detailed profile on you and profit from your data.
          </p>
          <p className="font-serif text-gray-600 text-base sm:text-lg">
            Proton Mail's end-to-end encryption and zero-access encryption ensure only you can see your emails. Not even Proton can view the content of your emails and attachments.
          </p>
          <button className="rounded-3xl font-semibold px-6 py-3 font-sans text-white bg-[#6d4aff] hover:bg-blue-800 transition">
            Get your encrypted email
          </button>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;