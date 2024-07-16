import BookATrip from '@/components/BookATrip';
import Home from '@/components/Home';
import NextTrip from '@/components/NextTrip';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
const page = () => {
  return (
    <main>
      <Home />
      <Services />
      <BookATrip />
      <NextTrip />
      <Testimonials />
    </main>
  );
};

export default page;
