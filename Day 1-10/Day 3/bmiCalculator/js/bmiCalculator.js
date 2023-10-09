function calculateBMI(){
  let weightUnitChoice = ["lbs", "kg"];
  let heightUnitChoice = ["in", "m"];

  let height;

  alert("Welcome to BMI Calculator");

  do{
    getWeight = prompt("Enter unit for weight lbs, kg")
  } while (!weightUnitChoice.includes(getWeight));

  do{
    height = parseFloat(prompt("Enter your height in inches"));
  } while (Number.isNaN(Number(height)) || height <= 0);
  
  
}
calculateBMI();