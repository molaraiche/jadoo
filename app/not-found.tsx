import Link from 'next/link';

const PAGENOTFOUNDED = () => {
  return (
    <section className='flex flex-col  items-center justify-center h-screen '>
      <h1 className='titling'>The asked page does not exist</h1>
      <Link
        href='/'
        className='bg-primary-yellow text-white mt-10 py-2 px-4 rounded-lg'>
        Home
      </Link>
    </section>
  );
};

export default PAGENOTFOUNDED;
