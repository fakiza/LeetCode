import {Link, NavLink, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import "./css/Header.css"
import logo from '/LeetLogo.png'

export default function Header() {
  
  const [isOpen, setIsOpen] = useState(false);
 
  let location = useLocation()
   useEffect(()=> {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if(elem) {
        elem.scrollIntoView({behavior: "smooth"});    

     }          
        } else {
  window.scrollTo({top:0,left:0, behavior: "smooth"})
                }
    }, [location,])

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  
  // bg-[#e4e2dd]
  return ( 
  
    <header className="shadow sticky top-0 z-50 bg-gray-300 duration-200 ">
      <nav className=" bg-transparent border-gray-200 px-4  ">
        <div className="flex  justify-between items-center mx-auto max-w-screen-xl h-16">
          <div className="flex flex-wrap">
            <div className="logo_image">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  className="mr-3 h-12"
                  alt="Logo"
                  
                />
              </Link>
          </div>
         </div>
         <div className=" flex md:hidden  items-center " onClick={handleClick}>
              {!isOpen ? (
                <span className="text-gray-700">
                  <GiHamburgerMenu fontSize={30} />
                </span>
              ) : (
                <span className="text-gray-700">
                  <IoCloseSharp fontSize={30} />
                </span>
              )}
            </div>
          <div
            className={`flex lg:w-auto capitalize ${
              isOpen ? "nav-menu active" : "nav-menu"
            } `}
            id="mobile_view_menu"
          >
             <ul className='flex flex-col md:flex-row mt-4 md:mt-0' >
                        
                                <li className='px-6 '>
                                    <NavLink to="/"  
                                    className={({ isActive }) =>
                                    `block  duration-200 capitalize font-bold py-2 md:py-0
                                    ${isActive ? "text-white  border-b-2 border-gray-300 md:text-black md:border-0 md:border-b-2 md:border-black  " : "text-gray-300 md:text-gray-900"}  hover:text-white hover:border-b-2 hover:border-gray-300 hover:md:text-gray-900  hover:md:border-b-2 hover:md:border-black `
                                    }
                                    onClick={handleClick}>Home</NavLink> 
                                </li>
                                <li className='px-6 '>
                                    <NavLink to="/leetcode"  
                                    className={({ isActive }) =>
                                    `block  duration-200 capitalize font-bold py-2 md:py-0
                                    ${isActive ? "text-white  border-b-2 border-gray-300 md:text-black md:border-0 md:border-b-2 md:border-black  " : "text-gray-300 md:text-gray-900"}  hover:text-white hover:border-b-2 hover:border-gray-300 hover:md:text-gray-900  hover:md:border-b-2 hover:md:border-black `
                                    }
                                    onClick={handleClick}>Leetcode</NavLink> 
                                </li>
                                <li className='px-6 '>
                                    <NavLink to="/#explore"  
                                    className={
                                    `block  duration-200 capitalize font-bold py-2 md:py-0 text-gray-300 md:text-gray-900
                                    hover:text-white hover:border-b-2 hover:border-gray-300 hover:md:text-gray-900  hover:md:border-b-2 hover:md:border-black `
                                    }
                                    onClick={handleClick}>explore</NavLink> 
                                </li>
                       
             </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
