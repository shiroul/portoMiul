var header = document.getElementById("header");
var sticky = header.offsetTop;

window.addEventListener("scroll", function() {
    if(scrollY > sticky){

        header.classList.add('stickyHeader')
        return
    }
    header.classList.remove('stickyHeader')
})