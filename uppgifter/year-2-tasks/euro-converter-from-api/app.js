const euroAmountInputElement = document.getElementById("euro-amount");
const UsdBtn = document.getElementById("USD-button");
const sekBtn = document.getElementById("SEK-button");
const nokBtn = document.getElementById("NOK-button");
const convertedMoneyHolderElement = document.getElementById("converted-money-holder");

UsdBtn.addEventListener("click", async (e) => {
    currencyConverter(e.target.dataset.currency, euroAmountInputElement.value)
});

sekBtn.addEventListener("click", async (e) => {
    currencyConverter(e.target.dataset.currency, euroAmountInputElement.value)
});

nokBtn.addEventListener("click", async (e) => {
    currencyConverter(e.target.dataset.currency, euroAmountInputElement.value)
});

async function currencyConverter(currency, amount) {
    const response = await fetch("https://v6.exchangerate-api.com/v6/7bda84d87af37b04569a5690/latest/EUR");
    const data = await response.json();
    
    const convertedNumber = (data.conversion_rates[currency] * amount).toFixed(2);
    convertedMoneyHolderElement.textContent = `Value in ${currency}: ${convertedNumber} ${currency}`;
}