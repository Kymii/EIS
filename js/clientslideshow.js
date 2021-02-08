let counter = 1;
showTestimonials(counter);


// clicking previous will subtract 1 from counter 

document.querySelector(".previous").addEventListener('click', () => {
    countTestimonials(-1);
});

// clicking next will add 1 to counter 

document.querySelector(".next").addEventListener('click', () => {
    countTestimonials(1);
});

// subtract or add to counter depending on which arrow(left or right) is clicked 

function countTestimonials (c) {
    showTestimonials(counter += c);
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