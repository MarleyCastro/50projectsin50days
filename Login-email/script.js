const frm = document.getElementById("frm")
const inputEmail = document.getElementById("inputEmail");
const inputBtn = document.getElementById("inputBtn");
const view = document.getElementById("view");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (inputEmail.value.trim() === "") {
        view.style.color = "brown";
        view.innerText = `Ops!! Não encontrei seu e-mail 😶‍🌫️`;
        return 0;
    }

    if (regex.test(inputEmail.value)) {
        view.style.color = "green";
        view.innerText = `Seu Email está válido ${inputEmail.value}`;
    } else {
        view.style.color = "red";
        view.innerText = `Seu Email está Inválido ${inputEmail.value} 😢`;
        return 0;
    }


})