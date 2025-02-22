let nav = document.querySelector("nav");
let diffBtn = document.querySelector(".diff_btn");
let diffDet = document.querySelector(".about_bottom");

const options = {
	strings: ["Ekspert.", "Partner.", "Najlepszy wybór."],
	smartBackspace: true,
	typeSpeed: 100,
	backSpeed: 60,
	loop: true,
	backDelay: 3000,
};

var typed = new Typed("#text", options);

diffBtn.addEventListener("click", () => {
	diffDet.classList.toggle("show_diff");
});

diffBtn.addEventListener("click", () => {
	if (diffDet.classList.contains("show_diff")) {
		window.scroll({
			top: 1000,
			behavior: "smooth",
		});
	}
});

window.addEventListener("scroll", () => {
	if (window.scrollY > 70) {
		nav.classList.add("sticky_nav");
	} else {
		nav.classList.remove("sticky_nav");
	}
});
