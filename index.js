const elt = document.getElementById('calculator');
const calculator = Desmos.GraphingCalculator(elt);
document.querySelector('#btn').addEventListener('click', showEquation); 

function showEquation() {
  const equation = document.querySelector('#equation').value;
  calculator.setExpression({ id: 'graph1', latex: equation });
  console.log(calculator);
  calculator.getState(); 
}



