import { booking } from '@/Constants/booking';
import BookingCard from './shared/BookingCard';
import { bookingType } from '@/types/types';

const BookATrip = () => {
  return (
    <section className='centerSection'>
      <h3 className='subTitling'>Top Selling</h3>
      <h1 className='titling'> Top Destinations </h1>
      <div className='flex w-full justify-center items-center gap-36 mt-10'>
        {booking.map((book: bookingType) => (
          <BookingCard
            key={book.id}
            id={book.id}
            image={book.image}
            city={book.city}
            price={book.price}
            period={book.period}
          />
        ))}
      </div>
    </section>
  );
};

export default BookATrip;
