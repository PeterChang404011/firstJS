const money = document.getElementById('money')
const usd2twd = document.getElementById('usd2twd')
const twd2usd = document.getElementById('twd2usd')
const moneyDisplay = document.getElementById('moneyDisplay')

//1 USD 美金 = 28.53 TWD 新台幣
usd2twd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+money.value * 28.53).toFixed()
})

twd2usd.addEventListener('click', function () {
  moneyDisplay.innerHTML = (+money.value / 28.53).toFixed(2)
})
console.log(money, usd2twd, twd2usd, moneyDisplay)
