const registrationName = document.getElementById("registrationName")
const registrationPassword = document.getElementById("registrationPassword")
const registrationButton = document.querySelector(".registration__button")

registrationButton.addEventListener("click" , (e) => {
    e.preventDefault()
    if (registrationPassword.value === "123456" && registrationName.value.toLocaleLowerCase() === "степа"){
        alert("Степа вошел в систему")
    }
    else{
        alert("Нет такого пользователя")
    }
})