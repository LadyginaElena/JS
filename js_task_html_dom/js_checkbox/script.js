btnElement = document.querySelector(".btn");
resultElement = document.querySelector(".result");
checkboxButtons = document.querySelectorAll('[name="cake"]');


btnElement.addEventListener("click", function () {
    let totalSum = 0;
    for (const checkboxButton of checkboxButtons) {
        if (checkboxButton.checked) {
            totalSum += parseInt(checkboxButton.value);
        }
    } resultElement.textContent = `${totalSum} руб`;
});
