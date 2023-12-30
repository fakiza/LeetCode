import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    // Check if the user has scrolled down enough to show the button
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    // Attach the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-full transition-opacity ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTopButton;
