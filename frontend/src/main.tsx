import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './router/Home';
import Info from './router/Info';
import List from './router/List';
import SingIn from './router/SingIn';
import SingUp from './router/SingUp';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/info",
    element: <Info />
  },
  {
    path: "/urls",
    element: <List />
  },
  {
    path: "singin",
    element: <SingIn />
  },
  {
    path: "singup",
    element: <SingUp />
  }
]);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
