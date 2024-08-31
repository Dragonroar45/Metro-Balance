let subButton = document.querySelector(".sub-btn");
let showBal = document.querySelector(".show-btn");
let inputField = document.querySelector(".input-val");
let submitBtn = document.querySelector(".submit");

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
})