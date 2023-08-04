document.querySelectorAll('.scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function navbar() {
    const sidebar = document.querySelector(".sidenavbar");
    const main = document.querySelector(".viewport");
    const screenWidth = window.innerWidth;
    if (screenWidth > 1024) {
        sidebar.style.display = "block";
        main.style.display = "none";
    } else {
        sidebar.style.display = "none";
        main.style.display = "block";
    }
}

window.onload = navbar;
window.onresize = navbar;