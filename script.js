let subButton = document.querySelector(".sub-btn");
let showBal = document.querySelector(".show-btn");
let inputField = document.querySelector(".input-val");
let submitBtn = document.querySelector(".submit");

let customFareButton = document.querySelector(".sub-bal");

let inputBal = document.querySelector(".bal-input");

let overwriteBalBtn = document.querySelector(".overwrite-bal");

let customDeleteBUtton = document.querySelector(".remove-btn");

let addBal = document.querySelector(".add-bal");

let submitBal = document.querySelector(".submit-bal");

let result = document.querySelector("p");

document.addEventListener("DOMContentLoaded", () => {
    let isCustomButtonEnabled = false;
    if (localStorage.getItem("isCustomButtonEnabled") === null){       //Check if button is not in localstorage meaning user hasn't made it yet
        localStorage.setItem("isCustomButtonEnabled", isCustomButtonEnabled);  //create button
    } else if (localStorage.getItem("isCustomButtonEnabled") === "true"){
        renderButton();
        renderDeleteButton();
    } else if (localStorage.getItem("isCustomButtonEnabled") === "false"){
        removeCustomFareButton();
        removeDeleteButton();
    }
})

function renderDeleteButton(){
    customDeleteBUtton.style.display = "inline-block";
}

function renderButton(){
    fromStation = localStorage.getItem("fromStation");
    toStation = localStorage.getItem("toStation");
    customFareButton.style.display = "inline-block";
    subButton.textContent = `Subtract Fare From ${fromStation} to ${toStation}`;
}

function removeCustomFareButton(){
    customFareButton.style.display = "none";
}

function removeDeleteButton(){
    customDeleteBUtton.style.display = "none";
    localStorage.setItem("isCustomButtonEnabled", "false");
}

customDeleteBUtton.addEventListener('click', () => {
    removeCustomFareButton();
    removeDeleteButton();
})

//Transaction Info functions
function addTransactionCustomButton(){
    let customButtonFare = localStorage.getItem("customFare");
}

const bal = 140;
subButton.addEventListener("click", () => {
    if (localStorage.getItem("balance") === null){
        localStorage.setItem("balance", bal);
        let metroBal = localStorage.getItem("balance");
        metroBal -= localStorage.getItem("customFare");
        localStorage.setItem("balance", metroBal);
        result.textContent = `Fare ${localStorage.getItem("customFare")} deducted. New Balance ${metroBal}`;
    } else{
        let metroBal = localStorage.getItem("balance");
        metroBal -= localStorage.getItem("customFare");
        localStorage.setItem("balance", metroBal);
        result.textContent = `Fare ${localStorage.getItem("customFare")} deducted. New Balance ${metroBal}`;
    }
});

showBal.addEventListener("click", () => {
    if (localStorage.getItem("balance") === null){
        result.textContent = "No fare deduction has happened"
    } else{
        let metroBal = localStorage.getItem("balance");
        result.textContent = `Metro Card Balance is ${metroBal}`;
    }
});

submitBtn.addEventListener("click", () => {
    if (localStorage.getItem("balance") === null){
        result.textContent = "Balance not found. Please manually add Balance."
    } else{
        let  customFare = inputField.value;
        inputField.value = "";
        let metroBal = localStorage.getItem("balance");
        metroBal -= customFare;
        localStorage.setItem("balance", metroBal);
        if (localStorage.getItem("isCustomButtonEnabled") === "false"){
            let userConfirm = confirm("Would you like to save this fare as a custom button?");
            if (userConfirm === true){
                let fromStation = prompt("From which station?", "");
                let toStation = prompt("To which station?", "");
                if (localStorage.getItem("customFare") === null){
                    localStorage.setItem("customFare", customFare);
                }
                localStorage.setItem("fromStation", fromStation);
                localStorage.setItem("toStation", toStation);
                localStorage.setItem("isCustomButtonEnabled", "true");
                customFareButton.style.display = "inline-block";
                subButton.textContent = `Subtract Fare From ${fromStation} to ${toStation}`;
                renderDeleteButton();

            }
        }
        result.textContent = `Custom Fare ${customFare} deducted. New Balance is ${metroBal}`;
    }
});

submitBal.addEventListener("click", () => {
    overwriteBalBtn.style.display = "flex";
    addBal.style.display = "flex";
});

overwriteBalBtn.addEventListener("click", () => {
    if (confirm("You are about to overwrite your balance. Are you sure?") === true){
        let balNew = inputBal.value;
        inputBal.value = "";
        localStorage.setItem("balance", balNew);
        result.textContent = `Balance Overwritten Successfully. New Balance is ${balNew}`;
    }
});

addBal.addEventListener("click", () => {
    let balNew = Number(inputBal.value);
    inputBal.value = "";
    let balOld = Number(localStorage.getItem("balance"));
    balDone = balNew + balOld;
    localStorage.setItem("balance", balDone);
    result.textContent = `Balance added. New balance is ${balDone}`;
})