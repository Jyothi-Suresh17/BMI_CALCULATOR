

function bmiCalculate(){
  let userWeight=document.getElementById("weight").value;
  let userHeight=document.getElementById("height").value;
  console.log(userWeight);
  console.log(userHeight);
  let bmi=userWeight/(userHeight**2)
  result.value=Math.round(bmi);

  let Statement=document.getElementById("bmireslt");
Statement.innerHTML=`Your BMI is ${bmi}`;

if(result.value<18.5){
  Statement.innerHTML=`Your BMI is ${bmi}.You are Under weight`; 
 Statement.style.color="blue";

 
}
else if(result.value>18.5 && result.value<24.9){
  Statement.innerHTML=`Your BMI is ${bmi}.Your weight is normal`; 
  Statement.style.color="green"
}
else if(result.value>25 && result.value<29.9){
  Statement.innerHTML=`Your BMI is ${bmi}.You are Over weight`; 
  Statement.style.color="yellow"
}
else{
  Statement.innerHTML=`Your BMI is ${bmi}.You are Obese`; 
  Statement.style.color="red"
}

  
}

function scroll(){
  let nv=document.getElementById("navm");
  nv.style.background.color="white"
}
