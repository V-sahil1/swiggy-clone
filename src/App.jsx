import { useState } from 'react'
import './App.css'
import Header from './Componet/Header'
import Toprest from "./Componet/Toprest";
import Category from './Componet/Category'
import Online from './Componet/Online';
function App() {
  return (
    <>
    <Header/>
    
    <Category/>
    <Toprest  />
  
    <Online/>
  
 
    </>
  )
}

export default App
