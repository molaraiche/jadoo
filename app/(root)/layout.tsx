import type { Metadata } from 'next';
import { Poppins, Volkhov } from 'next/font/google';
import NavBar from '@/components/NavBar';
import Image from 'next/image';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-Poppins',
});

const volkhov = Volkhov({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-Volkhov',
});

export const metadata: Metadata = {
  title: 'Jadoo | Travel Agency',
  description: 'Book your trip in minute, get full Control for much longer.',
  icons: {
    icon: '/assets/Logo.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.variable} ${volkhov.variable} `}>
        <main className='container mx-auto'>
          <span className='absolute -z-10 flex justify-end items-end w-full top-0 right-0 bottom-90 left-0 '>
            <Image
              src='/assets/Decore.svg'
              alt='bubble'
              width={800}
              height={800}
            />
          </span>
          <NavBar />
          {children}
        </main>
      </body>
    </html>
  );
}
