//Things to do:

// 1. Create a function that would acccept the amount of bill
// 2. Create ... that would accept tip percentage
      // >> Convert integer form into decimal
// 3. Print the amount of tip
// 4. Print amount of bill + tip

// Additional Features 
// 1. People who will split the bill + tip
// 2. Print tip per person

function calculateTip(amountOfBill, tipPercentage){
  console.log(`The tip you are willing to give is ₱${tip}`);
  console.log(`Total amount including the tip is ₱${totalAmount}`);
}

const getTip = (amountOfBill, tipPercentage) =>{

  return amountOfBill * tipPercentage;
}

const getTotalAll = () => {

  return tip + amountOfBill;
}

function getAmountOfBill(){
  let amount;

  do{
    amount = parseFloat(prompt("Enter the bill amount"));
  } while (Number.isNaN(Number(amount)) || amount <= 0);
  console.log(`Your current bill amount is ₱${amount}`);

  return amount;
}

function getTipPercentage(){
  let percentage;
  let percentageConvert;

  do{
    percentage = parseFloat(prompt("Enter percentage 0.01 ~ 0.99"));
  } while (Number.isNaN(Number(percentage)) || percentage <= 0 || percentage > 0.99);

  percentageConvert = percentage * 100;
  console.log(`The percentage of tip you want to give is ${percentageConvert}%`);

  return percentage;
}

const amountOfBill = getAmountOfBill();
const tipPercentage = getTipPercentage();
const tip = getTip();
const totalAmount = getTotalAll();

console.log(amountOfBill);
console.log(tipPercentage);
console.log(tip);
console.log(totalAmount);

