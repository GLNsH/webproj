
function func(element) {
    e.src = "diddy.jfif";
}

let arr = document.querySelectorAll("img");
arr.forEach((e) => {
    e.addEventListener("click",()=>{func(e)});
})
