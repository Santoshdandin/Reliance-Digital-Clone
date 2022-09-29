import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../Pages/Home"
import Login from "../Pages/Login"

function AllRoutes() {
  return (
    <div>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
    </Routes>

    </div>
    
    
  )
}

export default AllRoutes