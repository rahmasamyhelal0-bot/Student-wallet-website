document.addEventListener("DOMContentLoaded", function () {
    console.log("javascript is working");

    const expenses = JSON.parse(localStorage.getItem("expenses")) || [];

    const totalExpenses = expenses.reduce(function (total, expense) {
        return total + Number(expense.amount);
    }, 0);

    document.getElementById("total-expenses").textContent =
        totalExpenses + " EGP";

    const totalBalance = 3000;

    const remainingBalance = totalBalance - totalExpenses;

    const foodExpenses = expenses
        .filter(expense => expense.category.toLowerCase() === "food")
        .reduce((total, expense) => total + Number(expense.amount), 0);

    const transportationExpenses = expenses
        .filter(expense => expense.category.toLowerCase() === "transportation")
        .reduce((total, expense) => total + Number(expense.amount), 0);

    const educationExpenses = expenses
        .filter(expense => expense.category.toLowerCase() === "education")
        .reduce((total, expense) => total + Number(expense.amount), 0);

    const shoppingExpenses = expenses
        .filter(expense => expense.category.toLowerCase() === "shopping")
        .reduce((total, expense) => total + Number(expense.amount), 0);

    document.getElementById("food-expenses").textContent =
        foodExpenses + " EGP";

    document.getElementById("transportation-expenses").textContent =
        transportationExpenses + " EGP";

    document.getElementById("education-expenses").textContent =
        educationExpenses + " EGP";

    document.getElementById("shopping-expenses").textContent =
        shoppingExpenses + " EGP";

    document.getElementById("remaining-balance").textContent =
        remainingBalance + " EGP";

    document.getElementById("total-balance").textContent =
        totalBalance + " EGP";
});