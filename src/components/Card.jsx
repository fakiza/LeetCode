import { IoMdArrowDropright } from "react-icons/io";

const Card = ({color}) => {
  return (
    <div className=''>
        <div className='h-52 md:h-64 m-4 shadow-lg rounded-xl  transition animate-floating  ' >
        <div className='h-3/4 rounded-t-xl ' style={{backgroundColor:`${color}`}}>
            <div className='flex flex-wrap p-4 '>
              <div className='w-1/2 h-2 md:h-3 rounded bg-zinc-100 m-2'></div>
              <div className='w-1/3 h-2 md:h-3 rounded bg-zinc-100 my-2'></div>
              <div className='w-1/3 h-5 md:h-7 rounded bg-zinc-100 m-2 mr-0'></div>
              <div className='w-1/3 h-5 md:h-7 rounded bg-zinc-100 m-2'></div>
            </div>
        </div>
        <div className='relative'>
            <div className='absolute -top-5 md:-top-8 right-3 w-10 h-10 md:w-16 md:h-16 bg-zinc-200 rounded-full'>
              <IoMdArrowDropright  className=' text-xl translate-x-[50%] translate-y-[50%] md:text-[50px] md:translate-x-[20%] md:translate-y-[10%] text-zinc-400'/>
            </div>
        </div>
        <div className='bg-zinc-100 h-1/4 rounded-b-xl border border-zinc-100'>
            <div className='w-1/2 h-6 md:h-8 rounded bg-zinc-200 m-2'></div>
        </div>
        </div>
    </div>
  )
}

export default Card
