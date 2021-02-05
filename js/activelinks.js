const links = document.querySelectorAll('.nav-desktop');

for (const link of links) {
    link.addEventListener('click', function() {
        links.forEach((Link)=>Link.classList.remove('active'));
        link.classList.add('active');
    })
}