import { useState } from 'react';
import { HiMenuAlt3 } from 'react-icons/hi';
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    if(!nav) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'scroll'
    }
  };

  return (
    <div className='absolute w-full flex justify-between p-4 items-center'>
      <h1 className='text-white font-bold text-2xl z-20'>¡Maranata!</h1>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white cursor-pointer' size={25} />
      <div
        className={
          nav
            ? 'ease-in duration-300 fixed text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex-col z-10'
            : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'
        }
      >
        <ul className='flex flex-col fixed w-full h-full items-center justify-center'>
          <li className='font-bold sm:text-3xl text-lg p-8'>
            <Link to="/">Principal</Link>
            </li>
          <li className='font-bold sm:text-3xl text-lg p-8'>
          <Link to="/about">¿Quiénes somos?</Link>
          </li>
          <li className='font-bold sm:text-3xl text-lg p-8'>
          <Link to="/services">Horarios de culto</Link>
          </li>
          <li className='font-bold sm:text-3xl text-lg p-8'>
            <Link to="/questions">Preguntas frecuentes</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;