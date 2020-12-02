const min = document.getElementById('min')
const max = document.getElementById('max')
const enter = document.getElementById('enter')
const hh = document.getElementById('hh')

enter.addEventListener('click', function () {
  const n = +min.value
  const x = +max.value
  const rand = Math.floor(Math.random() * (x - n + 1) + n)
  hh.innerHTML = rand
})
