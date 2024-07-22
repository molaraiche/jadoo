import Image from 'next/image';

const Option = () => {
  return (
    <div className='shadow-heavy flex items-center gap-4 p-10 w-[80%] rounded-lg sm:flex-col'>
      <div>
        <Image
          src='/assets/person.png'
          alt='Person'
          width={70}
          height={70}
          className='object-cover'
        />
      </div>
      <div>
        <p className='font-semibold text-primary-textColor sm:my-5 '>
          “On the Windows talking painted pasture yet its express parties use.
          Sure last upon he same as knew next. Of believed or diverted no.”
        </p>
        <div className='auth'>
          <p className='font-bold'>Jhon Doe</p>
          <p className='text-primary-orange'>Marrakech,Morocco</p>
        </div>
      </div>
    </div>
  );
};

export default Option;
