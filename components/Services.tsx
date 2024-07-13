import { servicesContent } from '@/Constants/servicesContent';
import React from 'react';
import ServicesCard from './shared/ServicesCard';
import { servicesProps } from '@/types/types';

const Services = () => {
  return (
    <section
      id='services'
      className='w-full flex items-center justify-center flex-col box-shadow-light-200 '>
      <h3 className=''>Category</h3>
      <h2>We Ofeer Best Services</h2>
      <div className='flex items-center justify-center flex-wrap gap-6'>
        {servicesContent.map((service: servicesProps) => (
          <ServicesCard
            id={service.id}
            image={service.image}
            title={service.title}
            content={service.content}
            key={service.id}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
