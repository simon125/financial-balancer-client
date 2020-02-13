class UI {
  constructor() {
    this.$incomesTable = document.getElementById('incomesTable');
    this.$expensesTable = document.getElementById('expensesTable');
    this.$summary = document.getElementById('summary');
  }

  displayIncomes(incomes) {
    let output = '';
    incomes.forEach((income) => {
      output += `
            <tr>
            <th scope="row">
              <input type="checkbox" name="" id="" />
            </th>
            <td>${income.source}</td>
            <td class="px-0">${income.date}</td>
            <td>${income.amount}</td>
            <td>&times;</td>
          </tr>
            `;
    });
    this.$incomesTable.innerHTML = output;
  }

  displayExpenses(expenses) {
    let output = '';
    expenses.forEach((expense) => {
      output += `
            <tr>
            <th scope="row">
              <input type="checkbox" name="" id="" />
            </th>
            <td>${expense.storeName}</td>
            <td class="px-0">${expense.date}</td>
            <td>${expense.amount}</td>
            <td>&times;</td>
          </tr>
            `;
    });
    this.$expensesTable.innerHTML = output;
  }

  displaySummary(summaryAmount) {
    let className = '';
    let prefix = '';

    if (summaryAmount >= 0) {
      className = 'text-success';
      prefix = '+ ';
    } else {
      className = 'text-danger';
    }

    this.$summary.classList.remove(['text-success']);
    this.$summary.classList.remove(['text-danger']);

    this.$summary.classList.add([className]);
    this.$summary.textContent = prefix + summaryAmount;
  }
}

export const ui = new UI();
