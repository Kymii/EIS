//dynamic menu for desktop

const items = ['Home', 'Products', 'About', 'Testimonials'];

for (item of items) {
    const newItem = document.createElement('li'); //create new list node
    const newLink = document.createElement('a'); // create new link node

    const section_name = document.createTextNode(item); //grab each section name from the list 

    newLink.appendChild(section_name); // append the section to a link
    newLink.setAttribute('href', `#${item}`.toLowerCase()); // set the href
    newLink.classList.add('nav-desktop'); // add the class
    newItem.appendChild(newLink); // append link to new menu item

    document.querySelector(".desktop").appendChild(newItem); // append UL with new list items
};

//dynamic menu for mobile

const mobile_items = ['Home', 'Products', 'About', 'Testimonials', 'Contact'];

for (item of mobile_items) {
    const newItem = document.createElement('li'); 
    const newLink = document.createElement('a'); 

    const section_name = document.createTextNode(item); 

    newLink.appendChild(section_name); 
    newLink.setAttribute('href', `#${item}`.toLowerCase());
    newLink.classList.add('nav-links'); 
    newItem.appendChild(newLink); 

    document.querySelector(".mobile_menu").appendChild(newItem);
};