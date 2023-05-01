import React from 'react'
import "./Assets/main.css"
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import { AuthContextProvider } from './Context/AuthContext'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Account from './Pages/Account'
import ProtectedRoute from './components/ProtectedRoute'



const App = () => {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='account' element={<ProtectedRoute> <Account /> </ProtectedRoute>} />
        </Routes>
      </AuthContextProvider>
    </>
  )
}

export default App
