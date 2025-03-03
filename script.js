window.addEventListener("scroll", function() {
    let navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.style.background = "#222";
    } else {
        navbar.style.background = "transparent";
    }
});
