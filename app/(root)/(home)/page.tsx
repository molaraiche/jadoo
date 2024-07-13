import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
const Home = () => {
  return (
    <section className='flex items-center justify-between w-full px-36 lg:justify-center md:px-10 lg: max-h-full  lg:flex-col'>
      <div className='flex-1 w-full items-center justify-center lg:text-center'>
        <p className='text-primary-orange font-extrabold size-20  w-full uppercase lg:text-center'>
          Best Destinations around the world
        </p>
        <h1 className='text-primary-darkBlue text-8xl	font-extrabold font-Volkhov lg:text-7xl sm:text-xl '>
          Travel,{' '}
          <span className='underline underline-offset-8 decoration-primary-orange'>
            enjoy
          </span>{' '}
          <br />
          and live a new
          <br /> and full life
        </h1>
        <p className='text-primary-textColor mt-6  w-96 font-medium leading-normal	lg:w-full  '>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex items-center mt-6 gap-3 lg:justify-center'>
          <Button className=' flex items-center justify-center w-[148px] h-[52px] bg-primary-yellow text-white rounded-md  hover:bg-yellow-500   '>
            Find out more
          </Button>
          <Button className='centerBtn'>
            <Image
              src='/assets/play-button.svg'
              alt='play button'
              width={60}
              height={60}
              className='mt-3'
            />
            <span className='text-[#686D77] font-links hover:text-primary-orange '>
              Play Demo
            </span>
          </Button>
        </div>
      </div>
      <div className='flex-1 '>
        <Image
          src='/assets/hero-img.svg'
          width={800}
          height={800}
          alt='hero image'
        />
      </div>
    </section>
  );
};

export default Home;
