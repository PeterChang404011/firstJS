const data = document.getElementById('data')
const rawData = [
  { name: '張阿花', tel: '02-29879998' },
  { name: '吳阿寶', tel: '02-29871172' },
  { name: '陳天才', tel: '02-29679991' },
]

// 先以分行符號來取得多行陣列值
let studnets = ''
for (let i = 0; i < rawData.length; i++) {
  studnets += rawData[i]
}

data.innerHTML = studnets
