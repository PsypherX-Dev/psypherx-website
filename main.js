window.onscroll = function () {
    scrollFunction();
}

function scrollFunction () {
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

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function mobileNavBar() {
    var x = document.getElementById("myTopnav");
    var y = document.getElementById("navbar");

    if (x.className === "nav-items") {
      x.className += " responsive";
    } else {
      x.className = "nav-items";
    }

    if (y.className === "") {
        y.className += " responsive";
      } else {
        y.className = "";
      }
  } 
