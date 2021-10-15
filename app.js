const bill = document.getElementById('bill');
const tipPercent = document.querySelectorAll("#value");
const numberOfPeople = document.getElementById('number-input');

const tipAmout= document.getElementById('tip-amout');
const totalAmount = document.getElementById('total-amount');

const userInput = document.querySelector('.percentInput');

const warnInfor = document.querySelector(".warning-infor");
const inputWrapper = document.querySelector(".input-wrapper");



bill.addEventListener("click", calTip);
bill.addEventListener("onchange", calTip);






function calTip() {
    tipPercent.forEach(function (e) {
        let decimal = (e.innerHTML / 100).toFixed(2);
        e.addEventListener("click", function(){


       let y = ((bill.value * (decimal)) / (numberOfPeople.value)).toFixed(2);
            tipAmout.innerHTML = y;


            let total = (bill.value / y).toFixed(2);

            totalAmount.innerHTML = total;

            
            if (bill.value == " " && numberOfPeople.value == " ") {
                tipAmout.innerHTML = "0.00";
                totalAmount.innerHTML = "0.00";
                
      
            }
            })

        
    
        

      

        userInput.addEventListener("click", input);
        userInput.addEventListener("onchange", input);

        // FUNCTION TO CALCULATE THE TIP
         
        function input() {
            let x = ((bill.value * (userInput.value / 100)) / (numberOfPeople.value)).toFixed(2);
            tipAmout.innerHTML = x;


            let total = (bill.value / x).toFixed(2);

            totalAmount.innerHTML = total;

           
        }

          if (userInput.value === "") {
                tipAmout.innerHTML = "0.00";
                totalAmount.innerHTML = "0.00";
            
            }

       
    });


      if (numberOfPeople.value <= "0") {

                warnInfor.innerText = "Can't be zero"
                warnInfor.style.color = "red";
                inputWrapper.style.borderColor = "red";

                tipAmout.innerHTML = "0.00";
                totalAmount.innerHTML = "0.00";

           } else {
               warnInfor.innerText = ""
                warnInfor.style.color = "white";
                inputWrapper.style.borderColor = "white";
            }



   
}




const restBtn = document.getElementById("resetbtn");

restBtn.addEventListener("click", restCalc);

function restCalc() {
    bill.value = "";
    totalAmount.innerHTML = '0.00';
    tipAmout.innerHTML = '0.00';
    numberOfPeople.value = "";
    userInput.value =""
}

