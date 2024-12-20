
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <nav>Nabar</nav>
      <main className='min-h-screen max-w-screenn-2xl mx-auto px-4 py-6 '>
      <Outlet/>
      </main>
    <footer>Footerr</footer>
    </>
  )
}

export default App
