import { Link } from 'react-router-dom';
import Card from './Card';
import './css/Explore.css';
const blue = "#19ceef";
const green = "#c4e6a6";
const pink = "#fff2d0";

const Explore = () => {
  return (
    <>
      <div className='relative  md:top-[250px]  '>
            <div className='flex flex-col md:flex-row justify-center items-center'  >
            <div className='md:w-1/3 relative flex justify-center md:order-2  '>
                  <div className='card-container relative '>
                  <div className='card-base  '>
                      <div className='explore-card '>
                        <div className=' card relative '><Card  color={pink}/></div>
                      </div>
                      <div className='explore-card '>
                        <div className=' card relative'><Card  color={green}/></div>
                      </div>
                      <div className='explore-card '>
                        <div className='card relative'><Card  color={blue}/></div>
                      </div>
                      
                    </div>
                  </div>
                    
                </div>
                <div className='md:w-3/4 md:order-1'>
                    <div className=' w-3/4 mx-auto md:mx-4 text-center' >
                        <h2 className=' text-2xl py-4 font-bold'>Start Explore</h2>
                        <h5>Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.</h5>
                        <div className='text-lg text-blue-700 py-4'><Link to="/explore">Get Started</Link></div>
                    </div>
                </div>
                
                </div>
        </div>
    </>
  )
}

export default Explore;