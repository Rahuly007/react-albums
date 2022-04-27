import React from 'react'
import { Route, Routes } from 'react-router-dom'
import App from '../App'
import { Albums } from '../Components/Albums'
import { Home } from '../Components/Home'
import { Photos } from '../Components/Photos'


export const Router = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/albums/:id' element={<Albums/>} />
            <Route path='/photos/:id' element={<Photos/>} />
        </Routes>
    </div>
  )
}
