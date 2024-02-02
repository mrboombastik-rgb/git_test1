
const screen = document.getElementById('pantalla');
const sumaButton = document.getElementById('suma-button');
const restButton = document.getElementById('rest-button');
const multiButton = document.getElementById('multi-button');
const divicionButton = document.getElementById('divicion-button');
const raizButton = document.getElementById('raiz-button');
const resultButton = document.getElementById('result-button');
const clearButton =document.getElementById('clear-button');
const conjuntoDebotones = document.querySelectorAll('button[data-number]');
const luzSuma = document.getElementById('luz-suma');
const luzResta = document.getElementById('luz-resta');
const luzmulti = document.getElementById('luz-multi');
const luzDivicion = document.getElementById('luz-div');

let num1 = 0;
let currentNumber = 0;
let resultado = 0;
let devOps= 0;

const traerNumers =() =>{ 
  num1 = event.target.value; 
  screen.value += num1;
};
 
conjuntoDebotones.forEach(event => {
  event.addEventListener('click', traerNumers);
});
//Operations
const operationSuma = () =>{
  currentNumber += Number(screen.value);
  console.log(currentNumber);
  screen.value = "";
  devOps = 1;
  luzSuma.classList.remove('icono');
  luzSuma.classList.add('ligth');

};

const operationMulti = ()=>{
  let secondNumber = Number(screen.value);

  if (currentNumber === 0) {
    currentNumber = secondNumber;
  } else {
    currentNumber *= secondNumber;
  }

  console.log(currentNumber);
  screen.value = "";
  devOps = 3;
  luzmulti.classList.remove('icono');
  luzmulti.classList.add('ligth');
};

const operacionDiv = ()=>{
  let secondNumber = Number(screen.value);
  if (currentNumber === 0) {
    currentNumber = secondNumber;
  } else {
    currentNumber /= secondNumber;
  }
  console.log(currentNumber);
  screen.value = "";
  devOps = 4;
  luzDivicion.classList.remove('icono');
  luzDivicion.classList.add('ligth');
};

const operationRest = ()=>{
  currentNumber =( Number(screen.value - currentNumber ));
  console.log(currentNumber);
  screen.value = "";
  devOps =2;
  luzResta.classList.remove('icono');
  luzResta.classList.add('ligth');
};

const clearOperation = ()=>{
  currentNumber = 0; 
  screen.value = "";
  resultado = 0;
  luzSuma.classList.remove('ligth');
  luzSuma.classList.add('icono');
  luzmulti.classList.remove('ligth');
  luzmulti.classList.add('icono');
  luzDivicion.classList.remove('ligth');
  luzDivicion.classList.add('icono');
  luzResta.classList.remove('ligth');
  luzResta.classList.add('icono');
};

const displayResultado = () =>{
resultado = currentNumber;
if( devOps === 1 ){
  resultado += Number(screen.value);
}else if(devOps === 2){
  resultado -= Number(screen.value);
}else if (devOps === 3  && screen.value){
  resultado *= Number(screen.value);
}else if(devOps=== 4 &&screen.value){
  resultado /= Number(screen.value)
};

screen.value = resultado;
console.log(`tu resultado es ${resultado}`)


};

sumaButton.addEventListener('click', operationSuma); 
resultButton.addEventListener('click',displayResultado);
clearButton.addEventListener('click',clearOperation);
restButton.addEventListener('click',operationRest);
multiButton.addEventListener('click', operationMulti);
divicionButton.addEventListener('click',operacionDiv);

    