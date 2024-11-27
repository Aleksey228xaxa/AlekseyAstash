
const goTopBtn= document.querySelector(".go-top");

goTopBtn.addEventListener("click", goTop);
function goTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -75);
        setTimeout(goTop, 0);
    }
}
