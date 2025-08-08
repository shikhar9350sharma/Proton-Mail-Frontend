import React from 'react';

const SectionFour = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-8 px-4 md:px-8 lg:px-16 mb-10">
      {/* Image Section */}
      <div className="w-full max-w-6xl my-10">
        <img
          className="w-full h-auto object-cover"
          src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=desktop_ui_proton_mail_5a910af1d2.png&width=1505&height=567"
          alt="proton-img-4"
        />
      </div>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {[
          {
            title: 'Ad free, always free',
            text: "Proton Mail is a free and secure email service that's powered by our community, not surveillance capitalism. Our free plan is supported by paid subscriptions that offer extra features and storage.",
          },
          {
            title: 'Highest standards of privacy',
            text: "Proton is incorporated and headquartered in Switzerland, meaning your data is protected by some of the world's strictest privacy laws.",
          },
          {
            title: 'Switch to Proton Mail in one click',
            text: 'With Easy Switch, you can quickly migrate from any email provider to Proton Mail. Import your emails, labels, contacts, and calendars to Proton Mail and set up automatic forwarding to receive future emails in your new encrypted inbox.',
          },
          {
            title: 'Open source and independently audited',
            text: 'All Proton services are open source and independently audited for security. We also maintain open-source encryption libraries used by millions of people around the world.',
          },
        ].map((item, index) => (
          <div key={index} className="flex flex-col gap-2 items-start">
            <h2 className="font-serif text-[#372580] text-xl sm:text-2xl">{item.title}</h2>
            <p className="font-serif text-gray-600 text-sm sm:text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionFour;