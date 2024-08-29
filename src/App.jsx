
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';


function App() {
  

  return (
    <div className='background'>
      <Navbar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer />
  </div>
  )
}

export default App
