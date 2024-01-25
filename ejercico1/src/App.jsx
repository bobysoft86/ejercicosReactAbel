import { useState } from 'react'
import './App.css'
import { Header } from './components/Header/Header'
import { Promotion } from './components/Promotion/Promotion'
import { Gallery } from './components/Gallery/Gallery'
import { Heading } from './components/Heading/Heading'
import data from './data'

const {header,promotion,gallery,heading}= data


function App() {

  return (
    <>
      <Header info={header}></Header>
      <Promotion info={promotion}></Promotion>
      <Heading></Heading>
      <Gallery info={gallery}></Gallery>
    </>
  )
}

export default App
