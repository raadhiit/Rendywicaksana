import React, { useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

const images = [
  '/img/5.webp',
  '/img/6.webp',
  '/img/7.webp',
  '/img/9.webp',
  '/img/11.webp',
];

export default function InfiniteScrollCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
      align: 'start',
      dragFree: true,
    },
    [autoplay.current]
  );

  return (
    <div
      className="overflow-hidden w-full max-w-6xl mx-auto rounded-xl"
      ref={emblaRef}
    >
      <div className="flex">
        {images.concat(images).map((src, index) => (
          <div
            key={index}
            className="min-w-[80%] sm:min-w-[40%] lg:min-w-[25%] px-2 relative h-56 sm:h-72"
          >
            <Image
              src={src}
              alt={`Slide ${index}`}
              fill
              sizes="100%"
              className="object-contain rounded-xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
