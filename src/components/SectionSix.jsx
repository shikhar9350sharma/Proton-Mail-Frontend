import React from 'react'

const SectionSix = () => {
  return (
    <div>
      <section className='w-full h-full flex flex-col items-center py-8 gap-4'>
        <div><h1 className='text-5xl font-serif text-[#372580]'>Your favorite features, plus privacy</h1></div>
        <div className='my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">Safe from spam and phishing</h3>
              <p className="text-gray-600 mb-2">PhishGuard blocks known phishing attempts and lets you know if an email is suspicious. Link confirmation ensures you never fall for malicious websites.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Safe_from_spam_and_phishing_809b503041.png&width=1299&height=700" alt="proton-img-6" />
            </div>
          </div>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">Password protection </h3>
              <p className="text-gray-600 mb-2">Set passwords and expiration dates for your emails to securely send confidential information to your contacts, even if they don't have Proton Mail.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Password_protection_25b7b9b3ca.png&width=1299&height=700" alt="proton-img-7" />
            </div>
          </div>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">Hide-my-email aliases</h3>
              <p className="text-gray-600 mb-2">Create aliases when you sign up for new websites. By hiding your real email address, you can prevent phishing attacks and reduce spam.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Hide_my_email_aliases_042f7d1838.png&width=1299&height=700" alt="proton-img-8" />
            </div>
          </div>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">Schedule, undo, or snooze emails</h3>
              <p className="text-gray-600 mb-2">Enjoy the ease and security of Proton Mail on all your devices with our open-source apps for web, desktop, Android, and iPhone.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Schedule_undo_or_snooze_emails_5db1e51bd6.png&width=1299&height=700" alt="proton-img-9" />
            </div>
          </div>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">Available on all platforms</h3>
              <p className="text-gray-600 mb-2">Enjoy the ease and security of Proton Mail on all your devices with our open-source apps for web, desktop, Android, and iPhone.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=Available_on_all_platforms_8d823728d8.png&width=1299&height=700" alt="proton-img-10" />
            </div>
          </div>
          <div className="bg-[#f9fafb] shadow-lg rounded-xl p-6 w-[400px] h-full flex flex-col justify-between">
            <div className='m-2'>
              <h3 className="text-lg font-semibold text-[#372580] mb-2">1-click unsubscribe</h3>
              <p className="text-gray-600 mb-2">With one click, unsubscribe from mailing lists and keep your inbox clutter-free.</p>
            </div>
            <div className='my-3'>
              <img src="https://pmecdn.protonweb.com/image-transformation/?s=s&image=1_click_unsubscribe_8c55026b13.png&width=1299&height=700" alt="proton-img-11" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SectionSix
