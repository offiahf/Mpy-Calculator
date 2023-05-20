const primaryForm = document.querySelector('.primary-form');
const mssgDisplay = document.querySelector('.output');
const currentYear = document.querySelector('.currentYear');
const carYear = document.querySelector('.carYear');
const mileage = document.querySelector('.mileage');
const output = document.querySelector('.output');

// REGEX PATTERN
const yearPattern = /^[0-9]{4}$/;
const mileagePattern = /^[0-9]{3,7}$/;

// Instead of adding event listener to each input field used event listener

  primaryForm.addEventListener('keyup', e =>{
    e.preventDefault();
    if(yearPattern.test(currentYear.value)){
      currentYear.style.outline = '4px solid green';
    }
    else{
      currentYear.style.outline = '4px solid red';
    }
    if(yearPattern.test(carYear.value)){
    carYear.style.outline = '4px solid green';
    }
    else{
      carYear.style.outline = '4px solid red';
    }
    if(mileagePattern.test(mileage.value)){
      mileage.style.outline = '4px solid green';
    }
    else{
      mileage.style.outline = '4px solid red';
      }
})

// SUBMIT EVENT
primaryForm.addEventListener('submit', e =>{
  e.preventDefault();
  let age = primaryForm.currentYear.value - primaryForm.carYear.value;
  let mpy = primaryForm.mileage.value / age;
  if(primaryForm.currentYear.value == '' || primaryForm.carYear.value == '' ||  primaryForm.mileage.value == ''){
    output.innerHTML = `<h2>Error please enter numbers</h2>`;
    output.style.background = 'red'
    output.style.translate = '0'
  }
 else{
  output.innerHTML = `<h2>You drive ${Math.trunc(mpy)} per year</h2>`;
  output.style.background = 'green'
  output.style.translate = '0'
 }

})




