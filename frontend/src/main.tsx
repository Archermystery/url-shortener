import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './router/Home';
import Info from './router/Info';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />
  },
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
