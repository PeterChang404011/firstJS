const dice = document.getElementById('dice')
const point = document.getElementById('point')
const start = document.getElementById('start')

start.addEventListener('click', function () {
  const p = Math.floor(Math.random() * 6) + 1
  let diceTag = ''
  switch (p) {
    case 1:
      diceTag = '<i class="fas fa-dice-one"></i>'
      break
    case 2:
      diceTag = '<i class="fas fa-dice-two"></i>'
      break
    case 3:
      diceTag = '<i class="fas fa-dice-three"></i>'
      break
    case 4:
      diceTag = '<i class="fas fa-dice-four"></i>'
      break
    case 5:
      diceTag = '<i class="fas fa-dice-five"></i>'
      break
    case 6:
      diceTag = '<i class="fas fa-dice-six"></i>'
      break
    default:
      diceTag = '<i class="fas fa-dice-six"></i>'
  }
  point.innerHTML = p + '點'
  dice.innerHTML = diceTag
})
