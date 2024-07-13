import { servicesProps } from '@/types/types';
import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ id, image, title, content }: servicesProps) => {
  return (
    <div className='flex flex-col items-center justify-center box-shadow-light-300'>
      <Image src={image} alt={content} width={80} height={80} />
      <h1> {title} </h1>
      <p className=''> {content} </p>
    </div>
  );
};

export default ServicesCard;
