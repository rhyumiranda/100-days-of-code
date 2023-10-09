function calculateBMI(){
  let height;

  do{
    height = parseFloat(prompt("Enter your height in inches"));
  } while (Number.isNaN(Number(height)) || height <= 0);
  
  
}
calculateBMI();