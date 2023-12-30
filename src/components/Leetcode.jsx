import React, { useState } from 'react';
import CodeHighlight from './CodeHighlight';
import CodeLink from './CodeLink';
import useFetch from './usefetch';
import SearchBox from './Search';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import ScrollToTopButton from './ScrollToTop';

const Leetcode = () => {
  const { data, loading, error } = useFetch();
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  if (loading) {
    return( 
      <>
      <div className='absolute inset-0 bg-black opacity-50 '></div>

        <div className="flex justify-center items-center h-screen">
          <div  className="" disabled>Loading...</div>
        </div>
      </>
    )
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
    <section className="relative">
      <div className="flex ">
        <div className={ `z-10 h-full md:h-auto md:relative md:w-1/3 lg:w-1/4 bg-gray-800 text-white ease-linear delay-100 duration-5000 ${isOpen ? "nav-menu active top-0" : "nav-menu top-0"}`}>
          <div className="sticky top-16 p-4 overflow-y-scroll h-screen ">
            <h2 className="text-lg md:text-xl">Leetcodes</h2>
            <ul className="mt-2 pl-4 space-y-3 mb-16">
              <CodeLink data={data} results={results} />
            </ul>
            <div className='absolute top-0 right-0 p-4 md:hidden' onClick={handleClick} >
              <IoCloseSharp fontSize={30} className='text-gray-100' />
            </div>
          </div>
        </div>
        <div className='md:hidden relative bg-gray-900'>
            <div className="p-4 sticky top-16 " >
              
                <span className="text-gray-700 " onClick={handleClick}>
                 <GiHamburgerMenu fontSize={30} className='text-gray-300' />
                </span>
                           
            </div>
        </div>
        <div className="flex-1 overflow-y-auto p-4 ml-1/4 ">
          <h1 className="text-lg md:text-2xl capitalize text-center font-bold">Leetcode for JavaScript</h1>
          <div className='w-full mx-2 sm:w-3/4  sm:mx-auto'>
                <div className='flex justify-center'>
                  <SearchBox data={data} results={results} setResults={setResults} />
                </div>
          </div>
          <CodeHighlight data={data} results={results}/>
        </div>
      </div>
    </section>
    <ScrollToTopButton/>
    </>
  );
};

export default Leetcode;
