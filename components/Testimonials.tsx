import Option from './shared/Option';

const Testimonials = () => {
  return (
    <section
      id='testimonials'
      className=' flex items-center justify-evenly min-h-[40vh] my-4 lg:flex-col '>
      <div className=' w-[50%] ml-12 md:ml-0 lg:w-full lg:ml-0'>
        <p className='subTitling flex justify-start items-center w-[90%] lg:justify-center md:mt-32  '>
          Testimonials
        </p>
        <h1 className=' flex justify-start items-center text-6xl font-Volkhov text-primary-darkBlue mt-4 font-bold sm:text-3xl sm:mx-2 sm:text-center  ml-10 lg:text-4xl lg:justify-center'>
          What People Say about us ?
        </h1>
      </div>
      <div className=' w-[50%] lg:w-full lg:flex lg:items-center lg:justify-center lg:mt-12 '>
        <Option />
      </div>
    </section>
  );
};

export default Testimonials;
