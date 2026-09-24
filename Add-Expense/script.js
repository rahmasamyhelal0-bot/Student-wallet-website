const expenseForm = document.querySelector(".expense-form");
const successMessage = document.getElementById("successMessage");

const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");

expenseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    document.getElementById("amountError").style.display = "none";
    document.getElementById("categoryError").style.display = "none";
    document.getElementById("dateError").style.display = "none";

    let hasError = false;

    if (amount.value === "") {
        document.getElementById("amountError").textContent = "Please enter the amount.";
        document.getElementById("amountError").style.display = "block";
        hasError = true;
    }

    if (category.value === "") {
        document.getElementById("categoryError").textContent = "Please select a category.";
        document.getElementById("categoryError").style.display = "block";
        hasError = true;
    }

    if (date.value === "") {
        document.getElementById("dateError").textContent = "Please select a date.";
        document.getElementById("dateError").style.display = "block";
        hasError = true;
    } else {
        const today = new Date().toISOString().split("T")[0];

        if (date.value > today) {
            document.getElementById("dateError").textContent = "Date cannot be in the future.";
            document.getElementById("dateError").style.display = "block";
            hasError = true;
        }
    }

    if (hasError) {
        return;
    }

    const description = document.getElementById("description").value;

    const expense = {
        amount: Number(amount.value),
        category: category.value,
        date: date.value,
        description: description
    };

    let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    expenses.push(expense);

    localStorage.setItem("expenses", JSON.stringify(expenses));

    successMessage.classList.add("show");

    expenseForm.reset();

    setTimeout(function() {
        successMessage.classList.remove("show");
        window.location.href = "../transactions-floder/transactions.html";
    }, 2000);
});