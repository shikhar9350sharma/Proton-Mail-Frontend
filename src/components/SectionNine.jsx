import React from 'react';

const SectionNine = () => {
  return (
    <section className="w-full min-h-screen flex flex-col gap-6 py-10 px-4 sm:px-6 lg:px-12">
      <div className="bg-[#1b1440] rounded-3xl w-full flex flex-col md:flex-row items-center justify-between p-6 md:p-10 gap-10 md:h-[500px] max-w-7xl mx-auto">
        
        {/* Left Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            className="w-full max-w-xs sm:max-w-md md:max-w-lg h-auto object-contain"
            src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Hero_image_PM_paid_acq_desktop_2b27b9d3ad.png&width=1562&height=1506"
            alt="proton-business-image"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-start gap-6 text-white px-2 sm:px-4 md:px-6">
          
          {/* Logos */}
          <div className="flex items-center gap-4">
            <img
              width={60}
              height={60}
              src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ficons%2Fmail_xxy4bg.svg"
              alt="proton-icon"
            />
            <div className="flex flex-col gap-1">
              <span className="flex items-center gap-2">
                <img
                  src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fproton-white-no-shadow_cpx8gp.svg"
                  alt="proton-white"
                />
                <img
                  src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fmail-white_qcqrum.svg"
                  alt="mail-white"
                />
              </span>
              <img
                src="https://pmecdn.protonweb.com/image-transformation/?s=c&image=image%2Fupload%2Fv1703162849%2Fstatic%2Flogos%2Ftexts%2Fbusiness-white_t0mxtu.svg"
                alt="business-white"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif">
            Secure your business
          </h2>

          {/* Description */}
          <p className="font-sans text-sm sm:text-base md:text-lg">
            In addition to protecting millions of individuals, Proton secures more than 50,000 businesses, including some of the world’s largest public and private organizations. Learn how Proton can secure your vital business data and help you comply with data protection and privacy laws.
          </p>

          {/* CTA Button */}
          <button className="rounded-3xl font-semibold capitalize px-6 py-3 text-black bg-teal-300 hover:bg-white transition font-sans">
            Get Proton Pass for business
          </button>

          {/* Trust Badge */}
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={30}
              height={30}
              viewBox="0 0 24 24"
              fill="skyblue"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 4.5a.75.75 0 0 1 .721.544l.813 2.846a3.75 3.75 0 0 0 2.576 2.576l2.846.813a.75.75 0 0 1 0 1.442l-2.846.813a3.75 3.75 0 0 0-2.576 2.576l-.813 2.846a.75.75 0 0 1-1.442 0l-.813-2.846a3.75 3.75 0 0 0-2.576-2.576l-2.846-.813a.75.75 0 0 1 0-1.442l2.846-.813A3.75 3.75 0 0 0 7.466 7.89l.813-2.846A.75.75 0 0 1 9 4.5ZM18 1.5a.75.75 0 0 1 .728.568l.258 1.036c.236.94.97 1.674 1.91 1.91l1.036.258a.75.75 0 0 1 0 1.456l-1.036.258c-.94.236-1.674.97-1.91 1.91l-.258 1.036a.75.75 0 0 1-1.456 0l-.258-1.036a2.625 2.625 0 0 0-1.91-1.91l-1.036-.258a.75.75 0 0 1 0-1.456l1.036-.258a2.625 2.625 0 0 0 1.91-1.91l.258-1.036A.75.75 0 0 1 18 1.5ZM16.5 15a.75.75 0 0 1 .712.513l.394 1.183c.15.447.5.799.948.948l1.183.395a.75.75 0 0 1 0 1.422l-1.183.395c-.447.15-.799.5-.948.948l-.395 1.183a.75.75 0 0 1-1.422 0l-.395-1.183a1.5 1.5 0 0 0-.948-.948l-1.183-.395a.75.75 0 0 1 0-1.422l1.183-.395c.447-.15.799-.5.948-.948l.395-1.183A.75.75 0 0 1 16.5 15Z"
              />
            </svg>
            <p className="font-sans text-gray-200 text-sm sm:text-base">
              Trusted by over 50,000 business users and 100 million accounts around the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionNine;