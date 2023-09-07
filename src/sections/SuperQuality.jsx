import { trust } from "../assets/protein";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          
          <span className='text-sky-500'> Super </span>
          <span className='text-sky-500'>Quality </span> Suppliments
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
        Trust is the cornerstone of our brand. With official ratings and unwavering commitment to our promises, 
        our products deliver on their word, offering reliability and quality you can count on.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label='View details' />
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center'>
        <img
          src={trust}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain'
        />
      </div>
    </section>
  );
};

export default SuperQuality;