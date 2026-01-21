import "../sass/style.scss";

const hamburger = document.querySelector(".hamburger"),
	menu = document.querySelector(".menu"),
	closeElem = document.querySelector(".menu__close");

hamburger.addEventListener("click", () => {
	menu.classList.add("active");
});

closeElem.addEventListener("click", () => {
	menu.classList.remove("active");
});

const sidepanel = document.querySelector(".sidepanel");
const promo = document.querySelector(".promo");

// Функція перевірки скролу
function checkScroll() {
	// Отримуємо висоту першої секції
	const promoHeight = promo.offsetHeight;

	if (window.scrollY > promoHeight - 200) {
		sidepanel.classList.add("sidepanel_black");
	} else {
		sidepanel.classList.remove("sidepanel_black");
	}
}

// Слухаємо подію скролу
window.addEventListener("scroll", checkScroll);

// Викликаємо один раз при завантаженні (на випадок, якщо сторінку оновили посередині)
checkScroll();
