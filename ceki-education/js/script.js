var popup = document.querySelector('.sign-up');

var openPopupButton = document.querySelector('.button-open');
var closePopupButton = document.querySelector('.button-close');
var exitPopupButton = document.querySelector('.button-exit');

openPopupButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.add('popup--show');

});

closePopupButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.remove('popup--show');

});

exitPopupButton.addEventListener('click', function (evt) {
	evt.preventDefault();
	popup.classList.remove('popup--show');

});