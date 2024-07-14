import { bookingType } from '@/types/types';
import Image from 'next/image';

const BookingCard = ({ id, image, city, price, period }: bookingType) => {
  return (
    <div className=' text-primary-textColor w-[315px] h-[457px] shadow-main shrink-0'>
      <Image src={image} alt={city} width={314} height={457} />
      <div className='flex items-center justify-between px-2 '>
        <p className='pl-2 text-lg'> {city} </p>
        <p> ${price}k </p>
      </div>
      <p className='flex items-center justify-start pl-2 '>
        <Image
          src='/assets/navigation.svg'
          alt='Navigation'
          width={24}
          height={24}
        />
        A {period} Days Trip
      </p>
    </div>
  );
};

export default BookingCard;
