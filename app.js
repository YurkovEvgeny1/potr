let burgerMenu = document.querySelector(".burger");
let headerMenu = document.querySelector(".header__menu");
let spanBurger = document.querySelector(".span");
let leng = document.querySelector(".home__lang");
let menuItem = document.querySelectorAll(".menu__item")

burgerMenu.onclick = function(){
	burgerMenu.classList.toggle("active");
	headerMenu.classList.toggle("active");
	spanBurger.classList.toggle("active");
	leng.classList.toggle("active");
}

menuItem.forEach(function(item) {
	item.addEventListener("click", function(){
		burgerMenu.classList.remove("active");
		headerMenu.classList.remove("active");
		spanBurger.classList.remove("active");
		leng.classList.remove("active");
	})
	
})

// Плавный скрол

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};