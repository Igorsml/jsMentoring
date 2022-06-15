// fix scrypt in head
document.addEventListener('DOMContentLoaded', () => {
  const num1 = document.querySelector('#num1')
  const num2 = document.querySelector('#num2')
  const addBtn = document.querySelector('#add')
  const subBtn = document.querySelector('#sub')
  const output = document.querySelector('#output')

  function getInputValues() {
    debugger
    const value1 = +num1.value;
    const value2 = parseInt(num2.value);

    return [value1, value2]
  }

  function addHandler() {
    const values = getInputValues()
    console.log('values:', values) // string in arr

    const result = values[0] + values[1]
    console.log('result:', typeof (result)) // string
    displayResult(result)
  }

  function subHandler() {
    const values = getInputValues()

    const result = values[0] - values[1]
    displayResult(result)
  }

  function displayResult(result) {
    output.closest('.card').style.display = 'block'
    output.innerHTML = `Result = ${result}`
  }

  // console.log('null?', addBtn) // null
  addBtn.addEventListener('click', addHandler)
  subBtn.addEventListener('click', subHandler)

})

/*
1) We can hover on values, methods
2) Escape in source open console 
3) Deactivate breakpoints
4) Watch values 
5) change breakpoint (like value only > 50)
*/