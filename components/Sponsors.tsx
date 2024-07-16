import { sponsors } from '@/Constants/sponsors';
import { sponsorTypes } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const Sponsors = () => {
  return (
    <section className='flex w-full flex-wrap items-center justify-around gap-10 mt-24 mx-2'>
      {sponsors.map((sponsor: sponsorTypes) => (
        <Image
          src={sponsor.image}
          key={sponsor.id}
          alt='Sponsor'
          width={150}
          height={80}
          className='cursor-grab'
        />
      ))}
    </section>
  );
};

export default Sponsors;
