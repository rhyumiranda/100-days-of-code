//Things to do:

// 1. Create a function that would acccept the amount of bill /
// 2. Create ... that would accept tip percentage /
      // >> Convert integer form into decimal  /
// 3. Print the amount of tip / 
// 4. Print amount of bill + tip /

// Additional Features 
// 1. People who will split the bill + tip
// 2. Print tip per person

function calculateTip(){
  let amount;
  let percentage;
  let percentageConvert;
  let tip;
  let totalAmount;
  
  do{
    amount = parseFloat(prompt("Enter the bill amount"));
  } while (Number.isNaN(Number(amount)) || amount <= 0);

  console.log(`Your current bill is ₱${amount}`);

  do{
    percentage = parseFloat(prompt("Enter percentage 0.01 ~ 0.99"));
  } while (Number.isNaN(Number(percentage)) || percentage <= 0 || percentage > 0.99);

  percentageConvert = percentage * 100;
  console.log(`The percentage of tip you will give is ${percentageConvert}%`);

  tip = amount * percentage;
  totalAmount = tip + amount;

  console.log(`Tip total: ₱${tip}`);
  console.log(`Total amount: ₱${totalAmount}`);
}