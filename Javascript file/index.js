let age = document.getElementById("age");
let height = document.getElementById("height");
let weight = document.getElementById("weight");
let male = document.getElementById("m");
let female = document.getElementById("f");
let form = document.getElementById("form");




function calculate(){
 
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;

  }else if(age.value<2 && age.value>120){
    modal.style.display = "block";
    modalText.innerHTML = `Please Enter Valid Age`;
  }
  else{
    countBmi();
  }

}


function countBmi(){
 let p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);
      
  var result = '';
  if (bmi<16) {
    result = 'Severe Thickness';
  } else
  if(16<=bmi&&bmi<=16.9){
    result = 'Moderate Thickness';
     }else if(17<=bmi&&bmi<=18.4){
        result = 'Mild Thickness';
     }
     else if(18.5<=bmi&&bmi<=24.9){
    result = 'Healthy';
     }else if(25<=bmi&&bmi<=29.9){
    result = 'Overweight';
     }else if(30<=bmi&&bmi<=34.9){
    result = 'Obese class I';
     }else if(35<=bmi&&bmi<=39.9){
    result = 'Obese class II';
     }else if(bmi>40){
        result = 'Obese class III';
     }
}
function clr(){

}





