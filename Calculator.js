import React, { useState } from 'react';
import Display from './Display';
import Keypad from './Keypad';
import * as math from 'mathjs';

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (label) => {
    if (label === '=') {
      try {
        setDisplayValue(math.evaluate(displayValue).toString());
      } catch {
        setDisplayValue('Error');
      }
    } else if (label === 'C') {
      setDisplayValue('');
    } else if (label === 'fact') {
      const fact = (n) => (n <= 1 ? 1 : n * fact(n - 1));
      setDisplayValue(fact(parseInt(displayValue, 10)).toString());
    } else if (label === 'rnd') {
      setDisplayValue(Math.random().toString());
    } else if (['sin', 'cos', 'tan', 'log', 'exp', 'ln', 'sqrt'].includes(label)) {
      handleAdvancedFunctions(label);
    } else {
      setDisplayValue(displayValue + label);
    }
  };

  const handleAdvancedFunctions = (label) => {
    try {
      let result;
      switch (label) {
        case 'sin':
          result = math.sin(math.evaluate(displayValue));
          break;
        case 'cos':
          result = math.cos(math.evaluate(displayValue));
          break;
        case 'tan':
          result = math.tan(math.evaluate(displayValue));
          break;
        case 'log':
          result = math.log10(math.evaluate(displayValue));
          break;
        case 'ln':
          result = math.log(math.evaluate(displayValue));
          break;
        case 'exp':
          result = math.exp(math.evaluate(displayValue));
          break;
        case 'sqrt':
          result = math.sqrt(math.evaluate(displayValue));
          break;
        default:
          result = 'Error';
      }
      setDisplayValue(result.toString());
    } catch {
      setDisplayValue('Error');
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Keypad onButtonClick={handleButtonClick} />
    </div>
  );
};

export default Calculator;
