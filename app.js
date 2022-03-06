// income field 
const incomeInput = document.getElementById('income-money');
// expenses item ///////
const foodinput = document.getElementById('food');
const rentinput = document.getElementById('rent');
const clothesinput = document.getElementById('clothes');
// total expenses ///////
const expensesinput = document.getElementById('total-expenses');
// update balance 
const balanceinput = document.getElementById('balance-input');



document.getElementById('calculate-button').addEventListener('click' , function(){
//    income input field 

   const incomeInputValue = incomeInput.value;
   const incomeInputNumber = parseInt(incomeInputValue);
 
   if ( isNaN(incomeInputNumber)){
    const result = alert("DON'T THOUGHT YOU ARE CLEVER !!");
    return result;
     
   
  
   }
   if(  incomeInputNumber <= 0 ){
    return alert('UPDATE YOUR PROPER MONTHLY INCOME');
    }
    

  

// / Expenses money /////////
// food item //\

const foodinputValue = foodinput.value;
const foodinputNumber = parseFloat(foodinputValue);


if ( isNaN(foodinputNumber)){
  const result = alert("DON'T THOUGHT YOU ARE CLEVER !!");
  return result;
}


 if( foodinputNumber <= 0 ){
   return alert(' WAS YOU LIVE WITHOUT EATING FOOD PREVIOUS MONTH ! S0,UPDATE YOUR PROPER FOOD EXPENSE !! ');
}



// // // rent item...../////


  let rentinputValue = rentinput.value;

  
 let  rentinputNumber = parseFloat (rentinputValue);
     
    
if ( isNaN(rentinputNumber)){
     const result = alert("DON'T THOUGHT YOU ARE CLEVER !!");
     return result;
    }  
    
   
    

 if( rentinputNumber <= 0 ){
      return  alert('FIRST MAKE YOUR OWN HOME ! THEN STAY WITHOUT RENT ! S0,UPDATE YOUR PROPER RENT EXPENSE !!');}

 
    
  
 
  

    
// // // clothes item ----/////////

const clothesinputValue = clothesinput.value;
const clothesinputNumber = parseFloat(clothesinputValue);

if ( isNaN(clothesinputNumber)){
  const result = alert("DON'T THOUGHT YOU ARE CLEVER !!");
  return result;
}

if( clothesinputNumber <= 0 ){
    return alert("PEOPLE CAN'T LIVE WITHOUT CLOTHES ! SO,UPDATE YOUR PROPER CLOTHES EXPENSE !!");
    
}


// total expenses ///////

 const expensesinputText = expensesinput.innerText;
const totalExpenses = foodinputNumber + rentinputNumber + clothesinputNumber;
const totalamountExpenses = totalExpenses;

 if (incomeInputNumber < totalamountExpenses){
 return alert('ARE YOU MAD YOUR INCOME IS LOWER THAN YOUR EXPENSES!!')
  expensesinput.innerText ='00';
}
else{
  expensesinput.innerText =totalExpenses;
}



 


// update balance 

const balanceinputText = balanceinput.innerText;

if(incomeInputNumber < totalExpenses){
  alert ("YOU CAN'T  EXPENSES MORE THAN YOUR INCOME !!");

}
else if (incomeInputNumber > totalExpenses){
    const totalBalance = incomeInputNumber - totalExpenses;
    balanceinput.innerText = totalBalance;
}



});


// last part -------------------------------------
//////////////////////////////////////////////////////
// savings amount ////////////////////////////////////////
 
document.getElementById('save-button').addEventListener('click' , function(){
    const saveInput = document.getElementById('save-input');
    const saveInputValue = saveInput.value;
     
    
    // save amount ///////////



    const saveAmountInput = document.getElementById('save-amount');
    const saveAmountInputText = saveAmountInput.value;



    
       if  ( saveInputValue >= 101 ){
        return alert(" YOU CAN'T  SAVE MONEY MORE HIGHER THAN YOUR BALANCE !!" );

       }
       else if(  saveInputValue <= 0  ){
        saveAmountInput.innerText = "jello"
        return  alert("YOU CAN'T  SAVE MONEY MORE LOWER THAN 1% !!" );
       } 
 
        else if (saveInputValue <= 100) {
            const saveAmountNumber = ( balanceinput.innerText   * saveInputValue) / 100;
            saveAmountInput.innerText =parseInt(saveAmountNumber) ;
         }
        else if( typeof saveInputValue === 'string') {
          return  alert("DON'T THOUGHT YOU ARE CLEVER !!");
         }
    
    
// reamaining balance part /////////////////////////

        const reamainingBalanceInput = document.getElementById('balance-remaining');
        const reamainingBalanceText = reamainingBalanceInput.innerText;
        const reamainingBalance = balanceinput.innerText - saveAmountInput.innerText ;
        reamainingBalanceInput.innerText = parseInt(reamainingBalance);
 
})