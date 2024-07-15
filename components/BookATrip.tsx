import { booking } from '@/Constants/booking';
import BookingCard from './shared/BookingCard';
import { bookingType } from '@/types/types';

const BookATrip = () => {
  return (
    <section className='centerSection my-20' id='book-a-trip'>
      <h3 className='subTitling'>Top Selling</h3>
      <h1 className='titling'> Top Destinations </h1>
      <div className='flex  justify-center items-center gap-36 mt-10 flex-wrap max-w-[90%]'>
        {booking.map((book: bookingType) => (
          <BookingCard
            key={book.id}
            image={book.image}
            city={book.city}
            price={book.price}
            period={book.period}
            id={book.id}
          />
        ))}
      </div>
    </section>
  );
};

export default BookATrip;
