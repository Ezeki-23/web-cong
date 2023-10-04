import ItemsContainer from "../components/Footer/ItemsContainer";
import SocialIcons from "../components/Footer/SocialIcons";
import { Icons } from "../components/Footer/Menus";
import Carousel from './Carousel'
import { images } from './images'

function Hero () {
  return (
    <div>
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
        src='open-bible.jpg'
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] text-base sm:text-xl m-auto absolute p-4'>
          <p>Iglesia Adventista del Séptimo Día</p>
          <h1 className='font-bold text-3xl sm:text-7xl drop-shadow-2xl'>
            Congregación Nueva Esperanza
          </h1>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-base sm:text-xl'>
            ¡Bienvenido/a a la Website de nuestra congregación! Aquí encontrarás un lugar de adoración a Dios, contención espiritual y ayuda comunitaria.  
          </p>
        </div>
      </div>
    </div>
    <div className="w-full h-full bg-gray-200">
    <h1 className="pt-8 mb-8 sm:font-medium text-center italic font-normal sm:text-2xl text-base">¡Visítenos! Estamos en Florencio Fernández 4746.
    </h1>
    <div className="flex justify-center pb-12">
    <div className="sm:max-w-4xl max-w-md">
      <Carousel autoSlide={true}>
        {images.map(image => (
          <img src={image.name} key={image.id}/>
        ))}
      </Carousel>
    </div>
    </div>
  </div>
  <footer className="bg-orange-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="md:text-4xl text-xl md:mb-0 mb-6 lg:leading-normal font-semibold
         md:w-2/5"
        >
          <span className=" text-yellow-300">¡Gracias</span> por pasar por aquí!
        </h1>
      </div>
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2023 Congregación Nueva Esperanza. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  </div>
  );
}

export default Hero;
