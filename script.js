document.addEventListener('DOMContentLoaded', () => {
    const keys = document.querySelector('.keys');
    const display = document.querySelector('.display .expression');
  
    let expression = '';
    let result = '';
  
    keys.addEventListener('click', event => {
      if (!event.target.matches('button')) return;
  
      const key = event.target;
      const keyValue = key.textContent;
  
      if (!isNaN(keyValue) || keyValue === '.') {
        expression += keyValue;
      } else if (keyValue === 'C') {
        expression = '';
        result = '0';
      } else if (keyValue === '=') {
        try {
          result = eval(expression.replace('×', '*').replace('÷', '/'));
          display.textContent = result;
          expression = '';
          return;
        } catch (error) {
          display.textContent = 'Error';
          expression = '';
          return;
        }
      } else {
        expression += ` ${keyValue} `;
      }
  
      display.textContent = expression;
    });
  });

  