import React from 'react';

const features = [
  {
    title: 'Safe from spam and phishing',
    description:
      'PhishGuard blocks known phishing attempts and lets you know if an email is suspicious. Link confirmation ensures you never fall for malicious websites.',
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=Safe_from_spam_and_phishing_809b503041.png&width=1299&height=700',
  },
  {
    title: 'Password protection',
    description:
      "Set passwords and expiration dates for your emails to securely send confidential information to your contacts, even if they don't have Proton Mail.",
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=Password_protection_25b7b9b3ca.png&width=1299&height=700',
  },
  {
    title: 'Hide-my-email aliases',
    description:
      'Create aliases when you sign up for new websites. By hiding your real email address, you can prevent phishing attacks and reduce spam.',
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=Hide_my_email_aliases_042f7d1838.png&width=1299&height=700',
  },
  {
    title: 'Schedule, undo, or snooze emails',
    description:
      'Enjoy the ease and security of Proton Mail on all your devices with our open-source apps for web, desktop, Android, and iPhone.',
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=Schedule_undo_or_snooze_emails_5db1e51bd6.png&width=1299&height=700',
  },
  {
    title: 'Available on all platforms',
    description:
      'Enjoy the ease and security of Proton Mail on all your devices with our open-source apps for web, desktop, Android, and iPhone.',
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=Available_on_all_platforms_8d823728d8.png&width=1299&height=700',
  },
  {
    title: '1-click unsubscribe',
    description:
      'With one click, unsubscribe from mailing lists and keep your inbox clutter-free.',
    image:
      'https://pmecdn.protonweb.com/image-transformation/?s=s&image=1_click_unsubscribe_8c55026b13.png&width=1299&height=700',
  },
];

const SectionSix = () => {
  return (
    <section className="w-full py-12 px-4 md:px-8 lg:px-16 flex flex-col items-center gap-8">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#372580] text-center">
        Your favorite features, plus privacy
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#f9fafb] shadow-lg rounded-xl p-6 flex flex-col justify-between h-full"
          >
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-[#372580] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
            <img
              className="w-full h-auto object-cover rounded-md mt-4"
              src={feature.image}
              alt={`proton-feature-${index}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionSix;