import './Alphabet.css';
import React, { useState } from "react";

const Alphabet = () => {
  const [text, setText] = useState('');
  let [totalSum, setTotalSum] = useState();

  const handleChange = (e) => {
    setText(e.target.value);
  }

  const handleClick = () => {
    const word = text;
    const wordArray = word.split("");
    const dict_values = {};

    wordArray.forEach(function(letter) {
      if(dict_values[letter]) {
        dict_values[letter] = dict_values[letter] + 1;
      } else {
        dict_values[letter] = 1;
      }
    })    

    totalNumbers(dict_values)
  }

  const totalNumbers = (dict_values) => {
    const values = Object.values(dict_values);
    let total = 0;
    let maxNumberABC = 26;

    values.sort((a, b) => a - b).reverse().forEach(function(quantity) {
      total = total + maxNumberABC * quantity;       
      maxNumberABC = maxNumberABC - 1; 
    })

    setTotalSum(total);
  }
  return (
    <div className="container">
      <div className="content-form">
        <input type="text" placeholder="Ingresar Texto" onChange={handleChange}/>
        <input 
          type="button" 
          value="Evaluar"
          onClick={handleClick}
        />
      </div>
      <div className="result">
        {totalSum}
      </div>
    </div>
    
  )
}

export default Alphabet;