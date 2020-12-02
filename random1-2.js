const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  const p = Math.floor(Math.random() * 6) + 1
  let diceTag = ''

  const diceTagArray = ['one', 'two', 'three', 'four', 'five', 'six']
  dice.innerHTML = `<i class="fas fa-dice-${diceTagArray[p - 1]}"></i></div>`
  point.innerHTML = p + '點'

})
