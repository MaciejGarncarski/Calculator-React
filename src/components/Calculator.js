import React, { useState } from 'react';

const Calculator = ({mathSign}) => {
    const [firstNumber, setFirstNumber] = useState(0);
    const [secondNumber, setSecondNumber] = useState(0);
    let a = Number(firstNumber);
    let b = Number(secondNumber);
    let result;


    
    switch(mathSign){
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = a / b;
            break;

        default: result = a + b;
    }

    if(isNaN(result) || result === Infinity) result = "Error"


    return (
        <main className="calculator">
            <input type="number" onChange={(el) => setFirstNumber(el.target.value)}></input>
            <input type="number" onChange={(el) => setSecondNumber(el.target.value)}></input>
            <div className="result"><h1>Wynik:</h1><h2>{Math.round(result * 100) / 100}</h2></div>
        </main>
    )
}

export default Calculator;