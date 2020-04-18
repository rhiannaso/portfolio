function prepScroll() {
    var windowHeight = window.innerHeight;
    var amtScrolled = window.pageYOffset;
    var percentScrolled = (amtScrolled/windowHeight)*100;

    if(percentScrolled > 25) {
        document.getElementById("scrollButton").style.display = "block";
    } else {
        document.getElementById("scrollButton").style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function enlarge(img_obj) {
    var img = document.getElementById(img_obj.id);
    var enlargedImg = document.getElementById("big"+img_obj.id);
    var lightbox = document.getElementById("box"+img_obj.id);
    lightbox.style.display = "flex";
    enlargedImg.src = img_obj.src;

    window.onclick = function(event) {
        if (event.target.className == "lightbox") {
            lightbox.style.display = "none";
        }
    }
}

