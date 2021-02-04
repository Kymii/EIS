
const location = location.href;
const link = document.querySelectorAll('a');
const menuLength = link.length;

for (let i = 0; i < menuLength; i++) {
    if(link[i].href === location) {
        link[i].className = "active";
    }
}