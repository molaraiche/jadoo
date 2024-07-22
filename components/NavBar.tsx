import { languages, navLinks } from '../constants/links';
import { langProps, LinksProps } from '../types/types';
import Image from 'next/image';
import Link from 'next/link';

const NavBar = () => {
  const menu = true;
  return (
    <section className='flex h-[10vh] items-center justify-between px-28 sm:px-10 '>
      <Link href='/'>
        <Image src='/assets/Logo.svg' alt='Logo' width={100} height={200} />
      </Link>
      <nav className='flex gap-20 xl:hidden '>
        {navLinks.map((link: LinksProps) => (
          <Link
            href={link.path}
            key={link.id}
            className='font-links text-primary-darkerBlue  hover:text-primary-orange 	'>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className=' flex gap-4 '>
        <select className='border-none outline-none bg-[#FFF1DA] '>
          {languages.map((lg: langProps) => (
            <option key={lg.id}> {lg.language} </option>
          ))}
        </select>
        <div className='hidden xl:block'>
          {menu ? (
            <Image src='/assets/menu.svg' width={24} height={24} alt='Menu' />
          ) : (
            <Image
              src='/assets/close-menu.svg'
              width={24}
              height={24}
              alt='Close menu'
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default NavBar;
