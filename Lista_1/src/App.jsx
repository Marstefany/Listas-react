import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saudacao from './components/Saudacao'
import Nome from './components/Nome'
import Elementoif from './components/Elementoif'
import Idade from './components/Idade'
import Estudante from './components/Estudante'
import Nota from './components/Nota'
import Desconto from './components/Desconto'
import Online from './components/Online'
import Nivel from './components/Nivel'
import Botao from './components/Botao'

function App(){
  return (
    
    <main>
      <Saudacao/>
      <Nome nome= "Maria"/>
      <Elementoif autenticado={false}/> 
      <Idade idade={15}/>
      <Estudante Estudante={false}/>
      <Nota nota={73}/>
      <Desconto temDesconto={false}/>
      <Online online={false}/>
      <Nivel nivel= ""/>
      <Botao logado = {false}/>
    </main>
  )
}

export default App