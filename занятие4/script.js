var button = document.getElementById("knopka");
var button = document.getElementById("Cels");
var button = document.getElementById("Far");
var count = 0;

function print() {
    var temp = Number(celsius.value);
    farenheit.value = 9/5 + temp +32;
}

button.addEventListener("click",print);