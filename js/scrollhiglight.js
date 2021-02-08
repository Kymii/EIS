let main_links = document.querySelectorAll(".nav-desktop"); //select links we want to change
let main_sections = document.getElementsByTagName('section'); // select sections 

window.addEventListener("scroll", event => {
    let top = window.scrollY + 105; 

    main_links.forEach(link => {
        let section = document.querySelector(link.hash); //loop through each link and assign the sectin associated

        if (section.offsetTop <= top && section.offsetTop + section.offsetHeight > top) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});