window.onload = function() {
    
}

window.onscroll = function () {
    scrollFunction();
}

function scrollFunction () {
    // NavBar
    // if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
    //     document.getElementById("navbar").style.opacity = 0.5;
    //     document.getElementById("navbar").style.transition = "opacity 0.3s";
    // }
    // else {
    //     document.getElementById("navbar").style.opacity = 1;
    //     document.getElementById("navbar").style.transition = "opacity 0.3s";
    // }

    // Scroll To Top Button
    if (document.documentElement.scrollTop > 700) {
        document.getElementById("scrolltotop_parent").style.opacity = 1;
        document.getElementById("scrolltotop_parent").style.transition = "opacity 0.3s";
        document.getElementById("scrolltotop_parent").style.cursor = "pointer";
    }
    else {
        document.getElementById("scrolltotop_parent").style.opacity = 0;
        document.getElementById("scrolltotop_parent").style.transition = "opacity 0.3s";
        document.getElementById("scrolltotop_parent").style.cursor = "default";
    }
}

function scrollToTop () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

function navbarHover (flag) {
    if (flag) {
        document.getElementById("navbar").style.opacity = 1;
        document.getElementById("navbar").style.transition = "opacity 0.3s";
    }
    else {
        scrollFunction();
    }
}