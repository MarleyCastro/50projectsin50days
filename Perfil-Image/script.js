const image = document.getElementById("image"),
    inFile = document.getElementById("inFile");

inFile.addEventListener("change", () => {
    image.src = URL.createObjectURL(inFile.files[0]);
});