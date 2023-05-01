import { useState } from 'react'
import './App.css'
import Author from './components/Author'
import QuoteBox from './components/QuoteBox'
import quotes from './quotes.json'

function App() {
  //buscando número random para obtener la posición aleatoria

  const rdmIndex = Math.floor(Math.random() * quotes.length);
  const [pos, setPos] = useState(rdmIndex);

  const changeQuote = () => {
    const anotherRdm = Math.floor(Math.random() * quotes.length)
    setPos(anotherRdm)
  }

  //buscando el color random desde un arreglo con colores
  const colors = ["#845EC2", "#D65DB1", "#FF6F91", "#FF9671", "#3FC75F", "#F1F97a", "#3278aa"]
  const randomColorsIndex = Math.floor(Math.random() * colors.length - 1)

  return (
    <div className="App">
      <div className='title'>
        <h1>101 Inspirational Quotes</h1>
      </div>
      <div className='box'>
        <QuoteBox
          pos={pos}
          color={colors[randomColorsIndex]}
          color2={colors[randomColorsIndex + 1]}
          changeQuote={changeQuote}
        />
      </div>
      <div className='foot'>
        <Author />
      </div>
    </div>
  )
}

export default App
