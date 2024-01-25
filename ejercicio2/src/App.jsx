import { useState } from 'react'
import './App.css'
import { Heading } from './components/Heading/Heading'
import data from './data'

const {reviews} = data;

console.log("soy app",reviews);

function App() {
  
{}

  return (
    <>
     <Heading info={reviews}></Heading>
    </>
  )
}

export default App
