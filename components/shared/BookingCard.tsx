import { bookingType } from '@/types/types';
import Image from 'next/image';

const BookingCard = ({ image, city, price, period }: bookingType) => {
  return (
    <div className=' text-primary-textColor w-[380px] h-[650px] shadow-booking text-center flex flex-col items-center justify-between rounded-xl transition-all cursor-pointer hover:scale-110  '>
      <Image
        src={image}
        alt={city}
        width={380}
        height={450}
        className='object-cover rounded-t-xl h-[550px] w-full'
      />
      <div className='flex w-full justify-between items-center px-2'>
        <p className='pl-2 text-lg'> {city} </p>
        <p> ${price}k </p>
      </div>
      <p className='flex items-center justify-start pl-2 w-full my-2 '>
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
