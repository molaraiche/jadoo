import { languages, navLinks } from '@/Constants/Links';
import { langProps, LinksProps } from '@/types/types';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';

const NavBar = () => {
  return (
    <section className='flex h-[10vh] items-center justify-around'>
      <Link href='/'>
        <Image src='/assets/Logo.svg' alt='Logo' width={100} height={200} />
      </Link>
      <nav className='flex gap-20'>
        {navLinks.map((link: LinksProps) => (
          <Link
            href={link.path}
            key={link.id}
            className='font-links  hover:text-primary-orange 	'>
            {link.label}
          </Link>
        ))}
      </nav>
      <div className=' flex gap-4 '>
        <select className='border-none outline-none bg-[#FFF1DA] gap-2'>
          {languages.map((lg: langProps) => (
            <option key={lg.id}> {lg.language} </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default NavBar;
