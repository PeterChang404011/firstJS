const message = document.getElementById('message')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  const rand = Math.floor(Math.random() * 100) + 1
  // 隨機產生一個1-100的整數
  if (rand <= 3 && rand >= 1) {
    message.innerHTML = '五星卡'
  }

  if (rand > 3 && rand < 21) {
    message.innerHTML = '四星卡'
  }
  // 21-100
  if (rand > 20) {
    message.innerHTML = '三星卡'
  }
})
