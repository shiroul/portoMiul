var header = document.getElementById("header");
var sticky = header.offsetTop;

window.addEventListener("scroll", function() {
    console.log('banana')
    if(scrollY > sticky){
        header.classList.add('stickyHeader')
        return
    }
    header.classList.remove('stickyHeader')
})