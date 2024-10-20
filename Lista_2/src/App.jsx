import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mensagem from './components/Mensagem'
import Paragrafo from './components/Paragrafo'
import Lista from './components/Lista'
import Imagem from './components/Imagem'
import Botao from './components/Botao'
import Link from './components/Link'
import Titulo from './components/Titulo'
import Booleana from './components/Booleana'
import Textodiv from './components/Textodiv'
import Fragment from './components/Fragment'

function App(){
  return(
    <main>
      <Mensagem mensagem="Olá Mundo"/>
      <Paragrafo texto="Este é um paragrafo"/>
      <Lista itens={['Item 1', 'Item 2', 'Item 3']}/>
      <Imagem src={reactLogo} alt="React Logo"/>
      <Botao texto="Clique aqui"/>
      <Link href="https://reactjs.org/" texto="React.js"/>
      <Titulo texto="Título"/>
      <Booleana valor={false}/>
      <Textodiv texto="Este é um texto"/>
      <Fragment>
        <p>Este é um paragrafo</p>
        
      </Fragment>
    </main>
  )
}

export default App
