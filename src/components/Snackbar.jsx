import React, { useState, useEffect } from 'react';


const Snackbar = ({ message }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (message) {
      // Show the Snackbar when a new message is received
      setIsVisible(true);

      // Hide the Snackbar after a timeout (e.g., 3 seconds)
      const timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 2000);

      // Clear the timeout when the component unmounts or a new message is received
      return () => clearTimeout(timeoutId);
    }
  }, [message]);

  return (
    <div className={`snackbar ${isVisible ? 'show' : ''}`} >
      {message}
    </div>
  );
};

export default Snackbar;
