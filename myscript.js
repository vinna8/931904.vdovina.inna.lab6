var cat = document.querySelector(".img_cat");
var dog = document.querySelector(".img_dog");

function LeftCol() {
	cat.classList.add('active_cat');
	dog.classList.add('inactive_dog');
	
	cat.classList.remove('inactive_cat');
	dog.classList.remove('active_dog');
}

function BothCol() {
	cat.classList.remove('active_cat');
	dog.classList.remove('active_dog');
	
	cat.classList.remove('inactive_cat');
	dog.classList.remove('inactive_dog');
}

function RightCol() {
	dog.classList.add('active_dog');
	cat.classList.add('inactive_cat');
	
	dog.classList.remove('inactive_dog');
	cat.classList.remove('active_cat');
}