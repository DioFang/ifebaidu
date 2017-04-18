var container = document.querySelector("#container");
var indexPic = 0;
var banner = function() {
	var value = indexPic++ * -40;
	container.style.transform = 'rotateY(' + value +'deg)';
}

container.addEventListener('click',banner);

window.setInterval(function() {
	banner();
},3000);