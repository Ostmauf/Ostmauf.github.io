const cryptoValueElement1 = document.querySelector("#crypto-value-holder1");
const cryptoValueElement2 = document.querySelector("#crypto-value-holder2");
const containerElement = document.querySelector("#container");

let lastPrice = 0;

function createCoinElement(currencyName, symbol) {
    const contentElement = document.querySelector("#content");
  
    const cryptoHolderContainerElement = document.createElement("div");
    const cryptoNameHolderElement = document.createElement("span");
    const cryptoValueHolderElement = document.createElement("span");
  
    cryptoNameHolderElement.style.textContent = currencyName + " :"
  
    contentElement.append(cryptoNameHolderElement, cryptoValueHolderElement);
  
    // Här startar du setInterval grejjen för symbol
    setInterval(fetchPrice, 4000);
    async function fetchPrice() {
      // Du kan använda parametern symbol här och du kan även använda cryptoValueHolderElement här
      const response = await fetch(`https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=${symbol}`);
      const data = await response.json();
      cryptoValueElement.textContent = " $" + data.lastPrice;
  
    //   if (data.lastPrice > lastPrice) {
    //       cryptoValueElement.classList.remove("down");
    //       cryptoValueElement.classList.add("up");
    //   } else if(data.lastPrice < lastPrice) {
    //       cryptoValueElement.classList.add("down");
    //       cryptoValueElement.classList.remove("up");
    //   }
  
      lastPrice = data.lastPrice;
    }
  }
  
  // Sen använder du funktionen såhär:
  createCoinElement("BTCUSDT", "Bitcoin");







// fetchPrice2()
// setInterval(fetchPrice2, 4000, "ETHUSDT")

// async function fetchPrice2(cryptoCurrency) {
    
//     const response = await fetch(`https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=${cryptoCurrency}`);
//     const data = await response.json();
//     cryptoValueElement2.textContent = " $" + data.lastPrice;

//     if (data.lastPrice > lastPrice) {
//         cryptoValueElement2.classList.remove("down");
//         cryptoValueElement2.classList.add("up");
//     } else if(data.lastPrice < lastPrice) {
//         cryptoValueElement2.classList.add("down");
//         cryptoValueElement2.classList.remove("up");
//     }

//     lastPrice = data.lastPrice;

// }

    //let cryptoContainerElement = document.createElement("div");
    //containerElement.appendChild(cryptoContainerElement);



/*
async function fetchPrice() {
    const response = await fetch("https://testnet.binancefuture.com/fapi/v1/ticker/24hr?symbol=BTCUSDT");
    const data = await response.json();
    cryptoValueElement.textContent = " $" + data.lastPrice;

    if (data.lastPrice > lastPrice) {
        cryptoValueElement.classList.remove("down");
        cryptoValueElement.classList.add("up");
    } else if(data.lastPrice < lastPrice) {
        cryptoValueElement.classList.add("down");
        cryptoValueElement.classList.remove("up");
    }

    lastPrice = data.lastPrice;
}
*/