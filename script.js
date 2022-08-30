let bill = 0.0;
let numOfPeople = 1;
let tipPercent = 0.05;

const userBill = document.querySelector("#bill");
const userTip = document.querySelectorAll(".percent");
const userCustomTip = document.querySelector("#custom-tip");
const userNumOfPeople = document.querySelector("#people");
const reset = document.querySelector(".reset");
const results = document.querySelectorAll(".tip-amount");

userBill.addEventListener("input", setBillValue);
userTip.forEach( btn => {
    btn.addEventListener('click', handleClick);
});
userCustomTip.addEventListener("input", setTipCustomValue);
userNumOfPeople.addEventListener("input", setNumOfPeople);
reset.addEventListener("click", resetDocument);


function setBillValue() {
    bill = parseFloat(userBill.value);
    console.log(bill);

    calculateTip();
}

function handleClick(event) {
    userTip.forEach(btn => {
        btn.classList.remove("percent-active");

        if(event.target.innerHTML == btn.innerHTML) {
            btn.classList.add("percent-active");
            tipPercent = parseFloat(btn.innerHTML)/100;
        }

    });

    userCustomTip.value = '';

    calculateTip();
}

function setTipCustomValue() {
    // userCustomTip.value = userCustomTip.value.substring(0, userCustomTip.value.length-1);

    tipPercent = parseFloat(userCustomTip.value/100);

    userTip.forEach(btn => {
        btn.classList.remove('percent-active');
    });

    if (userCustomTip.value !== '') {
        calculateTip();
    }

    console.log(tipPercent);
}

function setNumOfPeople() {
    numOfPeople = parseFloat(userNumOfPeople.value);

    if (numOfPeople <=0) {
        
    }

    calculateTip();
}



function calculateTip() {
    let tipAmount = bill * tipPercent / numOfPeople;
    let total = tipAmount * numOfPeople;

    results[0].innerHTML = '$' + tipAmount.toFixed(2);
    results[1].innerHTML = '$' + total.toFixed(2);
}

function resetDocument() {
    userBill.value = '0.0';
    setBillValue();

    userTip[0].click();

    userNumOfPeople.value = "1";
    setNumOfPeople();

}

