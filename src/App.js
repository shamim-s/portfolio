import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])

function App({children}) {
  return (
    <div className='lg:w-[1240px] mx-auto'>
      <RouterProvider router={router}>
          {children}
      </RouterProvider>
    </div>
  );
}

export default App;
