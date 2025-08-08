import React from 'react';

const faqs = [
  'What is Proton Mail?',
  'Why do I need a private email?',
  'How can I get a private email?',
  'Do you offer a plan for families?',
  'Is Proton Mail safer than Gmail?',
  'Is Proton Mail free?',
];

const SectionTen = () => {
  return (
    <section className="w-full min-h-screen flex flex-col py-12 px-4 sm:px-8 lg:px-20">
      {/* Heading */}
      <div className="mb-10">
        <h2 className="text-3xl sm:text-4xl font-serif text-[#372580]">Proton Mail FAQ</h2>
      </div>

      {/* FAQ Items */}
      <div className="flex flex-col gap-6">
        {faqs.map((question, index) => (
          <div
            key={index}
            className="group w-full flex items-center justify-between py-4 border-b border-gray-300 hover:cursor-pointer"
          >
            <h3 className="font-sans text-[#372580] font-semibold text-lg sm:text-xl">
              {question}
            </h3>
            <button className="rounded-full p-2 group-hover:bg-[#6d4aff] transition-colors duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="black"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionTen;