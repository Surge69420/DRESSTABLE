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
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (scrollPercent >= 80) {
        scrollIndic = document.querySelector(".scrollIndicator");
        arrow = document.querySelector("#arrow");
        arrow.style.transform = "scale(-1)"
        scrollIndic.style.flexDirection = "column-reverse"
        scrollIndic.style.color = "#d1d7ad";
    } else {
        scrollIndic = document.querySelector(".scrollIndicator");
        arrow = document.querySelector("#arrow");
        arrow.style.transform = "scale(1)"
        scrollIndic.style.flexDirection = ""
        scrollIndic.style.color = "";
    }
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

function Scroll()
{

    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollPercent = (scrollTop / scrollHeight) * 100;

    if (scrollPercent <= 80) {
        let scrollBottomDummy = document.getElementById("DummyBottom");
        scrollBottomDummy.scrollIntoView({ behavior: "smooth", block: "end" });
    } else {
        let scrollTopDummy = document.getElementById("DummyTop");
        scrollTopDummy.scrollIntoView({ behavior: "smooth", block: "end" });
    }
}
