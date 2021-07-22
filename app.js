const five = document.querySelector(".one");
const ten = document.querySelector(".two");
const fifteen = document.querySelector(".three");
const twentyFive = document.querySelector(".four");
const fifty = document.querySelector(".five");
const custom = document.querySelector(".custom");
const billAmount = document.getElementById("billamount");
const userAmount = document.getElementById("useramount");
const userInput = document.querySelector(".user-input")
const tipOutput = document.querySelector(".tip-output");
const totalOutput = document.querySelector(".total-output");
const reset = document.getElementById("reset");
const warning = document.querySelector(".warning");
const warningBill = document.querySelector(".warning-bill");
const warningBillTwo = document.querySelector(".warning-bill-two");
const tipWarning = document.querySelector(".tip-warning");


billAmount.addEventListener('click', () => {
    warningBill.style.display = "block";
    warningBillTwo.style.display = "none";
})
billAmount.addEventListener('change', () => {
    warningBill.style.display = "none";
    warning.style.opacity = "1";
    userInput.classList.toggle("warning-input");
    userInput.disabled = false;
})

reset.addEventListener('click', () => {
    userAmount.value = "";
    billAmount.value = "";
    tipOutput.innerHTML = "$" + "0.00";
    totalOutput.innerHTML = "$" + "0.00";
    tipWarning.style.opacity = "0";
    warning.style.opacity = "0";
    warningBill.style.display = "none";
    warningBillTwo.style.display = "none";
})

five.addEventListener('click', () => {
    if (billAmount.value == "" || billAmount.value === 0) {
        warning.style.opacity = "1"
        warningBillTwo.style.display = "block";
    } else {
        warning.style.opacity = "0"
        warningBillTwo.style.display = "none";
    }
})

userAmount.addEventListener('input', checkUserAmount);

function checkUserAmount() {
    if (userAmount.value === "0" || userAmount.value == "") {
        warning.style.opacity = "1";
        userInput.classList.toggle("warning-input");
    } else {
        warning.style.opacity = "0";
        warningBill.style.display = "none";
        userInput.classList.remove("warning-input");
        tipWarning.style.opacity = "1";
        five.addEventListener('click', () => {
            if (userAmount.value === "0" || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * 5 / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);

            }
        });

        ten.addEventListener('click', () => {
            if (userAmount.value === 0 || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * 10 / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);

            }
        });
        fifteen.addEventListener('click', () => {
            if (userAmount.value === "0" || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * 15 / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);
            }
        });
        twentyFive.addEventListener('click', () => {
            if (userAmount.value === "0" || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * 25 / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);

            }
        });
        fifty.addEventListener('click', () => {
            if (userAmount.value === "0" || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * 50 / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);

            }
        });
        custom.addEventListener('change', () => {
            if (userAmount.value === "0" || userAmount.value == "") {
                warningBill.style.display = "block";
                warning.style.opacity = "1";
                userInput.classList.toggle("warning-input");
            } else {
                const tip = billAmount.value * custom.value / 100;
                const tipPerson = parseFloat((tip / userAmount.value));
                tipOutput.innerHTML = "$" + tipPerson;
                const billPerson = parseFloat((billAmount.value / userAmount.value));
                totalOutput.innerHTML = "$" + (tipPerson + billPerson);

            }
        });
    }
}


