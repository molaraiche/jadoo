import { servicesContent } from '@/Constants/servicesContent';
import React from 'react';
import ServicesCard from './shared/ServicesCard';
import { servicesProps } from '@/types/types';

const Services = () => {
  return (
    <section
      id='services'
      className='w-full flex items-center justify-center flex-col box-shadow-light-200 mt-4 max-h-full '>
      <h3 className='text-base font-bold text-primary-textColor uppercase mt-2  sm:text-sm  '>
        Category
      </h3>
      <h1 className='text-4xl font-Volkhov text-primary-darkBlue mt-4 font-bold sm:text-3xl sm:mx-2 sm:text-center'>
        We Offer Best Services
      </h1>
      <div className='flex items-center justify-center flex-wrap gap-8 my-6 mx-4 '>
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
