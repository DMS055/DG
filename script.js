const options = {
    strings: [
        "Ekspert.",
        "Partner.",
        "Najlepszy wybór."
    ],
    smartBackspace: true,
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
	backDelay: 3000,
};

var typed = new Typed('#text', options);

let nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 70) {
        nav.classList.add('sticky_nav');
    } else {
        nav.classList.remove("sticky_nav");
    }
});