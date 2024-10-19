import './App.css'
import { Route,Routes } from 'react-router-dom'
import Home from './Page/Home'
import Landing from './Page/Landing'
import Header from './components/Header'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/home' element={<Home/>} />
    </Routes>
    <ToastContainer/>
    <Footer/>
    </>
  )
}

export default App
