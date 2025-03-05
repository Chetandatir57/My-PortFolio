let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
let isScrolling = false;

// Scroll event
window.onscroll = () => {
    if (!isScrolling) {
        isScrolling = true;
        setTimeout(() => {
            section.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');

                // Check if the section is in view
                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                    });
                    // Correct query selector for active link
                    document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
                }
            });
            isScrolling = false;
        }, 100);  // This throttles the scroll event to run every 100ms
    }
};

// Toggle menu visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close the menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});
