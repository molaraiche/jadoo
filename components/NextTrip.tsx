import { steps } from '@/Constants/steps';
import { stepsType } from '@/types/types';
import StepCard from './shared/StepCard';
import Image from 'next/image';

const NextTrip = () => {
  return (
    <section id='book-a-trip ' className='centerSection min-h-full my-4'>
      <p className='subTitling flex justify-start items-center w-[90%] md:justify-center'>
        Easy and Fast
      </p>
      <div className='flex w-full justify-between items-center md:flex-col '>
        <div className='flex items-center justify-start flex-col w-[50%] md:w-full '>
          <h1 className='text-6xl font-Volkhov text-primary-darkBlue mt-4 font-bold sm:text-3xl sm:mx-2 sm:text-center flex justify-start items-center ml-10 '>
            Book Your Next Trips <br /> in 3 Easy Steps
          </h1>
          <div className='flex flex-col gap-6 mt-10 ml-10'>
            {steps.map((step: stepsType) => (
              <StepCard
                key={step.id}
                id={step.id}
                image={step.image}
                title={step.title}
                content={step.content}
              />
            ))}
          </div>
        </div>
        <div className='flex items-center justify-center  w-[50%] md:w-[70%]  md:mt-20 '>
          <div className='shadow-heavy w-[350] h-[280] flex flex-col items-center justify-center rounded-xl pb-4'>
            <Image
              src='/assets/redDress.jpg'
              width={350}
              height={280}
              className='rounded-t-xl object-cover mb-2'
              alt='Red Dress Women'
            />
            <div className='flex justify-start items-start flex-col w-full gap-5  ml-10'>
              <h3 className='font-bold'>Trip To Greece</h3>
              <p className='text-primary-textColor'>
                {' '}
                14-29 june | by Robbin Joseph{' '}
              </p>
              <div className='flex gap-4 items-center justify-start w-full'>
                <Image
                  src='/assets/LEAF.svg'
                  alt='LEAF'
                  width={48}
                  height={48}
                />
                <Image
                  src='/assets/send-1.svg'
                  alt='SEND'
                  width={48}
                  height={48}
                />
                <Image src='/assets/map.svg' alt='MAP' width={48} height={48} />
              </div>
            </div>

            <div className='flex  items-center justify-between px-4 w-full mt-2'>
              <div className='flex items-center gap-2 justify-center text-primary-textColor '>
                <Image
                  src='/assets/build.svg'
                  width={36}
                  height={36}
                  alt='building'
                />
                24 people going
              </div>
              <div>
                <Image
                  src='/assets/heart.svg'
                  alt='Heart'
                  width={24}
                  height={24}
                  className='cursor-pointer'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextTrip;
