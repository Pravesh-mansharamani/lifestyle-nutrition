import { shoes, statistics } from "../constants";
import { Button, ShoeCard } from "../components";
import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bestProduct1 } from "../assets/protein";

const Hero = () => {
  const [bestProductImg, setBestProductImg] = useState(bestProduct1); 

  return (
    <section
      id='home'
      className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container'
    >
      <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full  max-xl:padding-x pt-28'>
        <p className='text-xl font-montserrat text-sky-500'>
          Our Best Selling Products
        </p>

        <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading-[82px] font-bold'>
          <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>
            The
          </span>
          <br />
          <span className='text-sky-500 inline-block mt-3'>LifeStyle</span> Nutrition
        </h1>
        <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-7 sm:max-w-sm'>
          Discover all your quality, comfort, and innovation products for
          your active life.
        </p>

        <Button label='Shop now' iconURL={arrowRight} />

        <div className='flex justify-start items-start flex-wrap w-full mt-3 gap-16'>
          {statistics.map((stat, index) => (
            <div key={index}>
              <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
              <p className='leading-7 font-montserrat text-slate-gray'>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-hero bg-cover bg-center '>
        <img
          src={bestProductImg}
          alt='shoe colletion'
          width={510}
          height={402}
          className='object-contain relative z-10'
        />

        <div className='flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6'>
          {shoes.map((image, index) => (
            <div key={index}>
              <ShoeCard
                index={index}
                imgURL={image}
                changeBigShoeImage={(shoe) => setBestProductImg(shoe)}
                bigShoeImg={bestProductImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero