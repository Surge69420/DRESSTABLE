scrollFunc(document.querySelector("nav"));
function ChangeNavIcon() {
    document.body.style.overflow = "none";
    let content = document.querySelector("nav");
    let navToggle = document.getElementById('NavToggle');
    navToggle.innerHTML = navToggle.innerHTML === 'menu' ? 'close' : 'menu';
    scrollFunc(content);
    if (content.style.height !== "100vh") {
        document.body.style.overflow = "hidden";
        content.style.height = "100vh";
        content.style.background = "white";
        var elems = document.querySelectorAll(".nav-link");
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].classList.remove("InVisible");
        }
    } else {
        document.body.style.overflow = "";
        content.style.height = "";
        content.style.background = "";
        var elems = document.querySelectorAll(".nav-link");
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].classList.add("InVisible");
        }
    }
}
window.onscroll = function () {
    let content = document.querySelector("nav");
    if (content.style.height !== "100vh") {
        scrollFunc(content);
    }
}
function scrollFunc(content) {
    if (window.scrollY > 50) {
        var elems = document.querySelectorAll(".nav-link");
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].classList.add("InVisible");
        }
        document.getElementById("SmallLogo").classList.add("activeLogo");
        document.getElementById("SmallLogo").parentNode.classList.remove("LogoContainerBig");
        document.getElementById("BigLogo").classList.remove("activeLogo");
        content.classList.add("scrolled");
    } else {
        var elems = document.querySelectorAll(".nav-link");
        var index = 0, length = elems.length;
        for (; index < length; index++) {
            elems[index].classList.remove("InVisible");
        }
        document.getElementById("BigLogo").classList.add("activeLogo");
        document.getElementById("SmallLogo").parentNode.classList.add("LogoContainerBig");
        document.getElementById("SmallLogo").classList.remove("activeLogo");
        content.classList.remove("scrolled");
    }
}
