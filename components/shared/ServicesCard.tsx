import { servicesProps } from '@/types/types';
import Image from 'next/image';

const ServicesCard = ({ id, image, title, content }: servicesProps) => {
  return (
    <div className='flex flex-col items-center justify-center cursor-pointer  h-[250px] shadow-main rounded-md w-[400px] sm:w-[250px] sm:h-[350px]'>
      <Image
        src={image}
        alt={content}
        width={100}
        height={100}
        className='object-cover'
      />
      <h3 className='text-base font-bold   text-[#1E1D4C]'> {title} </h3>
      <p className='w-[50%] text-center leading-6 text-primary-textColor mt-2 '>
        {content}
      </p>
    </div>
  );
};

export default ServicesCard;
