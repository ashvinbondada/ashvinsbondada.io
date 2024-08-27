import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import AboutPage from "./pages/AboutPage"
import { NavBarPage } from './pages/NavBarPage'
import { NavBar } from './components/NavBar'

const router = createBrowserRouter([
  {
    path: "/",
    element: <NavBarPage />,
    children: [
      {
        path: "about",
        element: <AboutPage />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
