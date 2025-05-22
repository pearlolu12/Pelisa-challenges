import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import useIsMobile from '../hooks/useIsMobile';
import React from 'react';

const Carousel = () => {
  const isMobile = useIsMobile();
  const [sliderRef] = useKeenSlider<HTMLDivElement>({ loop: true, slides: { perView: 1 } });

  const videoSources = isMobile
    ? ['/mobile-assets/UA_Theme_1_MB.mp4']
    : ['/desktop-assets/UA_Theme_2_DT.mp4'];

  return (
    <section className="py-16 px-4 md:px-16">
      <div ref={sliderRef} className="keen-slider max-w-5xl mx-auto rounded-xl overflow-hidden">
        {videoSources.map((src, idx) => (
          <div className="keen-slider__slide p-2" key={idx}>
            <video
              className="w-full h-64 object-cover rounded"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={src} type="video/mp4" />
            </video>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
