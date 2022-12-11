import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Home from './Pages/Home/Home/Home';
import ProjectDetail from './Pages/ProjectDetail/ProjectDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/project/:id',
        element: <ProjectDetail/>,
        loader: ({params}) => fetch(`https://my-portfolio-server-teal.vercel.app/project/${params.id}`)
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
