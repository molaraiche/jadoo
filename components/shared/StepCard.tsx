import { stepsType } from '../../types/types';
import Image from 'next/image';

const StepCard = ({ title, image, content }: stepsType) => {
  return (
    <div className='flex gap-6   '>
      <Image src={image} alt={title} width={48} height={48} />

      <div className=''>
        <h2 className='font-bold text-primary-textColor '> {title} </h2>
        <p className=' text-primary-textColor'> {content} </p>
      </div>
    </div>
  );
};

export default StepCard;
