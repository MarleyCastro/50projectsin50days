const text = document.getElementById("text");
const click = document.getElementById("click");

click.addEventListener("click", (e) => {
    e.preventDefault();
    speechSynthesis.speak(new SpeechSynthesisUtterance(text.value))

    if (text.value === "") {
        viewText.style.color = "brown";
        viewText.innerText = `no data, please enter😶‍🌫️`;
        return 0;
    }
})