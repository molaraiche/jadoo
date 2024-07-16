import BookATrip from '@/components/BookATrip';
import Footer from '@/components/Footer';
import Home from '@/components/Home';
import Newsletter from '@/components/Newsletter';
import NextTrip from '@/components/NextTrip';
import Services from '@/components/Services';
import Sponsors from '@/components/Sponsors';
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
      <Sponsors />
      <Newsletter />
      <Footer />
    </main>
  );
};  

export default page;
