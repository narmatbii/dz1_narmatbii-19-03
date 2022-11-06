const personalNum = document.querySelector('.personalNum')
const phoneSubmit = document.querySelector('.phoneSubmit')
const result = document.querySelector('#result')
console.log(personalNum)

let regExp = /\+2\d{4}\d{3}\d{3}\d{3}$/

phoneSubmit.addEventListener('click',() => {
    if (regExp.test(personalNum.value)){
        result.innerText = 'Success'
        result.style.color = 'green'
    }else{
        result.innerText = 'alet'
        result.style.color = 'red'
    }
})





