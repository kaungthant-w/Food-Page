const nav = document.getElementById("nav");
const close = document.getElementById("close");
const open = document.getElementById("open");

open.addEventListener("click", function() {
    nav.classList.add("left-0");
});


close.addEventListener("click", function() {
    nav.classList.remove("left-0");
});