// source help for functionality 
// https://forum.freecodecamp.org/t/active-navigation-bar-scroll/332875

let main_links = document.querySelectorAll(".nav-desktop"); //grab links we want to change
let main_sections = document.getElementsByTagName('section'); // grab sections 

window.addEventListener("scroll", event => {
    let top = window.scrollY + 105; 

    main_links.forEach(link => {
        let section = document.querySelector(link.hash); //loop through each link and assign the section associated

        if (section.offsetTop <= top && section.offsetTop + section.offsetHeight > top) {  //only highlights one section at a time
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});