import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import CryptoData from './CryptoData'
import MyNavbar from './MyNavbar'
import News from './News'

const Layout = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MyNavbar/>}>
              <Route index element={<CryptoData/>}/>
              <Route path='/news' element={<News/>}/> 
            </Route>
        </Routes>
    </BrowserRouter>
    </>
  )
}

export default Layout