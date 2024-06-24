import React from 'react';

const Button = ({onClick, color}) => {
  return (
    <button id="new-quote" onClick={onClick} style={{background: color}} className="text-white font-semibold px-4 py-2 rounded-md">New Quote</button>
  )
}

export default Button