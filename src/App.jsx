import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import './App.css'
import Root from './components/Root';
import NotFound from './components/NotFound';
import Home from './components/Home';
import Leetcode from './components/leetcode';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement:<NotFound/>,
    children: [
      { index: true, element: <Home/> },
      { path:"leetcode", element: <Leetcode/> },
    ],
  },
],
{basename:"/LeetCode/"}
);

function App() {
 
  return (
   <>
  
   <RouterProvider router={router} />
   
   
   
   </>
  )
}

export default App
