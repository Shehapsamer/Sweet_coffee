// /////////////////////
window.addEventListener("scroll", function () {
    let nav = document.querySelector(".navbar");
    nav.classList.toggle("fix", window.scrollY > 150);
}) 
//////////////////////////
window.addEventListener("scroll" , function () {
    let scrollUp = document.querySelector(".scroll_up");
    scrollUp.classList.toggle("scroll_transition", window.scrollY > 150);
    scrollUp.classList.toggle("show_scroll", window.scrollY > 200)
})
    let scrollUp = document.querySelector(".scroll_up");

scrollUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    })
})
