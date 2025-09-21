let openBtn = document.getElementById('openModal');
let closeBtn = document.getElementById('closeModal');
let modal = document.getElementById('mdl');

openBtn.addEventListener("click", () => {
    mdl.classList.add("open");
});

closeBtn.addEventListener("click", () => {
    mdl.classList.remove("open");
});
