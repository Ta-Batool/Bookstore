
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route, Link } from "react-router-dom";
function App() {

  return (
    <>
    <Navbar/>
      <main className='min-h-screen max-w-screenn-2xl mx-auto px-4 py-6 font-primary'>
      <Outlet/>
      </main>
    <footer>Footerr</footer>
    </>
  )
}

export default App
