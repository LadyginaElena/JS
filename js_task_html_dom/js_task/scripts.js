btnElement = document.querySelector('.btn')
surnameElement = document.querySelector('[name=surname]')
nameElement = document.querySelector(`[name=name]`)
resultElement = document.querySelector(`.result`)

btnElement.addEventListener("click", function () {
    resultElement.textContent = `Здравствуйте, ${surnameElement.value} ${nameElement.value}!`;
});