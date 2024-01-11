import { convertStringNumber } from './convertStringNumber.js';
import { OverlayScrollbars } from './overlayscrollbars.esm.min.js';

const financeForm = document.querySelector('.finance__form'); 
const financeAmount = document.querySelector('.finance__amount'); 
const financeReport = document.querySelector('.finance__report');
const report = document.querySelector('.report');

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

financeReport.addEventListener('click', () => {
    report.classList.add('report__open');
})

OverlayScrollbars(report, {});   