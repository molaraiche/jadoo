import { sponsors } from '@/constants/sponsors';
import { sponsorTypes } from '@/types/types';
import Image from 'next/image';

const Sponsors = () => {
  return (
    <section className='container mx-auto flex flex-wrap items-center justify-center gap-20 mt-24'>
      {sponsors.map((sponsor: sponsorTypes) => (
        <Image
          src={sponsor.image}
          key={sponsor.id}
          alt='Sponsor'
          width={200}
          height={80}
          className='cursor-grab'
        />
      ))}
    </section>
  );
};

export default Sponsors;
