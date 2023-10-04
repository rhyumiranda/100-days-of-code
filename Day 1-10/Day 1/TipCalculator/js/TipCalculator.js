//Things to do:

// 1. Create a function that would acccept the amount of bill
// 2. Create ... that would accept tip percentage
      // >> Convert integer form into decimal
// 3. Print the amount of tip
// 4. Print amount of bill + tip

// Additional Features 
// 1. People who will split the bill + tip
// 2. Print tip per person

function calculateTip(){
  
}

function getAmountOfBill(){
  let amount = parseFloat(prompt("Kindly enter the amount of your bill. Thank you!"));
  return amount;
}

function getTipPercentage(){
  let percentage;
  
  do{
    percentage = parseFloat(prompt("Please enter the percentage of tip you want to give."));
  } while (Number.isNaN(Number(percentage)));
  
  return percentage;
}

const amountOfBill = getAmountOfBill();
const tipPercentage = getTipPercentage();

console.log(typeof(amountOfBill));
console.log(typeof(tipPercentage));