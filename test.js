const number = document.getElementById('number')
const name = document.getElementById('name')
const model = document.getElementById('model')
const brand = document.getElementById('brand')
const price = document.getElementById('price')
let phone001 = {
  商品編號: '001',
  商品名稱: 'iphone',
  商品型號: 'iphone11 pro',
  商品品牌: 'apple',
  商品價格: 20000,
}

number.innerHTML = phone001['商品編號']
name.innerHTML = phone001['商品名稱']
model.innerHTML = phone001['商品型號']
brand.innerHTML = phone001['商品品牌']
price.innerHTML = phone001['商品價格']
