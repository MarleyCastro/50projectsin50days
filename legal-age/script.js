const body = document.body;
const inputText = document.getElementById("inputText");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", (e) => {
    if (inputText.value.trim() === "") {
        view.style.color = "brown";
        view.innerText = `where your age 😶‍🌫️`;
        return 0;
    }

    if (inputText.value < 18) {
        view.innerText = `You are minor age 😢`;
        view.className = "text-danger fw-bold text-center p-2";
    } else {
        view.innerText = `You are of legal age 👏`;
        view.className = "text-primary fw-bold text-center p-2";
    }
})