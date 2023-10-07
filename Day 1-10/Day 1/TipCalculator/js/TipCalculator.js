function calculateTip(){
  let bill;
  let percentage;
  let percentageConvert;
  let tip;
  let totalAmount;
  let peopleSplit;
  
  do{
    bill = parseFloat(prompt("Enter the bill amount"));
  } while (Number.isNaN(Number(bill)) || bill <= 0);

  console.log(`Your current bill is ₱${bill}`);

  do{
    percentage = parseFloat(prompt("Enter percentage 0.01 ~ 0.99"));
  } while (Number.isNaN(Number(percentage)) || percentage <= 0 || percentage > 0.99);

  percentageConvert = percentage * 100;
  console.log(`The percentage of tip you will give is ${percentageConvert}%`);

  do{
    split = parseFloat(prompt("Enter how many people would split the bill?"));
  } while (Number.isNaN(Number(split)) || split <= 0);

  tip = bill * percentage;
  peopleSplit = Math.round(parseFloat(tip) / parseFloat(split));
  totalAmount = tip + bill;

  console.log(`Tip total: ₱${tip}`);
  console.log(`${split} People will split the tip`);
  console.log(`The tip per person is: ₱${peopleSplit}`);
  console.log(`Total amount: ₱${totalAmount}`);
}