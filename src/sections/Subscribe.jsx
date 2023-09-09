import {whatsappchat} from "../assets/icons"

const Subscribe = () => {
  return (
    <section
      id='contact-us'
      className='max-container flex justify-between items-center max-lg:flex-col gap-10'
    >
      <h3 className='text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold'>
        Message us on
        <span className='text-emerald-500'> Whatsapp </span> to buy the products.
      </h3>
      <div className='lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 rounded-full'>
        <a href="https://wa.me/+919890718000?text=I%27m%20interested%20in%20buying%20protein%20from%20lifestyle%20Nutrition.%20Can%20you%20guys%20call%20me.">
          <img src={whatsappchat} alt="Whatsapp logo"/>
        </a>
      </div>
    </section>
  );
};

export default Subscribe;