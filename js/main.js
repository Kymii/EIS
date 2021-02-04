const mobile_menu_open_btn = document.querySelector('.open-nav');
const mobile_menu_close_btn = document.querySelector('.close-nav');
const nav = document.querySelector('.mobile');
let counter = 1;
const header = document.getElementById('header-container');
showTestimonials(counter);
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


// show mobile menu 

mobile_menu_open_btn.addEventListener('click', () => {
    nav.classList.add('visible');
    mobile_menu_close_btn.style.display = "block";
    mobile_menu_open_btn.style.display = "none";
})

// hide mobile menu 

mobile_menu_close_btn.addEventListener('click', () => {
    nav.classList.remove('visible');
    mobile_menu_close_btn.style.display = 'none';
    mobile_menu_open_btn.style.display = 'block';
})

nav.addEventListener('click', () => {
    nav.classList.remove('visible');
    mobile_menu_close_btn.style.display = 'none';
    mobile_menu_open_btn.style.display = 'block';
})

// clicking previous will subtract 1 from counter 

document.querySelector(".previous").addEventListener('click', () => {
    countTestimonials(-1);
});

// clicking next wil ladd 1 to counter 

document.querySelector(".next").addEventListener('click', () => {
    countTestimonials(1);
});

// subtract or add to counter depending on which button is clicked 

function countTestimonials (t) {
    showTestimonials(counter += t);
}

// slideshow functionality 

function showTestimonials (n) {
    const testimonials = document.querySelectorAll(".testimonial");

    if (n > testimonials.length) {
        counter = 1;
    }

    if (n < 1 ) {
        counter = testimonials.length;
    }

    for (const testimonial of testimonials) {
        testimonial.style.display = 'none';
    }

    testimonials[counter - 1].style.display = 'flex';
}