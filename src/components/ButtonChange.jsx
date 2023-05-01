import React from 'react';

const ButtonChange = ({ changeQuote, color }) => {
  return (

    <a className='waves-effect waves-teal btn-flat pulse' onClick={changeQuote} style={{ background: color }}>
      NEXT {'>>'}      </a>

  );
};

export default ButtonChange;