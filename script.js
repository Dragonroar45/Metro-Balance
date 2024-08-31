let subButton = document.querySelector(".sub-btn");
let showBal = document.querySelector(".show-btn");
let inputField = document.querySelector(".input-val");
let submitBtn = document.querySelector(".submit");

let inputBal = document.querySelector(".bal-input");

let overwriteBalBtn = document.querySelector(".overwrite-bal");

let addBal = document.querySelector(".add-bal");

let submitBal = document.querySelector(".submit-bal");

let result = document.querySelector("p");

const bal = 140;
subButton.addEventListener("click", () => {
    if (localStorage.getItem("balance") === null){
        localStorage.setItem("balance", bal);
        let metroBal = localStorage.getItem("balance");
        metroBal -= 16;
        localStorage.setItem("balance", metroBal);
        result.textContent = `Fare deducted. New Balance ${metroBal}`;
    } else{
        let metroBal = localStorage.getItem("balance");
        metroBal -= 16;
        localStorage.setItem("balance", metroBal);
        result.textContent = `Fare deducted. New Balance ${metroBal}`;
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