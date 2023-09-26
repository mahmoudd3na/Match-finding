import { useState } from 'react'
import MatchCard from './components/MatchCard'
import './App.css'
import { RouterProvider,BrowserRouter, createBrowserRouter } from 'react-router-dom'
import MainPage from './components/MainPage'

const router = createBrowserRouter([
  {
    path:"/", 
    element:<MainPage />,
  }, 
  {
    path : "/game", 
    element: <MatchCard/>
  }
])

function App() {


  return (
    <>
    <RouterProvider router={router}/> 
    </>
  )
}

export default App
