import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer id='footer' className='my-10  '>
      <div
        id='footLink'
        className='flex items-center justify-center ml-16 md:flex-col md:ml-0'>
        <div className='flex flex-col justify-center md:items-center'>
          <Image src='/assets/logo.svg' alt='Logo' width={200} height={100} />
          <p className='text-[#5e6282] mt-5 md:text-center'>
            Book your trip in minute, get full Control for much longer.
          </p>
        </div>
        <div className='flex items-center justify-center gap-36 w-full md:gap-10 md:w-[90%] md:flex-col md:mt-5'>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold mb-2 '>Company</h1>
            <Link href='#footer'>About</Link>
            <Link href='#footer'>Careers</Link>
            <Link href='#footer'>Mobile</Link>
          </div>

          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold mb-2 '>Contact</h1>
            <Link href='#footer'>Help/FAQ</Link>
            <Link href='#footer'>Press</Link>
            <Link href='#footer'>Affiliate</Link>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <h1 className='font-bold mb-2 '>More</h1>
            <Link href='#footer'>Airlinefees</Link>
            <Link href='#footer'>Airline</Link>
            <Link href='#footer'>Low fare tips</Link>
          </div>
          <div className='flex flex-col justify-center items-center gap-5'>
            <div className='flex'>
              <Image
                src='/assets/fb.svg'
                alt='Facebook'
                width={50}
                height={50}
                className='cursor-pointer '
              />
              <Image
                src='/assets/ig.png'
                alt='Instagram'
                width={50}
                height={50}
                className='cursor-pointer '
              />
              <Image
                src='/assets/x.svg'
                className='cursor-pointer '
                alt='X'
                width={50}
                height={50}
              />
            </div>
            <div className=''>
              <p className='font-semibold'>Discover our app</p>
            </div>
            <div className='flex gap-4'>
              <Image
                src='/assets/PlayStore.svg'
                alt='Store'
                width={100}
                height={50}
                className='cursor-pointer '
              />
              <Image
                src='/assets/GooglePlay.svg'
                alt='Store'
                width={100}
                height={50}
                className='cursor-pointer '
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center h-[10vh] font-semibold '>
        <p className='text-center mt-5'>
          All rights reserved@jadoo.co Designed by
          <Link
            href='https://www.arshakir.com/'
            className='text-primary-orange ml-1 font-bold '
            target='_blank'>
            ARSHAKIR
          </Link>{' '}
          & Coded by
          <Link
            href='http://molaraiche.com/'
            className='text-primary-orange ml-1 font-bold '>
            MOLARAICHE
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
