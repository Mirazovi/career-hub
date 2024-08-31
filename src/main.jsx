import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root';
import Home from './Components/Home';
import Applied_jobs from './Components/Applied_jobs';
import Blogs from './Components/Blogs';
import JobDetails from './Components/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children : [
      {
        path:'/home',
        element:<Home></Home>
      },
      {
        path:'/applied',
        element:<Applied_jobs></Applied_jobs>,
        loader: ()=> fetch('jobs.json')
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>
      },
      {
        path:'/job/:id',
        element: <JobDetails></JobDetails>,
        loader: ()=> fetch('jobs.json')
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    </StrictMode>,
)
