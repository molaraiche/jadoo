import Image from 'next/image';

const Newsletter = () => {
  return (
    <section
      id='newsletter'
      className='  flex flex-col items-center justify-center w-full mt-36'>
      <div className='bg-[#e3def1] w-[80%] rounded-3xl'>
        <div className='flex justify-end w-full '>
          <Image
            src='/assets/send.svg'
            alt='send'
            width={54}
            height={54}
            className='-rotate-12'
          />
        </div>
        <div className='w-full text-center '>
          <h1 className='text-primary-textColor font-bold text-xl w-[90%]'>
            Subscribe to get information, latest news and other intersting
            offers about Jadoo
          </h1>
          <div className=' flex items-center justify-center w-full rounded-lg  p-6 gap-6'>
            <form className='w-full'>
              <input
                type='email'
                className='text-primary-darkBlue border-0 rounded-md p-4 mb-4 focus:outline-none focus:ring-2 focus:ring-primary-orange transition ease-in-out duration-150 mx-4 w-[50%]'
                placeholder='Enter your email address '
              />

              <button
                type='submit'
                className='  bg-gradIt text-white font-bold py-4 px-8 rounded-md mt-4 transition ease-in-out duration-150'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
