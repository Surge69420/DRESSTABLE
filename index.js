function ChangeNavIcon() {
    let navToggle = document.getElementById('NavToggle');
    let navBar = document.getElementById("Navigation");
    let navContent = document.getElementById("NavContent");
    navToggle.innerHTML = navToggle.innerHTML === 'X' ? '<span class="navbar-toggler-icon"></span>' : 'X';
    if (navBar.classList.contains("transparentNav")) {
        navBar.classList.remove("transparentNav");
    }
    else {
        navBar.classList.add("transparentNav");
    }
    if (navContent.classList.contains("fullscreenNav")) {
        navContent.classList.remove("fullscreenNav");
        navContent.style.height = "auto";
    } else {
        navContent.classList.add("fullscreenNav")
        navContent.style.height = "100vh";
    }

}
window.onscroll = function () {

    let navBar = document.getElementById("Navigation");
    let navToggle = document.getElementById('NavToggle');
    let navContent = document.getElementById("NavContent");
    if (!navContent.parentNode.classList.contains("show") && !navContent.parentNode.classList.contains("collapsing")) {
        if (window.scrollY > 50) {
            if (navBar.classList.contains("navbar-expand-lg")) {
                navBar.classList.remove("navbar-expand-lg")
                navBar.classList.add("navScrolled")
                navBar.classList.add("transparentNav")
                document.getElementById("SmallLogo").classList.add("activeLogo");
                document.getElementById("SmallLogo").parentNode.classList.remove("LogoContainerBig");
                document.getElementById("BigLogo").classList.remove("activeLogo");
            }

            navToggle.classList.add("activeNavToggle");
        } else {
            if (!navBar.classList.contains("navbar-expand-lg")) {
                navBar.classList.add("navbar-expand-lg")
                navBar.classList.remove("navScrolled")
                document.getElementById("BigLogo").classList.add("activeLogo");
                document.getElementById("SmallLogo").parentNode.classList.add("LogoContainerBig");
                document.getElementById("SmallLogo").classList.remove("activeLogo");
            }
            navToggle.classList.remove("activeNavToggle");
        }
    }
};