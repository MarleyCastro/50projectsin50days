document.getElementById('date').onclick = () => date();
function date() {
    let inputDataAge = document.getElementById('date_age').value;

    let DateSelection = document.getElementById('age');

    if (!inputDataAge) {
        alert("Please enter valid date.")
        return 0;
    }

    let DateAge = new Date(inputDataAge);
    let Today = new Date();

    let age = Today.getFullYear() - DateAge.getFullYear();
    let Month = Today.getDate() - DateAge.getMonth();
    let Day = Today.getDate() - DateAge.getDate();

    if (Month < 0 || (Month === 0 && Day < 0)) {
        age--;
    }

    document.getElementById('age').innerHTML = `Wow 😱, you have ${age} !! this amazing`;
}