import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Convertor from './components/Convertor'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


import Home from './components/home'
import LengthConvertor from './components/LengthConvertor'
import AreaConvertor from './components/AreaConvertor'
import TimeConvertor from './components/TimeConvertor'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/length',
    element: <LengthConvertor/>
  },
  {
    path: '/area',
    element: <AreaConvertor/>
  },
  {
    path: '/time',
    element:<TimeConvertor/>
  }
])

function App() {

  return (
    <main>

      <RouterProvider router={router}></RouterProvider>
    </main>
  )
}

export default App
