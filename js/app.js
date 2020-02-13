import 'babel-polyfill';
import { http } from './HTTP';
import { ui } from './UI';

const getSummaryAmount = (incomes, expenses) => {
  const totalIncomes = incomes.reduce((sum, income) => {
    return (sum += income.amount);
  }, 0);
  const totalExpenses = expenses.reduce((sum, expense) => {
    return (sum += expense.amount);
  }, 0);
  return totalIncomes - totalExpenses;
};

const render = () => {
  console.log(123);
  Promise.all([
    http.get('http://localhost:5000/api/v1/incomes'),
    http.get('http://localhost:5000/api/v1/expenses')
  ]).then((resp) => {
    console.log(resp);
    const incomes = resp[0].data;
    const expenses = resp[1].data;

    ui.displayIncomes(incomes);
    ui.displayExpenses(expenses);
    ui.displaySummary(getSummaryAmount(incomes, expenses));
  });
};

document.getElementById('form').addEventListener('submit', (e) => {
  e.preventDefault();
  const type = document.querySelector('input[type=radio]:checked').value;
  const amount = document.querySelector('#amount').value;
  const where = document.querySelector('#where').value;
  const date = document.querySelector('#when').value;
  http
    .post(`http://localhost:5000/api/v1/${type}`, {
      amount,
      source: where,
      date
    })
    .then((d) => console.log(d));
  console.log(amount);
});

document.addEventListener('DOMContentLoaded', render);
