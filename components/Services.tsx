import { servicesContent } from '@/constants/servicesContent';
import React from 'react';
import ServicesCard from './shared/ServicesCard';
import { servicesProps } from '@/types/types';

const Services = () => {
  return (
    <section id='services' className='centerSection'>
      <p className='subTitling'>Category</p>
      <h1 className='titling'>We Offer Best Services</h1>
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
