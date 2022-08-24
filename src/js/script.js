const nav = document.getElementById("nav");
const close = document.getElementById("close");
const open = document.getElementById("open");

open.addEventListener("click", function() {
    nav.classList.add("left-0");
});


close.addEventListener("click", function() {
    nav.classList.remove("left-0");
});


//lightbox
const lightbox = document.querySelector(".lightbox");
// console.log(lightbox);
const lightbody = document.querySelector(".lightbox-body");
const images = document.querySelectorAll("#gallery");
// console.log(images);


images.forEach(function(image) {
    image.addEventListener("click", function(){
        lightbox.classList.add("scale-100");
        const img = document.createElement("img");
        img.src = image.src;
        img.classList.add("w-full");
        img.classList.add("h-full");
        img.classList.add("image-cover");
        if(lightbody.children[0]) {
            lightbody.removeChild(lightbody.children[0])
        }
        // console.log(img);

        lightbody.appendChild(img);
        // console.log(lightbody);
    })
});

lightbox.addEventListener("click", function(){
    lightbox.classList.remove("scale-100");
})