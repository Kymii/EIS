const mobile_menu_open_btn = document.querySelector('.open-nav');
const mobile_menu_close_btn = document.querySelector('.close-nav');
const nav = document.querySelector('.mobile');

mobile_menu_open_btn.addEventListener('click', () => {
    nav.classList.add('visible');
    mobile_menu_close_btn.style.display = "block";
    mobile_menu_open_btn.style.display = "none";
})

mobile_menu_close_btn.addEventListener('click', () => {
    nav.classList.remove('visible');
    mobile_menu_close_btn.style.display = 'none';
    mobile_menu_open_btn.style.display = 'block';
})

