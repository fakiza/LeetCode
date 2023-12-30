import  { useEffect, useState, } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import Snackbar from './Snackbar';

const CodeHighlight = ({data,results}) => {  
  const [message, setMessage] = useState(''); 

  useEffect(() => {
  const codeElements = document.querySelectorAll('code');
  codeElements.forEach((codeElement) => {
    Prism.highlightElement(codeElement);
  });
  
  }, []);

const copyCode = () => {
  const codeElement = document.querySelector('.code-container code');
  const range = document.createRange();
  range.selectNode(codeElement);
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(range);
  document.execCommand('copy');
  window.getSelection().removeAllRanges();

  setMessage("Copied");
  setTimeout(() => {
    setMessage('');
  }, 3000);
};

  return (
    <>
   <div className='relative'>
    {(results.length!==0)
    ? (results && results.map((d)=>(
        <div key={d.id} id={d.id} className='my-5 code-container '>
           <h2 className='text-lg font-bold capitalize' >{d.description}</h2>
            <pre className="language-javascript ">
              <code className="language-javascript " >
                {d.contents}
              </code>
            </pre>
            <button className="absolute top-0 bg-gray-900 text-white py-1 px-2 rounded" onClick={copyCode}>Copy Code</button>
        </div>
        )))
       :(data && data.map((d)=>(
          <div key={d.id} id={d.id} className='my-5 code-container'>
             <h2 className='text-lg font-bold capitalize' >{d.description}</h2>
              <pre className="language-javascript ">
                <code className="language-javascript " >
                  {d.contents}
                </code>
              </pre>
              <button className="top-0 right-0 bg-gray-900 text-white py-1 px-2 rounded" onClick={copyCode}>Copy Code</button>
        </div>
          )))
        }
        <Snackbar message={message} />
        </div>
    </>
    
   
  );
};


export default CodeHighlight;
