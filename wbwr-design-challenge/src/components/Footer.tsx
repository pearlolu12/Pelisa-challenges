import React from 'react';

const images = [
  'IG Image 2_DT.jpg',
  'IG Image 3_DT.jpg',
  'IG Image 4_DT.jpg',
  'IG Image 5_DT.jpg',
  'UA_Theme_2_DT.jpg',
];

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-6xl mx-auto px-4">
        {images.map((img, index) => (
          <img
            key={index}
            src={`/desktop-assets/${img}`}
            alt={`footer-${index}`}
            className="w-full h-32 object-cover rounded"
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
