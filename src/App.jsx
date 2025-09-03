import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import { Route, Routes } from 'react-router-dom'
import Signup from './auth/Signup'
import Login from './auth/Login'
import Profile from './pages/Profile'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/sign-up" element={<Signup />} />
    <Route path="/login" element={<Login/>} />
    <Route path="/profile" element={<Profile />} />

    </Routes>
    </>
  )
}

export default App
