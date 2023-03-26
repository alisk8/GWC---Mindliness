let text;
let textarea = document.getElementById('text_in');
let button = document.getElementById("submit_journal");
let addtext = document.getElementById("show_thoughts");

button.addEventListener('click', function getText() {
    text = textarea.value;
    addtext.innerHTML += text + "<br> <br>" ;
    textarea.value = "";
});