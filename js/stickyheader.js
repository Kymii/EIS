const header = document.getElementById('header-container');

window.onscroll = function() {
    fixHeader();
}

// create fixed header on scroll
const sticky = header.offsetTop;

const fixHeader = () => {
    if(window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}