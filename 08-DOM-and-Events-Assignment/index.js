let state = {
    balance: 1000,
    income: 400,
    expense: 100,
    transactions: [
        
    ]
}

let balanceEl = document.querySelector('#balance');
let incomeEl = document.querySelector('#income');
let expenseEl = document.querySelector('#expense');
let transactionsEl = document.querySelector('#transaction');
let incomeBtnEl = document.querySelector('#incomeBtn');
let expenseBtnEl = document.querySelector('#expenseBtn');
let nameInputEl = document.querySelector('#name');
let amountInputEl = document.querySelector('#amount');

function init() {
    let localState = JSON.parse(localStorage.getItem('expenseTrackerState'));

    if (localState !== null) {
        state = localState;
    }
    
    updateState();
    initListeners();
}

function uniqueId() {
    return Math.round(Math.random() * 1000000);
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

// DRY - Do not repeat yourself

function onAddIncomeClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'income');
}

function addTransaction(name, amount, type) {
    if (name !== '' && amount !== '') {
        let transaction = { 
            id: uniqueId(),
            name: name, 
            amount: parseInt(amount), 
            type: type
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('Please enter valid data');
    }

    nameInputEl.value = '';
    amountInputEl.value = '';
}

function onAddExpenseClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense');
}

function onDeleteClick(event) {
    let id = parseInt(event.target.getAttribute('data-id'));
    let deleteIndex;
    for (let i = 0; i < state.transactions.length; i++) {
        if (state.transactions[i].id === id) {
            deleteIndex = i;
            break;
        }
    }

    state.transactions.splice(deleteIndex, 1);

    updateState();
}

function updateState() {
    let balance = 0,
        income = 0,
        expense = 0,
        item;

    for (let i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];

        if (item.type === 'income') {
            income += item.amount;
        } else if (item.type === 'expense') {
            expense += item.amount;
        }
    }

    balance = income - expense;

    state.balance = balance;
    state.income = income;
    state.expense = expense;

    localStorage.setItem('expenseTrackerState', JSON.stringify(state))

    render();
}

function render() {
    balanceEl.innerHTML = `Ksh.${state.balance}`;
    incomeEl.innerHTML = `Ksh.${state.income}`;
    expenseEl.innerHTML = `Ksh.${state.expense}`;

    let transactionEl, containerEl, amountEl, item, btnEl;

    transactionsEl.innerHTML = '';

    for (let i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name);

        transactionsEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-amt');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
        }
        amountEl.innerHTML = `Ksh.${item.amount}`;

        containerEl.appendChild(amountEl);

        btnEl = document.createElement('button');
        btnEl.setAttribute('data-id', item.id);
        btnEl.innerHTML = 'X';

        btnEl.addEventListener('click', onDeleteClick);

        containerEl.appendChild(btnEl);

        transactionEl.appendChild(containerEl);
    }
}

init();