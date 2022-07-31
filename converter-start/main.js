const rates = {}

const elementUSD = document.querySelector('[data-value="USD"]')

const input_1 = document.querySelector('#input1')
const input_2 = document.querySelector('#input2')
const form_1 = document.querySelector('.form_1')
const form_2 = document.querySelector('.form_2')
const btn = document.querySelector('.btn')


getCurriencies ()

async function getCurriencies () {
  const response = await fetch("https://www.cbr-xml-daily.ru/daily_json.js")
  const data = await response.json()
  const result = await data
  

  rates.USD = result.Valute.USD
  rates.RUB = 61,6200

  elementUSD.textContent = rates.USD.Value.toFixed(2)

}

const convertValue = () => {
  result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2);
}

btn.addEventListener('click', () => {
  if(form_1.value === 'USD') {
    form_2.value = 'RUB'
    input_2.value = (parseFloat(input_1.value) * rates[form_2.value]).toFixed(2);
  } else if(form_1.value === 'RUB') {
    form_2.value = 'USD'
    input_2.value = (parseFloat(input_1.value) / rates[form_1.value]).toFixed(2);
  }
})

