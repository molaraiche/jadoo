import BookATrip from '@/components/BookATrip';
import Home from '@/components/Home';
import Services from '@/components/Services';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
const page = () => {
  return (
    <main>
      <Home />
      <Services />
      <BookATrip />
    </main>
  );
};

export default page;
