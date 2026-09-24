document.addEventListener("DOMContentLoaded", () => {
    const tableBody = document.getElementById("tableContent");
    const clearBtn = document.getElementById("clearBtn");
    
    if (!tableBody) return;

    function loadTransactions() {
        let expenses = [];
        try {
            expenses = JSON.parse(localStorage.getItem("expenses")) || [];
        } catch (e) {
            expenses = [];
            localStorage.removeItem("expenses");
        }

        tableBody.innerHTML = "";

        if (expenses.length === 0) {
            tableBody.innerHTML = `
                <tr class="no-data-row">
                    <td colspan="4" style="text-align: center; padding: 20px; color: #777;">No transactions found yet.</td>
                </tr>
            `;
            return;
        }

        expenses.forEach(item => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${item.date || "-"}</td>
                <td><span class="badge-cat">${item.category || "-"}</span></td>
                <td><span class="price-text">-${item.amount || 0} EGP</span></td>
                <td>${item.description || "-"}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    
    loadTransactions();

    if (clearBtn) {
        clearBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to clear all transactions?")) {
                localStorage.removeItem("expenses");
                loadTransactions();
            }
        });
    }
});