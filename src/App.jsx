import React from 'react'
import { Navbar } from './components/Navbar'
import "./App.css"
import { Content } from './components/Content'
import { Footer } from './components/Footer'
export const App = () => {
  return (
    <>
    <Navbar/>
    <Content/>
    <Footer/>
    </>
  )
}
