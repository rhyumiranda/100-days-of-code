function getUnitChoice(){
  const units = ["standard", "metric"]
  const userInput = false;

  alert("Welcome to BMI Calculator");

  while(userInput == false){
    const choice = prompt("Standard or Metric?");
    if (choice == null){
      continue;
    }

    const choiceLower = choice.toLowerCase();
    if(units.includes(choiceLower)){
      userInput  == true;
      return choiceLower;
    }
  }
}

function calculateBMI(){
  const unitChoice = getUnitChoice();
  let weight;
  let height;
  let bmi;

  if(unitChoice == "standard"){
    do{
      weight = parseFloat(prompt("Enter your weight in lbs"));
    } while (Number.isNaN(Number(weight)) || weight <= 0);

    do{
      height = parseFloat(prompt("Enter your height in inches"));
    } while (Number.isNaN(Number(height)) || height <= 0);

    height *= height;
    bmi = (703 * weight) / height;
    bmiRound = bmi.toFixed(2);

  } else if (unitChoice == "metric"){
    do{
      weight = parseFloat(prompt("Enter your weight in kg"));
    } while (Number.isNaN(Number(weight)) || weight <= 0);

    do{
      height = parseFloat(prompt("Enter your height in meters"));
    } while (Number.isNaN(Number(height)) || height <= 0);
    
    height *= 2;
    height *= height;
    bmi = (weight / height);
    bmiRound = bmi.toFixed(2);
  }

    console.log(`Your bmi result is ${bmiRound}`);

    return bmiRound;

  
}

function checkBMI(bmiResult){
  const userBMI = calculateBMI();
  if(userBMI >= 30){
    return console.log("Obesity");
  } else if (userBMI >= 25){
    return console.log("Over weight");
  } else if (userBMI >= 18.5){
    return console.log("Normal weight");
  } else if (userBMI <= 18.49){
    return console.log("Underweight");
  }
}

checkBMI()