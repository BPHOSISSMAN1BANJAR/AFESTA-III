const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function () {
	nav.classList.toggle('slide');
});

//Sider 

let slider = document.querySelector('.slider')
let nextBtn = document.querySelector('.next')
let prevBtn = document.querySelector('.prev')

nextBtn.onclick = () => {
	slider.append(slider.querySelector('img:first-child'))
};

prevBtn.onclick = () => {
	slider.prepend(slider.querySelector('img:last-child'))
};