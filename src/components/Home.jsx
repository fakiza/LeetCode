import React from 'react';
import Explore from './Explore';
import ScrollToTopButton from './ScrollToTop';
import Iframe from './Iframe';

const Home = () => {
 
  return (
    <>
    <section className='navbar_container h-72 sm:h-96  md:h-[calc(100vh-64px)]'>
    <div className="absolute inset-0 bg-black opacity-50  "></div>
      <div className="absolute inset-0 flex justify-center items-center flex-col text-white  font-bold uppercase
      transition ease-linear animate-fadeInDown delay-50  duration-300 ">
          <h1 className='text-2xl md:text-5xl '>Leet<span className='text-orange-700'>code</span></h1><br /> 
          <div className='text-2xl md:text-5xl '>  
                <pre><span className='capitalize'>{"{<Javascript/>}"}</span></pre>
          </div>
      </div>
    </section>
    <Iframe />
    <section id='explore' className="  relative h-[600px] md:h-[800px] overflow-hidden">
        <div className=' bg-gray-900 absolute top-[70%] md:top-0 w-full h-96 md:h-[400px] transform origin-[100%] skew-y-[12deg]'></div>
        <div className='bg-gray-300 absolute top-[10%] md:top-[50%] w-full h-96 md:h-[430px] transform origin-[100%] -skew-y-[12deg]'></div>
        <Explore />
    </section>
    <ScrollToTopButton/>
    </>
  )
}

export default Home;