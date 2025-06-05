const currencies = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75,
    RWF: 9.86,
    NRA: 1200,
    SHL: 2900,
};

const fromSelect = document.getElementById('from');
const toSelect = document.getElementById('to');

for (let code in currencies) {
    let option1 = document.createElement('option');
    let option2 = document.createElement('option');
    option1.value = option2.value = code;
    option1.text = option2.text = code;
    fromSelect.appendChild(option1);
    toSelect.appendChild(option2);
}
fromSelect.value = "USD";
toSelect.value = "EUR";

function convertCurrency() {
    const from = fromSelect.value;
    const to = toSelect.value;
    const amount = parseFloat(document.getElementById('amount').value);

    if (!amount || amount <= 0) {
        document.getElementById('result').textContent = "Please enter a valid amount.";
        return;
    }

    if (currencies[from] && currencies[to]) {
        const result = (amount * currencies[to]) / currencies[from];
        document.getElementById('result').textContent = `${amount} ${from} = ${result.toFixed(2)} ${to}`;
    } else {
        document.getElementById('result').textContent = "Currency not found.";
    }
}
