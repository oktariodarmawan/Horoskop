const randomNumber = Date.now();
const el1 = document.createElement('p');
const box1 = document.getElementById('box1');
const textEl1 = document.getElementById('textEl1');

box1.appendChild(el1);

let result= document.getElementById('result');




function predict(){
   randomNumber
   result.innerHTML = textEl1.innerHTML;
   
    if(randomNumber %10 ===1){
        textEl1.innerHTML = "Sangat bagus"
    }

    if(randomNumber % 10 ===2 || randomNumber %10 ===3){
       textEl1.innerHTML = "Bagus"
    }
    if(randomNumber %10 ===4 || randomNumber % 10 ==5 ){
        textEl1.innerHTML = "Biasa aja"
    }

    if(randomNumber % 10 ===6 || randomNumber %10 ===7){
        textEl1.innerHTML= "Buruk"
    }
    if(randomNumber % 10 ===8 || randomNumber % 10===9 || randomNumber % 10 ===0){
       textEl1.innerHTML = "Sangat buruk"
    }
   
}


const btnPredict = document.getElementById('btn1');

btnPredict.addEventListener('click', function(){
    predict();
});
