import { useState } from 'react'
import './styles/global.css'

export function App() {
  return (
    <>
      <h1 className='font-bold text-2xl text-gray-400'>Hello World</h1>
      <button className='bg-cyan-500 font-medium text-white px-8 py-1 rounded hover:bg-cyan-300 m-2'>Enviar</button>
    </>
  )
}
