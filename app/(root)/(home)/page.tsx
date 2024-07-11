import Image from 'next/image';
import React from 'react';
const Home = () => {
  return (
    <section className='flex items-center justify-center w-full'>
      <div className='flex-1 w-full items-center justify-center'>
        <p className='text-primary-orange font-extrabold size-20  w-full uppercase'>
          Best Destinations around the world
        </p>
        <h1 className='text-primary-darkBlue text-8xl	font-extrabold font-Volkhov'>
          Travel,{' '}
          <span className='underline underline-offset-8 decoration-primary-orange'>
            enjoy
          </span>{' '}
          <br />
          and live a new
          <br /> and full life
        </h1>
        <p className='text-primary-textColor mt-6  w-96 font-medium leading-normal	'>
          Built Wicket longer admire do barton vanity itself do in it. Preferred
          to sportsmen it engrossed listening. Park gate sell they west hard for
          the.
        </p>

        <div className='flex items-center mt-6 gap-3'>
          <button className=' flex items-center justify-center w-[148px] h-[52px] bg-primary-yellow text-white rounded-md  hover:bg-yellow-500   '>
            Find out more
          </button>
          <button className=' flex items-center justify-center w-[148px] h-[52px]'>
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
          </button>
        </div>
      </div>
      <div className='flex-1'>
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
