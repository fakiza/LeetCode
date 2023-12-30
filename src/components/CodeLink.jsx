import { Link as ScrollLink } from 'react-scroll';


const CodeLink = ({data , results}) => { 
  return (
    <>
   {(results.length!==0)
   ?(results && results.map((d) => (
    <li key={d.id} className='duration-300 capitalize list-disc text-xs '>
        <ScrollLink 
        to={d.id} 
        activeClass='active_link'  
        offset={-100} 
        spy={true} >
          {d.description}
        </ScrollLink>  
    </li>
    )))
   :(data && data.map((d) => (
      <li key={d.id} className='duration-300 capitalize list-disc text-sm'>
          <ScrollLink 
          to={d.id} 
          activeClass='active_link'  
          offset={-100} 
          spy={true} >
            {d.description}
          </ScrollLink>  
      </li>
    )))
    }
    </>
   
  )
}

export default CodeLink
