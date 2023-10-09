function calculateBMI(){
  let unitOptions = ["standard", "metric"];
  let weight;
  let height;
  let bmi;

  alert("Welcome to BMI Calculator");

  do{
    unitChoice = prompt("Enter Standard | Enter Metric")
    unitChoiceLower = unitChoice.toLowerCase();
  } while (!unitOptions.includes(unitChoiceLower));

  if(unitChoice == "standard"){
    do{
      weight = parseFloat(prompt("Enter your weight in lbs"));
    } while (Number.isNaN(Number(weight)) || weight <= 0);

    do{
      height = parseFloat(prompt("Enter your height in inches"));
    } while (Number.isNaN(Number(height)) || height <= 0);

  } else if (unitChoice == "metric"){
    do{
      height = parseFloat(prompt("Enter your height in meters"));
    } while (Number.isNaN(Number(height)) || height <= 0);
  }
  
  
  
}
calculateBMI();