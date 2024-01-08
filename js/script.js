import {convertStringNumber} from './convertStringNumber.js';

const financeForm = document.querySelector('.finance__form'); 
const financeAmount = document.querySelector('.finance__amount'); 

let amount = 0;

financeAmount.textContent = amount;

financeForm.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const typeOperation = e.submitter.dataset.typeOperation;
    
    const changeAmount = Math.abs(convertStringNumber(financeForm.amount.value));  
    
    let totalAmount = 0;

    if (typeOperation === 'income') {
        amount += changeAmount; 
    }

    if (typeOperation === 'expenses') {
        amount -= changeAmount;
    }

    financeAmount.textContent = `${amount.toLocaleString()}$`;

})