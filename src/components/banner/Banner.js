import React from 'react';
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pb-16 lg:pb-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 xl:gap-16 px-4 md:px-8 lg:px-16 border-b-[5px] font-titleFont border-b-gray-800"
    >
      {/* Section gauche */}
      <LeftBanner />

      {/* Section droite */}
      <RightBanner />
    </section>
  );
};

export default Banner;
