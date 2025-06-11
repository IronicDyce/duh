import React from 'react';
import { FaXTwitter } from 'react-icons/fa6';
import { PiPillDuotone } from 'react-icons/pi';

const config = {
  theme: {
    primary: '#ffffff',
    secondary: '#f9e0a1',
    accent: '#f4b728',
    light: '#fff7dd',
    dark: '#1c1c1c'
  },
  links: {
    pill: 'https://your-pill-link.com',
    twitter: 'https://x.com/yourprofile'
  },
  header: {
    title: 'Welcome in to what is all',
    highlight: 'DUH',
    button: '$DUH'
  },
  info: [
    { q: 'utility ?', a: "no, it's DUH" },
    { q: 'promise?', a: "no, it's DUH" },
    { q: 'flip btc?', a: "yes, it's DUH" }
  ]
};

const KetcatLandingPage = () => {
  return (
    <div className="min-h-screen font-sans">
      {/* Top Bar */}
      <div className="flex items-center justify-between px-6 py-4 text-sm" style={{ backgroundColor: config.theme.dark, color: config.theme.primary }}>
        <div className="font-bold">Duh Coin</div>
        <div className="flex items-center gap-2">
          <a href="/" className="font-bold underline">Buy Is $DUH</a>
        </div>
      </div>

      {/* Centered Icon Image */}
      <div className="flex justify-center items-center py-10" style={{ backgroundColor: config.theme.primary }}>
        <img src="/token.jpg" alt="Token Logo" className="w-20 h-20 rounded-full object-cover" />
      </div>

      {/* Hero Section */}
      <section className="text-center py-20" style={{ backgroundColor: config.theme.secondary }}>
        <h1 className="text-4xl md:text-5xl font-black" style={{ color: '#1c1c1c' }}>
          {config.header.title} <span style={{ color: config.theme.accent }}>{config.header.highlight}</span>
        </h1>
        <button
          className="mt-6 px-6 py-2 font-bold rounded-full uppercase"
          style={{ backgroundColor: config.theme.accent, color: config.theme.primary }}
        >
          {config.header.button}
        </button>
      </section>

      {/* Info Grid */}
      <section className="py-16" style={{ backgroundColor: config.theme.dark }}>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {config.info.map((item, idx) => (
            <div key={idx}>
              <p className="text-lg font-bold text-white">{item.q}</p>
              <p className="mt-1 font-semibold" style={{ color: config.theme.accent }}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Community CTA Section */}
      <section className="py-16" style={{ backgroundColor: config.theme.primary, color: config.theme.dark }}>
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-xl font-bold" style={{ color: config.theme.dark }}>
            Visit the $DUH X Community
          </h2>
          <p className="text-sm mt-2" style={{ color: config.theme.primary }}>
            Get unfiltered updates, share memes, and interact with a<br />
            community of degenerates.
          </p>
          <a href="https://x.com/yourprofile" target="_blank" rel="noopener noreferrer">
            <button
              className="mt-6 px-6 py-2 font-bold rounded-full"
              style={{ backgroundColor: config.theme.accent, color: config.theme.dark }}
            >
              Get In Here <span className="ml-2">👊</span>
            </button>
          </a>
        </div>
      </section>
    </div>
  );
};

export default KetcatLandingPage;
