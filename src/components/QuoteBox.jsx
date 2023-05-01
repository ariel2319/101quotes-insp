//que esté centrado, el cuál debe mostrar una cita al azar al momento de cargar la aplicación.
import quotes from '../quotes.json'
import React from 'react';
import ButtonChange from './ButtonChange';

const QuoteBox = ({/* author, quote */pos, color, color2, changeQuote }) => {

  const quote = `${quotes[pos].quote}`;
  const author = `${quotes[pos].author}`;

  document.body.style = `background: ${color}`

  return (
    <div className='card blue-grey darken-1' style={{ padding: "3px" }}>
      <h1 style={{ color: color, textAlign: "justify" }} >{quote}</h1>

      <div className='author-align'>
        <h2 style={{ color: color2 }}>{author}</h2>
      </div>
      {/* <button onClick={changeQuote} style={{background: color}}><i class="fa-solid fa-retweet" ></i></button> */}
      <ButtonChange changeQuote={changeQuote} color={color2} />
    </div>
  );
};

export default QuoteBox;