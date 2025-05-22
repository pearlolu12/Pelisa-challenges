import React from 'react';

const Hero = () => {
  return (
    <section className="w-full">
      <video
        className="w-full h-screen object-cover"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/mobile-assets/UA_Theme_1_MB.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Hero;
