const tel = document.getElementById('tel')
const name = document.getElementById('name')
const address = document.getElementById('address')
const username = document.getElementById('username')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const register = document.getElementById('register')

// console.log(name, tel, address, username, password, password2, register)

register.addEventListener('click', function () {
  if (!name.value.trim()) {
    alert('姓名沒填')
    return
  }
  if (!tel.value.trim()) {
    alert('電話勒?')
    return
  }
  if (password.value != password2.value) {
    alert('密碼不同啊')
    return
  }
})
