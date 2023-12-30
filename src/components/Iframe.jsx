import React, { useRef } from 'react'

const Iframe = () => {
    const iframeRef = useRef(null);
    const handleFullScreen = () => {
      const iframeElement = iframeRef.current;
  
      if (iframeElement) {
        if (iframeElement.requestFullscreen) {
          iframeElement.requestFullscreen();
        } else if (iframeElement.mozRequestFullScreen) {
          iframeElement.mozRequestFullScreen();
        } else if (iframeElement.webkitRequestFullscreen) {
          iframeElement.webkitRequestFullscreen();
        } else if (iframeElement.msRequestFullscreen) {
          iframeElement.msRequestFullscreen();
        }
      }
    };
  return (
    <section className='md:bg-gray-900 py-10'>
    <div className='pb-10'>
      <h1 className='text-3xl text-gray-300 capitalize text-center'>Javascript Leetcodes</h1>
    </div>
    <div className='container md:mx-auto'>
      <div className='bg-gray-300 py-4 '>
          <div className='flex flex-wrap justify-center pb-4'>
              <div className='relative m-3'>
              <iframe
              ref={iframeRef}
              height="100%" 
              src="https://www.youtube.com/embed/PbsNVXacaVU?list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma"
              title="LEETCODE 200 (JAVASCRIPT) | NUMBER OF ISLANDS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className='m-4'
            ></iframe>
            <button onClick={handleFullScreen} className="absolute top-2 left-2 bg-black text-white p-2 text-sm rounded">
              Full Screen
            </button>
              </div>
              <div className='relative m-3'>
              <iframe
              ref={iframeRef}
              height="100%" 
              src="https://www.youtube.com/embed/PbsNVXacaVU?list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma"
              title="LEETCODE 200 (JAVASCRIPT) | NUMBER OF ISLANDS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className='m-4'
            ></iframe>
            <button onClick={handleFullScreen} className="absolute top-2 left-2 bg-black text-white p-2 text-sm rounded">
              Full Screen
            </button>
              </div>
              <div className='relative m-3'>
              <iframe
              ref={iframeRef}
              height="100%" 
              src="https://www.youtube.com/embed/PbsNVXacaVU?list=PLrClazTqVpJlyey7Szwe_XX9meD4wl2Ma"
              title="LEETCODE 200 (JAVASCRIPT) | NUMBER OF ISLANDS"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className='m-4'
            ></iframe>
            <button onClick={handleFullScreen} className="absolute top-2 left-2 bg-black text-white p-2 text-sm rounded">
              Full Screen
            </button>
              </div>
          </div>
          <div className='capitalize text-center  mt-4'>
                <h6>press <span className='font-bold'>esc</span> to exit from fullscreen </h6>
          </div>
      </div>
    </div>

  </section>
  )
}

export default Iframe