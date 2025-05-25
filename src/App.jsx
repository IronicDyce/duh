
import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { PiPillDuotone } from 'react-icons/pi';

const config = {
  theme: {
    primary: '#8e44ad',
    secondary: '#000000'
  },
  links: {
    pill: 'https://your-pill-link.com',
    twitter: 'https://x.com/yourprofile'
  },
  header: {
    title: '$KETCAT',
    subtitle: 'WASTED MASCOT OF SOLANA',
    wallet: 'KohRCAKjSkFMWjp3W96AkHFF4LaixHNKNat1aqqpump'
  },
  sections: [
    {
      title: '',
      text: 'No one knows how it got here. One minute, it was just another JPEG in a sea of memecoins. The next, it awoke in a swirling digital K-hole, its fur an unnatural shade of purple, its pupils dilated into vast, unblinking voids.',
      buttonText: 'WHO AM I →',
      image: '/image1.jpg'
    },
    {
      title: 'SOLANA
WILL PROVIDE',
      text: 'Somewhere in the neon-lit void of the Solana blockchain, a lone figure drifts—eternally blissful, eternally lost.',
      buttonText: 'WHERE AM I',
      image: '/image2.jpg'
    },
    {
      title: 'PUMP IT UP',
      text: 'It doesn’t walk—he floats. His reality is a soft, glitchy haze where time moves in loops, and every transaction confirmation feels like an eternity.',
      buttonText: 'WHAT AM I',
      image: '/image3.jpg',
      reverse: true
    }
  ],
  postSections: [
    {
      title: 'SOLANA SOLVES EVERYTHING',
      subtitle: 'ZERO MEMORY OF WHAT HAPPENED FIVE MINUTES AGO',
      text: 'Responsibility is for people who haven’t yet experienced the sublime joy of forgetting who they are and everyone around them.',
      image: '/image4.jpg'
    },
    {
      title: 'WTF WAS I DOING... NEVERMIND',
      subtitle: 'THE UNIVERSE REWARDS THOSE WHO LET GO',
      text: 'The universe rewards those who let go of reality, responsibility, and any coherent investment strategy.',
      image: '/image5.jpg'
    }
  ],
  footer: {
    callout: 'JOIN HIM. OR DON’T.
HE WON’T REMEMBER EITHER WAY.',
    image: '/image6.jpg',
  }
};

const KetcatLandingPage = () => {
  return (
    <div className="text-white" style={{ backgroundColor: config.theme.secondary }}>
      <header className="text-center py-10">
        <div className="flex justify-center gap-4 mb-4">
          <a href={config.links.pill}><PiPillDuotone size={32} /></a>
          <a href={config.links.twitter}><FaXTwitter size={32} /></a>
        </div>
        <h1 className="text-4xl font-bold" style={{ color: config.theme.primary }}>{config.header.title}</h1>
        <p className="mt-2" style={{ color: config.theme.primary }}>{config.header.subtitle}</p>
        <p className="text-gray-400 mt-1">{config.header.wallet}</p>
      </header>

      {config.sections.map((section, i) => (
        <section key={i} className={`flex flex-col md:flex-row ${section.reverse ? 'md:flex-row-reverse' : ''} items-center justify-center py-10 gap-10`}>
          <img src={section.image} alt="section" className="w-80 rounded-xl" />
          <div className="max-w-lg text-center md:text-left">
            {section.title && <h2 className="text-3xl font-bold mb-2 whitespace-pre-line" style={{ color: config.theme.primary }}>{section.title}</h2>}
            <p className="mb-4 text-gray-300">{section.text}</p>
            <button style={{ backgroundColor: config.theme.primary }} className="text-white px-6 py-2 rounded-full">{section.buttonText}</button>
          </div>
        </section>
      ))}

      {config.postSections.map((post, i) => (
        <section key={i} className="flex flex-col items-center text-center py-8">
          <img src={post.image} alt="post" className="w-64 rounded-xl mb-4" />
          <h3 className="text-2xl font-bold whitespace-pre-line" style={{ color: config.theme.primary }}>{post.title}</h3>
          <p className="mt-1" style={{ color: config.theme.primary }}>{post.subtitle}</p>
          <p className="text-gray-400 max-w-xl mt-2">{post.text}</p>
        </section>
      ))}

      <footer className="text-center py-12">
        <p className="whitespace-pre-line mb-4" style={{ color: config.theme.primary }}>{config.footer.callout}</p>
        <img src={config.footer.image} alt="footer" className="mx-auto w-64 rounded-xl mb-4" />
        <div className="flex justify-center gap-4 mt-6">
          <a href={config.links.pill}><PiPillDuotone size={28} /></a>
          <a href={config.links.twitter}><FaXTwitter size={28} /></a>
        </div>
        <p className="text-sm text-gray-600 mt-4">© K TRAIN. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default KetcatLandingPage;
