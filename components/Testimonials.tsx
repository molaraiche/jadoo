import Option from './shared/Option';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className=' flex items-center justify-evenly min-h-[40vh] my-4 '>
      <div className=' w-[50%]  ml-12 '>
        <p className='subTitling flex justify-start items-center w-[90%] md:justify-center'>
          Testimonials
        </p>
        <h1 className='text-6xl font-Volkhov text-primary-darkBlue mt-4 font-bold sm:text-3xl sm:mx-2 sm:text-center flex justify-start items-center ml-10 '>
          {' '}
          What People Say about us ?{' '}
        </h1>
      </div>
      <div className=' w-[50%] '>
        <Option />
      </div>
    </section>
  );
};

export default Testimonials;
