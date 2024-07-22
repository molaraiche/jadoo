import { booking } from '../constants/booking';
import BookingCard from './shared/BookingCard';
import { bookingType } from '../types/types';

const BookATrip = () => {
  return (
    <section className='centerSection' id='book-a-trip'>
      <h3 className='subTitling'>Top Selling</h3>
      <h1 className='titling'> Top Destinations </h1>
      <div className='flex justify-center gap-x-64 items-center mt-20 flex-wrap w-full'>
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
