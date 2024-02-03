const gritScratch = document.getElementById('grid');
const clearButton = document.getElementById('clear');
const aplyButton = document.getElementById('aply');
const inputRows = document.getElementById('giveRows');
const inputColums = document.getElementById('giveColum');


let generatedDivs = `<div class="row" data-name="div"></div>
`;
let empyGenerator = [];

const giveValue = (numero1, numero2) =>{
  empyGenerator = [];
    gritScratch.style.setProperty("grid-template-columns",`repeat(${numero1}, 1fr)`);
    gritScratch.style.setProperty("grid-template-rows",`repeat(${numero2}, 1fr)`);
    let numDivs=Number(numero1 * numero2);
    for(let x = 0; x < numDivs; x++){
      empyGenerator += generatedDivs;
    };
    gritScratch.innerHTML= empyGenerator;

    const alldivs = document.querySelectorAll('div[data-name]');
    
    alldivs.forEach((div) => {
     div.addEventListener('mouseover', () => {
      div.classList.remove('row');
      div.classList.add('row-bk');
  });
});      
};

  aplyButton.addEventListener('click', ()=>{
    giveValue(inputColums.value,inputRows.value )
    inputColums.value="";
    inputRows.value="";
  });

clearButton.addEventListener('click',()=>{
  const alldivs = document.querySelectorAll('div[data-name]');
  alldivs.forEach((div)=>{
    div.classList.remove('row-bk');
    div.classList.add('row')
  });
 
})