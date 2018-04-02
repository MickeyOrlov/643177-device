var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".write-us");
var closePopup = document.querySelector(".write-us-close");
var linkMap = document.querySelector(".contact-map-link");
var popupMap = document.querySelector(".map-modal")
var closeMap = document.querySelector(".map-modal-close")

link.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.add("modal-show");
	name.focus();
	popup.offsetWidth = popup.offsetWidth;
});

closePopup.addEventListener("click", function(evt) {
	evt.preventDefault();
	popup.classList.remove("modal-show");
});

linkMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.add("modal-show");
});
closeMap.addEventListener("click", function(evt) {
	evt.preventDefault();
	popupMap.classList.remove("modal-show")
})
