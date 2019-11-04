import React, { useState } from 'react';
import { numberWithCommas, isFloat } from './helpers';

import './App.css';

function App() {

  const [currentVal, setCurrentVal] = useState('0');
  const [tempVal, setTempVal] = useState();
  const [totalVal, setTotalVal] = useState();

  const [status, setStatus] = useState(false);
  const [operator, setOperator] = useState('');

  const calcTotal = (total) => {
    setTotalVal(isFloat(total) ? total.toFixed(1) : total);
    setCurrentVal(isFloat(total) ? total.toFixed(1) : total);
  }

  const handleOperator = (evt) => {

    const inputKey = evt.target.dataset.key;

    switch (inputKey) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':

        if (status) {
          setTempVal(inputKey);
          setCurrentVal(inputKey);
          setStatus(!status)
        } else {
          setCurrentVal(currentVal + inputKey);
          setTempVal(currentVal + inputKey);
        }

        if (String(currentVal).indexOf('.') === -1 && String(currentVal).startsWith('0')) {
          setCurrentVal(inputKey);
          setTempVal(inputKey);
        }

        break;

      case '+':

        if (typeof tempVal !== 'undefined') {
          if (status === false) {
            let totalMulty = (typeof totalVal !== 'undefined') ? parseFloat(totalVal) + Number(tempVal) : Number(tempVal);
            calcTotal(totalMulty);
          }
          setStatus(true);
          setOperator('+');
        }

        break;

      case '-':
        if (typeof tempVal !== 'undefined') {
          if (status === false) {
            let totalMulty = (typeof totalVal !== 'undefined') ? parseFloat(totalVal) - Number(tempVal) : Number(tempVal);
            calcTotal(totalMulty);
          }
          setStatus(true);
          setOperator('-');
        }

        break;

      case '*':

        if (typeof tempVal !== 'undefined') {
          if (status === false) {
            let totalMulty = (typeof totalVal !== 'undefined') ? parseFloat(totalVal) * Number(tempVal) : Number(tempVal);
            calcTotal(totalMulty);
          }
          setStatus(true);
          setOperator('*');
        }

        break;

      case '/':

        if (typeof tempVal !== 'undefined') {
          if (status === false) {
            let totalMulty = (typeof totalVal !== 'undefined') ? parseFloat(totalVal) / Number(tempVal) : Number(tempVal);
            calcTotal(totalMulty);
          }
          setStatus(true);
          setOperator('/');
        }

        break;

      case '=':

        if (operator === '+') {
          let totalEqual = parseFloat(totalVal) + Number(tempVal);
          calcTotal(totalEqual);
        }

        if (operator === '-') {
          let totalEqual = parseFloat(totalVal) - Number(tempVal);
          calcTotal(totalEqual);
        }

        if (operator === '*') {
          let totalEqual = parseFloat(totalVal) * Number(tempVal);
          calcTotal(totalEqual);
        }

        if (operator === '/') {
          let totalEqual = parseFloat(totalVal) / Number(tempVal);
          calcTotal(totalEqual);
          if (!isFinite(totalEqual)) {
            setStatus(true);
            setTotalVal();
          }
        }

        break;

      case 'comma':

        if (currentVal.indexOf('.') === -1) {
          setCurrentVal(currentVal + '.');
          setTempVal(currentVal + '.');
        }

        break;

      case 'inv':

        if (!currentVal.startsWith('-')) {
          setCurrentVal(`-${currentVal}`);
          setTempVal(`-${tempVal}`);
        } else {
          setCurrentVal(currentVal.replace('-', ''));
          setTempVal(tempVal.replace('-', ''));
        }

        break;

      case 'clear':

        setCurrentVal('0');
        setTempVal();
        setTotalVal();
        setStatus(false);

        break;

      default:
      //Nothing
    }
  }

  return (
    <div className="calc">
      <div className="result">
        <div className="current">
          <h1>{numberWithCommas(currentVal)}</h1>
        </div>
      </div>
      <div className="buttons">
        <div data-key="clear" onClick={(evt) => handleOperator(evt)}>c</div>
        <div data-key="inv" onClick={(evt) => handleOperator(evt)}>+ / -</div>
        <div data-key="%" onClick={(evt) => handleOperator(evt)}>%</div>
        <div data-key="*" onClick={(evt) => handleOperator(evt)}>x</div>
        <div data-key="7" onClick={(evt) => handleOperator(evt)}>7</div>
        <div data-key="8" onClick={(evt) => handleOperator(evt)}>8</div>
        <div data-key="9" onClick={(evt) => handleOperator(evt)}>9</div>
        <div data-key="/" onClick={(evt) => handleOperator(evt)}>/</div>
        <div data-key="4" onClick={(evt) => handleOperator(evt)}>4</div>
        <div data-key="5" onClick={(evt) => handleOperator(evt)}>5</div>
        <div data-key="6" onClick={(evt) => handleOperator(evt)}>6</div>
        <div data-key="-" onClick={(evt) => handleOperator(evt)}>-</div>
        <div data-key="1" onClick={(evt) => handleOperator(evt)}>1</div>
        <div data-key="2" onClick={(evt) => handleOperator(evt)}>2</div>
        <div data-key="3" onClick={(evt) => handleOperator(evt)}>3</div>
        <div data-key="+" onClick={(evt) => handleOperator(evt)}>+</div>
        <div data-key="0" onClick={(evt) => handleOperator(evt)}>0</div>
        <div data-key="comma" onClick={(evt) => handleOperator(evt)}>.</div>
        <div data-key="=" onClick={(evt) => handleOperator(evt)}>=</div>
      </div>
    </div>
  );
}

export default App;
