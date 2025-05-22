import React from 'react';

const features = [
  { type: 'image', src: '/shared-assets/accessories.jpg' },
  { type: 'image', src: '/shared-assets/golf.jpg' },
  { type: 'image', src: '/shared-assets/ig_video.jpg' },
  { type: 'image', src: '/shared-assets/promo1.jpg' },
  { type: 'image', src: '/shared-assets/promo2.jpg' },
  { type: 'image', src: '/shared-assets/promo3.jpg' },
  { type: 'image', src: '/shared-assets/promo4.jpg' },
  { type: 'image', src: '/shared-assets/run.jpg' },
  { type: 'image', src: '/shared-assets/train.jpg' },
  { type: 'video', src: '/mobile-assets/UA_Theme_1_MB.mp4' },
  { type: 'video', src: '/desktop-assets/UA_Theme_2_DT.mp4' },
];

const Features = () => {
  return (
    <section className="bg-white py-10 px-4 md:px-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {features.map((item, index) => (
          <div key={index} className="overflow-hidden rounded shadow">
            {item.type === 'image' ? (
              <img src={item.src} alt={`feature-${index}`} className="w-full h-64 object-cover" />
            ) : (
              <video
                className="w-full h-64 object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={item.src} type="video/mp4" />
              </video>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
