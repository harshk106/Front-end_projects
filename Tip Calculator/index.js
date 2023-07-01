const amountInput = document.getElementById("amnt");
const percentInput = document.getElementById("tip");
const btn = document.getElementById("percentage");
const totalSpan = document.getElementById("total");

function totalCost() {
    const amount = parseFloat(amountInput.value); // Convert amount to a number
    const percent = parseFloat(percentInput.value); // Convert percent to a number

    const tipValue = (amount * percent) / 100;
    const totalvalue = amount + tipValue;
    totalSpan.innerText = totalvalue.toFixed(2);

}

btn.addEventListener("click", totalCost);
